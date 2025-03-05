const express = require("express")
const app = express()
const cors = require("cors")
const PDFDocument = require('pdfkit');
const fs = require("fs")
const path = require("path");
const metodos = require("./db/metodos.json")
const axios = require("axios")
const port = 3500


const cotizacionesFilePath = path.join(__dirname, '/db/cotizaciones.json');


const obtenerValorUF = async () => {
    try {
        const response = await axios.get('https://mindicador.cl/api/uf');
        return response.data.serie[0].valor; // Retorna el valor más reciente de la UF
    } catch (error) {
        console.error('Error obteniendo el valor de la UF:', error);
        return null; // Retorna null si hay un error
    }
};

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/generar',async (req, res) =>{
    const { nombre, email, telefono, producto, cantidad,rut , observaciones} = req.body;
    
    //validacion
    if (!nombre || !email || !telefono || !producto || !cantidad ||!rut) {
        return res.status(400).json({ mensaje: 'Faltan campos' });
    }
    
    //logica para los medios de pago 
    //declaraciones directas 
    let valorUf = await obtenerValorUF()
    console.log(valorUf);
    
    let metodo = metodos[producto]
    let porcentajeDescuento = metodo.descuento
    let numeroCuotas = metodo.cuotas
    let porcentajePie = metodo.pie

    //valores uf
    let valorListaUf = metodo.valorLista
    let valorDescuentoUf = (valorListaUf*porcentajeDescuento)/100
    let valorFinalUf = valorListaUf - valorDescuentoUf
    let valorPieUf = (valorFinalUf*porcentajePie)/100
    let valorReservaUf = 250000/valorUf
    let valorCreditoUf = valorFinalUf - valorPieUf -valorReservaUf
    let valorCuotaUf = valorCreditoUf/numeroCuotas    

    //valores pesos chileno
    let valorListaPesos = metodo.valorLista*valorUf
    let valorDescuentoPesos = valorDescuentoUf*valorUf
    let valorFinalPesos = valorFinalUf*valorUf    
    let valorPiePesos = valorPieUf*valorUf
    let valorReservaPorsentaje = (valorReservaUf*100)/valorFinalUf    
    let valorCreditoPesos = valorCreditoUf*valorUf
    let valorCuotaPesos = valorCuotaUf*valorUf   

    // Crear la cotización
    const nuevaCotizacion = {
        id: Date.now(), // Usamos el timestamp como ID
        nombre,//listo
        email,//listo
        telefono,//listo
        producto,//listo 
        cantidad,//listo 
        valorListaUf, //listo
        valorListaPesos, //listo
        valorFinalUf, //listo
        rut, //listo 
        valorDescuentoUf, //listo 
        valorDescuentoPesos, //listo 
        valorUf, //listo
        valorPieUf,// 
        valorPiePesos, //listo
        porcentajePie,//listo
        porcentajeDescuento, //listo
        valorFinalPesos, //listo
        valorCreditoUf,//listo
        valorCreditoPesos,//listo
        valorCuotaUf,
        valorCuotaPesos,
        valorReservaUf, //listo
        valorReservaPorsentaje, //listo
        numeroCuotas, //listo
        observaciones, //listo 
        fecha: new Date().toISOString() //listo 
    };

    // Leer el archivo JSON
    fs.readFile(cotizacionesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo el archivo JSON:', err);
            return res.status(500).json({ error: 'Error al guardar la cotización' });
        }

        const cotizaciones = JSON.parse(data);
        cotizaciones.push(nuevaCotizacion);
    
                // Escribir en el archivo JSON
                fs.writeFile(cotizacionesFilePath, JSON.stringify(cotizaciones, null, 2), (err) => {
                    if (err) {
                        console.error('Error escribiendo en el archivo JSON:', err);
                        return res.status(500).json({ error: 'Error al guardar la cotización' });
                    }
        
                    res.json(nuevaCotizacion);
        });
    })

})

// Ruta para listar todas las cotizaciones
app.get('/cotizaciones', (req, res) => {
    fs.readFile(cotizacionesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo el archivo JSON:', err);
            return res.status(500).json({ error: 'Error al obtener las cotizaciones' });
        }

        const cotizaciones = JSON.parse(data);
        res.json(cotizaciones);
    });
});

// Ruta para generar el PDF de una cotización
app.get('/generar-pdf/:id', (req, res) => {
    const cotizacionId = parseInt(req.params.id);

    // Leer el archivo JSON
    fs.readFile(cotizacionesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo el archivo JSON:', err);
            return res.status(500).json({ error: 'Error al generar el PDF' });
        }

        const cotizaciones = JSON.parse(data);
        const cotizacion = cotizaciones.find(c => c.id === cotizacionId);

        if (!cotizacion) {
            return res.status(404).json({ error: 'Cotización no encontrada' });
        }

        // Crear el PDF
        const doc = new PDFDocument();
        const pdfPath = path.join(__dirname, `cotizacion_${cotizacionId}.pdf`);
        doc.pipe(fs.createWriteStream(pdfPath));

        // Agregar contenido al PDF

        // Agregar espacio para imágenes en la parte superior
        // PLACEHOLDER: Aquí irían las imágenes (logo, etc.)
        doc.image('./logo.png', 50, 50, { width: 100 }); // Ajusta la ruta y posición

        // Encabezado
        doc.fontSize(20).text('C O T I Z A C I Ó N  N °  1 2 8', { align: 'center' });
        doc.fontSize(12).text('2 7 / 0 2 / 2 0 2 5', { align: 'center' });
        doc.moveDown();

        // Saludo
        doc.fontSize(18).text(`¡Hola ${cotizacion.nombre}!`, { align: 'left' });
        doc.fontSize(14).text('Esta es tu cotización para acceder a Proyecto Land', { align: 'left' });
        doc.moveDown();

        // Sección de precios
        doc.fontSize(14).text('PRECIOS', { align: 'left', underline: true });
        doc.moveDown();
        doc.fontSize(12).text('Característica           Valor');
        doc.text('ACCIÓN C                 $1,766.00');
        doc.text('DESCUENTO                15.00%');
        doc.text('*120 de 8.70 UF');
        doc.moveDown();

        // Sección de formas de pago
        doc.fontSize(14).text('FORMAS DE PAGO', { align: 'left', underline: true });
        doc.moveDown();
        doc.fontSize(12).text('Característica           Cantidad   %        TOTAL');
        doc.text('RESERVA                  29         0.43%     $11,406.33');
        doc.text('PAGO INICIAL             450.33 UF  30.00%    $17,390.731');
        doc.text('ABONO CUOTAS             1501.10 UF 79.63%    $54,309.157');
        doc.moveDown();

        // Información del cliente
        doc.fontSize(14).text('INFORMACIÓN DEL CLIENTE', { align: 'left', underline: true });
        doc.moveDown();
        doc.fontSize(12).text(`Sr: ${cotizacion.nombre}`);
        doc.text(`Rut: ${cotizacion.rut || 'PLACEHOLDER_RUT'}`); // PLACEHOLDER: Agregar RUT
        doc.text(`Teléfono: ${cotizacion.telefono}`);
        doc.text(`Email: ${cotizacion.email}`);
        doc.moveDown();

        // Notas adicionales
        doc.fontSize(12).text('*El valor de la cuota en pesos del día de hoy es de $338.105 con un valor UF de $38.632');
        doc.text('**Los montos en pesos corresponden al valor de la UF de $38.632 al 27/02/2025, por lo cual sólo se citan como referencia');
        doc.moveDown();
        doc.text('Para reservar contacta a tu ejecutivo o ingresa a la web:', { align: 'left' });
        doc.text('https://aquiva_linkdesitio_dereserva.com', { align: 'left', color: 'blue', underline: true });



        // Finalizar el PDF
        doc.end();

        // Enviar el PDF como respuesta
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=cotizacion_${cotizacionId}.pdf`);
        fs.createReadStream(pdfPath).pipe(res);
    });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})
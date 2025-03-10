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

app.post('/api/generar',async (req, res) =>{
    const { nombre, email, telefono, producto, cantidad,rut , observaciones} = req.body;
    
    //validacion
    if (!nombre || !email || !telefono || !producto || !cantidad ||!rut) {
        return res.status(400).json({ mensaje: 'Faltan campos' });
    }
    
    
    //logica para los medios de pago 
    //declaraciones directas 
    let valorUf = await obtenerValorUF()
    
    let metodo = metodos[producto]
    let porcentajeDescuento = metodo.descuento
    let numeroCuotas = metodo.cuotas
    let porcentajePie = metodo.pie

    //valores uf
    let valorListaUf = metodo.valorLista
    let valorDescuentoUf = (valorListaUf*porcentajeDescuento)/100
    let valorFinalUf = valorListaUf - valorDescuentoUf
    let valorPieUf = (valorFinalUf*porcentajePie)/100
    let valorReservaUf = (250000/valorUf).toFixed(2)
    let valorCreditoUf = (valorFinalUf - valorPieUf -valorReservaUf).toFixed(2)
    let valorCuotaUf = (valorCreditoUf/numeroCuotas).toFixed(2)
    let valorReservaPorsentaje = ((valorReservaUf*100)/valorFinalUf).toFixed(2)

    //valores pesos chileno
    let valorListaPesos = metodo.valorLista*valorUf
    let valorDescuentoPesos = (valorDescuentoUf*valorUf).toFixed(2)
    let valorFinalPesos = (valorFinalUf*valorUf).toFixed(2)
    let valorPiePesos = (valorPieUf*valorUf).toFixed(2)
    let valorCreditoPesos = (valorCreditoUf*valorUf).toFixed(2)
    let valorCuotaPesos = (valorCuotaUf*valorUf ).toFixed(2)

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
        valorCuotaUf,//listo 
        valorCuotaPesos, //listo 
        valorReservaUf, //listo
        valorReservaPorsentaje, //listo
        numeroCuotas, //listo
        observaciones, //listo 
        fecha: new Date().toLocaleDateString('es-CL') //listo 
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
app.get('api/cotizaciones', (req, res) => {
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
app.get('api/generar-pdf/:id', (req, res) => {
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

         // Agregar imagen de logo
         try {
            doc.image('./logo.png', 25, 25, { width: 100 }); // Ajusta la ruta y posición
        } catch (error) {
            console.error('Error cargando la imagen:', error);
            doc.fontSize(12).text('Logo no disponible', 50, 50);
        }

        //imagen de cabecera
        try {
            const imagePath = './cabecera.png'; // Ruta de la imagen
            const imageWidth = 595.28 - 100; // Ancho del PDF menos márgenes (50 puntos a cada lado)
            const imageHeight = 170; // Alto de la imagen (ajusta este valor según sea necesario)

            doc.image(imagePath, 50, 75, { width: imageWidth, height: imageHeight }); // Imagen debajo del logo
        } catch (error) {
            console.error('Error cargando la imagen de cabecera:', error);
            doc.fontSize(12).text('Imagen de cabecera no disponible', 50, 160);
        }

        // Ajustar la posición del texto debajo de la imagen
        const margenSuperior = 15; // Margen entre la imagen y el texto
        doc.y = 75 + 170+ margenSuperior; // Posición vertical del texto

        // Encabezado
        doc.fontSize(20).text(`C O T I Z A C I Ó N  N °  ${cotizacion.id}`, { align: 'center' });
        doc.fontSize(12).text(`${cotizacion.fecha}`, { align: 'center' });
        doc.moveDown();

        // Saludo
        doc.fontSize(14).text(`¡Hola ${cotizacion.nombre}!`, { align: 'left' });
        doc.fontSize(12).text('Esta es tu cotización para acceder a Proyecto Land', { align: 'left'  });
   

        // Información del cliente
        doc.fontSize(10).text('INFORMACIÓN DEL CLIENTE', { align: 'right', underline: true });
        doc.fontSize(8).text(`Sr: ${cotizacion.nombre}`, { align: 'right' });
        doc.text(`Rut: ${cotizacion.rut || 'PLACEHOLDER_RUT'}`, { align: 'right' }); // PLACEHOLDER: Agregar RUT
        doc.text(`Teléfono: ${cotizacion.telefono}`, { align: 'right' });
        doc.text(`Email: ${cotizacion.email}`, { align: 'right' });
        doc.moveDown();

        // Sección de precios
        doc.fontSize(14).fill('#3B83BD').text('PRECIOS', { align: 'left', underline: true });
        doc.moveDown();
        doc.fontSize(12).fill("black").text('CARACTERÍSTICA               Valor                UF                     $', { align: 'justify' });
        doc.text(`${cotizacion.producto}                                ${cotizacion.valorListaUf}                 ${cotizacion.valorListaUf}                 ${cotizacion.valorListaPesos}`, { align: 'justify' });
        doc.text(`DESCUENTO                       ${cotizacion.porcentajeDescuento}%                    ${cotizacion.valorDescuentoUf}                       ${cotizacion.valorDescuentoPesos}`, { align: 'justify' });
        doc.text(`                               TOTAL                           ${cotizacion.valorFinalUf}                  ${cotizacion.valorFinalPesos}`, { align: 'justify' });
        doc.moveDown();

        // Sección de formas de pago
        doc.fontSize(14).fillColor("#3B83BD").text('DESGLOSE', { align: 'left', underline: true});
        doc.moveDown();
        doc.fontSize(12).fillColor('black').text('CARACTERÍSTICA               Valor                UF                     $', { align: 'justify' });
        doc.text(`RESERVA                              ${cotizacion.valorReservaPorsentaje}%             ${cotizacion.valorReservaUf}                 250000`, { align: 'justify' });
        doc.text(`PAGO INICIAL                       ${cotizacion.porcentajePie}%                ${cotizacion.valorPieUf}               ${cotizacion.valorPiePesos}`, { align: 'justify' });
        doc.text(`CREDITO n° cuotas ${cotizacion.numeroCuotas} de ${cotizacion.valorCuotaUf}               ${cotizacion.valorCreditoUf}            ${cotizacion.valorCreditoPesos}`, { align: 'justify' });
        doc.moveDown();



        // Notas adicionales
        doc.moveDown()
        doc.fontSize(12).text(`*El valor de la cuota en pesos del día de hoy es de $${cotizacion.valorCuotaPesos} con un valor UF de $${cotizacion.valorUf}`, { align: 'left' });
        doc.text(`**Los montos en pesos corresponden al valor de la UF de $${cotizacion.valorUf} al ${cotizacion.fecha}, por lo cual sólo se citan como referencia`, { align: 'left' });
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(12).text('www.proyectoland.com  Av.Kennedy 5488, torre norte, of.1305, Vitacura, Santiago Chile', { align: "left"})
        //doc.text('Para reservar contacta a tu ejecutivo o ingresa a la web:', { align: 'left' });
        //doc.text('https://aquiva_linkdesitio_dereserva.com', { align: 'left', color: 'blue', underline: true });

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
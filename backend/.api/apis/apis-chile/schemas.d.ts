declare const Banks: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarBrands: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarBrandsModels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly brand_id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 15;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID de la Marca que quieres consultar. El listado de marcas lo puedes obtener en https://docs.boostr.cl/reference/car-brands";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [44];
                            };
                            readonly brand_id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [15];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["IMPREZA"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarBrandsModelsVersions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly model_id: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 3609;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "ID del Modelo que quieres consultar. El listado de modelos lo puedes obtener en https://docs.boostr.cl/reference/car-brands-models";
                };
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 2024;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año de la versión que buscas.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly brand_id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [15];
                            };
                            readonly model_id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3609];
                            };
                            readonly year: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2023];
                            };
                            readonly sii_code: {
                                readonly type: "string";
                                readonly examples: readonly ["SU2270566"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["2.5I AWD CVT IRONMAN 70.3"];
                            };
                            readonly doors: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [5];
                            };
                            readonly cc: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [2.5];
                            };
                            readonly hp: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [182];
                            };
                            readonly fuel: {
                                readonly type: "string";
                                readonly examples: readonly ["Bencina"];
                            };
                            readonly transmission_type: {
                                readonly type: "string";
                                readonly examples: readonly ["CVT"];
                            };
                            readonly transmission_gears: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [7];
                            };
                            readonly drivetrain_type: {
                                readonly type: "string";
                                readonly examples: readonly ["4x4 (AWD)"];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly examples: readonly ["JAPÓN"];
                            };
                            readonly valuation: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [25493721];
                            };
                            readonly road_tax: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [729804];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["Suv"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarCheckCrossingsWithoutTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "BCYT91";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["SCLJ83"];
                            };
                            readonly status: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly from: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-12-18"];
                            };
                            readonly to: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-01-06"];
                            };
                            readonly dates: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly date: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-12-18"];
                                        };
                                        readonly amount: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [12720];
                                        };
                                        readonly alert: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Pagar hasta el 16-01-2025"];
                                        };
                                        readonly details: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly amount: {
                                                        readonly type: "integer";
                                                        readonly default: 0;
                                                        readonly examples: readonly [12720];
                                                    };
                                                    readonly company: {
                                                        readonly type: "string";
                                                        readonly examples: readonly ["Autopista Central"];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }, {
                readonly title: "Origen no disponible";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-05"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener información, vuelva a intentar mas tarde"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarFindByDocumentNumber: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rut: {
                    readonly type: "string";
                    readonly default: "7.342.646-4";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "RUT de la persona o empresa que desea consultar.";
                };
            };
            readonly required: readonly ["rut"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly owner: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly document: {
                                        readonly type: "string";
                                        readonly examples: readonly ["7342646"];
                                    };
                                    readonly dv: {
                                        readonly type: "string";
                                        readonly examples: readonly ["4"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["EVELYN ROSE MATTHEI FORNET"];
                                    };
                                };
                            };
                            readonly vehicles: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly plate: {
                                            readonly type: "string";
                                            readonly examples: readonly ["CRFX57"];
                                        };
                                        readonly dv: {
                                            readonly type: "string";
                                            readonly examples: readonly ["7"];
                                        };
                                        readonly make: {
                                            readonly type: "string";
                                            readonly examples: readonly ["TOYOTA"];
                                        };
                                        readonly model: {
                                            readonly type: "string";
                                            readonly examples: readonly ["CAMRY LEI 2.4 AUT"];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["AUTOMOVIL"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Rut inválido";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["U-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Rut inválido"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarInspection: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "BFXB85";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["BFXB85"];
                            };
                            readonly certificate: {
                                readonly type: "string";
                                readonly examples: readonly ["B0825000000262728"];
                            };
                            readonly kilometers: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [229980];
                            };
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-12-21"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["Aprobada"];
                            };
                            readonly due_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-08-31"];
                            };
                            readonly gases_status: {
                                readonly type: "string";
                                readonly examples: readonly ["Aprobada"];
                            };
                            readonly gases_due_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-08-31"];
                            };
                            readonly month: {
                                readonly type: "string";
                                readonly examples: readonly ["Agosto"];
                            };
                            readonly gas_type: {
                                readonly type: "string";
                                readonly examples: readonly ["GASOLINA"];
                            };
                            readonly service_type: {
                                readonly type: "string";
                                readonly examples: readonly ["TURISMO [A1] [A2]"];
                            };
                            readonly vehicle_type: {
                                readonly type: "string";
                                readonly examples: readonly ["AUTOMOVIL"];
                            };
                            readonly prt: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["AB0825"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["ECA CONTROL Y ASESORAMIENTO S.A."];
                                    };
                                    readonly location: {
                                        readonly type: "string";
                                        readonly examples: readonly ["SAN CARLOS"];
                                    };
                                };
                            };
                            readonly sticker: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly history: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly plate: {
                                            readonly type: "string";
                                            readonly examples: readonly ["BFXB85"];
                                        };
                                        readonly certificate: {
                                            readonly type: "string";
                                            readonly examples: readonly ["B0806000000236034"];
                                        };
                                        readonly kilometers: {
                                            readonly type: "integer";
                                            readonly default: 0;
                                            readonly examples: readonly [229918];
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-12-18"];
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Rechazada"];
                                        };
                                        readonly due_date: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-12-19"];
                                        };
                                        readonly gases_status: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Rechazada"];
                                        };
                                        readonly gases_due_date: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2024-12-19"];
                                        };
                                        readonly month: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Diciembre"];
                                        };
                                        readonly gas_type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["GASOLINA"];
                                        };
                                        readonly service_type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["TURISMO [A1] [A2]"];
                                        };
                                        readonly vehicle_type: {
                                            readonly type: "string";
                                            readonly examples: readonly ["AUTOMOVIL"];
                                        };
                                        readonly prt: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly code: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["AB0806"];
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["SOC. TÜV RHEINLAND - ACCHI LTDA."];
                                                };
                                                readonly location: {
                                                    readonly type: "string";
                                                    readonly examples: readonly ["CHILLÁN"];
                                                };
                                            };
                                        };
                                        readonly sticker: {
                                            readonly type: "string";
                                            readonly examples: readonly [""];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }, {
                readonly title: "Origen no disponible";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-05"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener información, vuelva a intentar mas tarde"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarPlate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "BCYT91";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly include: {
                    readonly type: "string";
                    readonly default: "owner";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Por defecto el servicio retornará información del vehículo solamente, si deseas incluir más información se debe especificar usando este parámetro. Para el plan `free`, `starter` y `pro` solamente puedes usar `owner` para incluir información del dueño del vehículo. Para el plan `full` pueden usar `owner`,`soap`, `public_transportation`, `inspection` y `traffic_tickets`. Si quieres incluir más de uno, debe ir todo separado por comas, ej: `owner, soap`.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["GPDD74"];
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["8"];
                            };
                            readonly make: {
                                readonly type: "string";
                                readonly examples: readonly ["SUBARU"];
                            };
                            readonly model: {
                                readonly type: "string";
                                readonly examples: readonly ["NEW WRX S AWD CVT 2.0T"];
                            };
                            readonly year: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2014];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["AUTOMOVIL"];
                            };
                            readonly engine: {
                                readonly type: "string";
                                readonly examples: readonly ["H983322"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "No encontrado";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No encontramos datos asociados a la patente ingresada"];
                    };
                };
            }, {
                readonly title: "OK con owner";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["GPDD74"];
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["8"];
                            };
                            readonly make: {
                                readonly type: "string";
                                readonly examples: readonly ["SUBARU"];
                            };
                            readonly model: {
                                readonly type: "string";
                                readonly examples: readonly ["NEW WRX S AWD CVT 2.0T"];
                            };
                            readonly year: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2014];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["AUTOMOVIL"];
                            };
                            readonly engine: {
                                readonly type: "string";
                                readonly examples: readonly ["H983322"];
                            };
                            readonly owner: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["JOSE ANDRES MANUEL MONSALVES"];
                                    };
                                    readonly documentNumber: {
                                        readonly type: "string";
                                        readonly examples: readonly ["12076432-6"];
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarPlateTesting: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "JG5165";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly include: {
                    readonly type: "string";
                    readonly default: "owner";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Por defecto el servicio retornará información del vehículo solamente, si deseas incluir más información se debe especificar usando este parámetro. Puedes usar `owner`, `soap`. `public_transportation`. `inspection` y `traffic_tickets`. Si quieres incluir más de uno, debe ir todo separado por comas, ej: `owner,soap`.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["GPDD74"];
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["8"];
                            };
                            readonly make: {
                                readonly type: "string";
                                readonly examples: readonly ["SUBARU"];
                            };
                            readonly model: {
                                readonly type: "string";
                                readonly examples: readonly ["NEW WRX S AWD CVT 2.0T"];
                            };
                            readonly year: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2014];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["AUTOMOVIL"];
                            };
                            readonly engine: {
                                readonly type: "string";
                                readonly examples: readonly ["H983322"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "No encontrado";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No encontramos datos asociados a la patente ingresada"];
                    };
                };
            }, {
                readonly title: "OK con owner";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["GPDD74"];
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["8"];
                            };
                            readonly make: {
                                readonly type: "string";
                                readonly examples: readonly ["SUBARU"];
                            };
                            readonly model: {
                                readonly type: "string";
                                readonly examples: readonly ["NEW WRX S AWD CVT 2.0T"];
                            };
                            readonly year: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2014];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["AUTOMOVIL"];
                            };
                            readonly engine: {
                                readonly type: "string";
                                readonly examples: readonly ["H983322"];
                            };
                            readonly owner: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["JOSE ANDRES MANUEL MONSALVES"];
                                    };
                                    readonly documentNumber: {
                                        readonly type: "string";
                                        readonly examples: readonly ["12076432-6"];
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarPublicTransportation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "BCYT91";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly title: "No pertenece";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["JTSS44"];
                            };
                            readonly is_public: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }, {
                readonly title: "Origen no disponible";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-05"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener información, vuelva a intentar mas tarde"];
                    };
                };
            }, {
                readonly title: "Es público";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["HGDG69"];
                            };
                            readonly is_public: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly register_code: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [3408];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["VIGENTE"];
                            };
                            readonly service_type: {
                                readonly type: "string";
                                readonly examples: readonly ["PÚBLICO - URBANO AUTOMOVIL TAXI EJECUTIVO"];
                            };
                            readonly capacity: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [4];
                            };
                            readonly register_date: {
                                readonly type: "string";
                                readonly examples: readonly ["2017-09-20"];
                            };
                            readonly mandatory_seatbelt: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly service_responsible: {
                                readonly type: "string";
                                readonly examples: readonly ["NICOLÁS RICHARD ALANIZ LEYTON"];
                            };
                            readonly vehicle_age: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [7];
                            };
                            readonly region: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [5];
                            };
                            readonly make: {
                                readonly type: "string";
                                readonly examples: readonly ["VOLKSWAGEN"];
                            };
                            readonly model: {
                                readonly type: "string";
                                readonly examples: readonly ["BORA TDI ADVANCE 2.0 AUT"];
                            };
                            readonly year: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [2017];
                            };
                        };
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarRecalls: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly vin: {
                    readonly type: "string";
                    readonly default: "JM7DK4W7AH0112470";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "VIN del vehículo que desea consultar. Si no lo sabe puede obtener buscando por patente en https://docs.boostr.cl/reference/car-plate";
                };
            };
            readonly required: readonly ["vin"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly vin: {
                                    readonly type: "string";
                                    readonly examples: readonly ["JM7DK4W7AH0112470"];
                                };
                                readonly url: {
                                    readonly type: "string";
                                    readonly examples: readonly ["https://www.sernac.cl/portal/619/w3-article-83667.html"];
                                };
                                readonly date: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2024-12-11"];
                                };
                                readonly title: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Vehículos Mazda 3 y CX3, años 2013-2021"];
                                };
                                readonly resume: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Importadora y Distribuidora Alameda SpA ha informado a SERNAC una alerta de seguridad para vehículos Mazda, modelos 3 y CX3, comercializado en Chile durante los años 2014 y 2021, debido a un posible defecto en la imagen de la cámara de retroceso, implicando un riesgo para la seguridad de los consumidores.\n\nLa campaña estará disponible a partir del 2 de enero de 2025."];
                                };
                                readonly description: {
                                    readonly type: "string";
                                    readonly examples: readonly ["La empresa informa que ciertas unidades de los modelos MAZDA3 BM_BN y CX3 DK, dentro del habitáculo trasero, la cámara de retroceso puede mostrar una imagen distorsionada o parpadeante. Una imagen distorsionada o parpadeante de la cámara de retroceso al conducir marcha atrás podría afectar el criterio del conductor, lo que aumenta el riesgo de colisión."];
                                };
                                readonly risk: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Colisión, choque, otros."];
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Rut inválido";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["VIN inválido"];
                    };
                };
            }, {
                readonly title: "Falta VIN";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar el VIN"];
                    };
                };
            }, {
                readonly title: "Sin permiso";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-06"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No tiene permiso a este servicio"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarSoap: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "BCYT91";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly title: "SOAP";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["BCYT91"];
                            };
                            readonly number_policy: {
                                readonly type: "string";
                                readonly examples: readonly ["8238391"];
                            };
                            readonly company: {
                                readonly type: "string";
                                readonly examples: readonly ["HDI SEGUROS S.A."];
                            };
                            readonly since: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-05-31"];
                            };
                            readonly to: {
                                readonly type: "string";
                                readonly examples: readonly ["2024-05-31"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }, {
                readonly title: "Origen no disponible";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-05"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener información, vuelva a intentar mas tarde"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rut: {
                    readonly type: "string";
                    readonly default: "16.163.631-2";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "RUT de la persona o empresa que desea consultar.";
                };
            };
            readonly required: readonly ["rut"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly document: {
                                readonly type: "string";
                                readonly examples: readonly ["16746484"];
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["K"];
                            };
                            readonly details: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly amount: {
                                            readonly type: "string";
                                            readonly examples: readonly ["1600"];
                                        };
                                        readonly company: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Costanera Norte"];
                                        };
                                        readonly company_id: {
                                            readonly type: "string";
                                            readonly examples: readonly ["6528"];
                                        };
                                    };
                                };
                            };
                            readonly last_updated: {
                                readonly type: "string";
                                readonly examples: readonly ["2025-01-16T03:14:20.000Z"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Rut inválido";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["U-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Rut inválido"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const CarTrafficTickets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly plate: {
                    readonly type: "string";
                    readonly default: "BCYT91";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Número de patente, puede ser en formato AA0000 o AAAA00.";
                };
            };
            readonly required: readonly ["plate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly plate: {
                                readonly type: "string";
                                readonly examples: readonly ["GSDL87"];
                            };
                            readonly tickets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly jpl: {
                                            readonly type: "string";
                                            readonly examples: readonly ["2 JPL LO ESPEJO"];
                                        };
                                        readonly rol: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Z5795 - 2018"];
                                        };
                                    };
                                };
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["1"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Falta patente";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar patente"];
                    };
                };
            }, {
                readonly title: "Patente inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Patente inválida"];
                    };
                };
            }, {
                readonly title: "Origen no disponible";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["V-05"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener información, vuelva a intentar mas tarde"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Earthquake: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-11-10"];
                        };
                        readonly hour: {
                            readonly type: "string";
                            readonly examples: readonly ["15:30:31"];
                        };
                        readonly place: {
                            readonly type: "string";
                            readonly examples: readonly ["8 km al noreste de Illapel"];
                        };
                        readonly magnitude: {
                            readonly type: "string";
                            readonly examples: readonly ["2.7"];
                        };
                        readonly depth: {
                            readonly type: "string";
                            readonly examples: readonly ["59 km"];
                        };
                        readonly latitude: {
                            readonly type: "string";
                            readonly examples: readonly ["-31.58"];
                        };
                        readonly longitude: {
                            readonly type: "string";
                            readonly examples: readonly ["-71.11"];
                        };
                        readonly image: {
                            readonly type: "string";
                            readonly examples: readonly ["https://sismologia.cl/sismicidad/informes/2023/11/214447.jpeg"];
                        };
                        readonly info: {
                            readonly type: "string";
                            readonly examples: readonly ["https://sismologia.cl/sismicidad/informes/2023/11/214447.html"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Earthquakes: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-11-10"];
                            };
                            readonly hour: {
                                readonly type: "string";
                                readonly examples: readonly ["15:30:31"];
                            };
                            readonly place: {
                                readonly type: "string";
                                readonly examples: readonly ["8 km al noreste de Illapel"];
                            };
                            readonly magnitude: {
                                readonly type: "string";
                                readonly examples: readonly ["2.7"];
                            };
                            readonly depth: {
                                readonly type: "string";
                                readonly examples: readonly ["59 km"];
                            };
                            readonly latitude: {
                                readonly type: "string";
                                readonly examples: readonly ["-31.58"];
                            };
                            readonly longitude: {
                                readonly type: "string";
                                readonly examples: readonly ["-71.11"];
                            };
                            readonly image: {
                                readonly type: "string";
                                readonly examples: readonly ["https://sismologia.cl/sismicidad/informes/2023/11/214447.jpeg"];
                            };
                            readonly info: {
                                readonly type: "string";
                                readonly examples: readonly ["https://sismologia.cl/sismicidad/informes/2023/11/214447.html"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyAllToday: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly dolar: {
                            readonly type: "object";
                            readonly properties: {
                                readonly date: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-11-10"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [902.89];
                                };
                            };
                        };
                        readonly uf: {
                            readonly type: "object";
                            readonly properties: {
                                readonly date: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-11-10"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [36466.69];
                                };
                            };
                        };
                        readonly euro: {
                            readonly type: "object";
                            readonly properties: {
                                readonly date: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-11-10"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [966.59];
                                };
                            };
                        };
                        readonly utm: {
                            readonly type: "object";
                            readonly properties: {
                                readonly date: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-11-01"];
                                };
                                readonly value: {
                                    readonly type: "integer";
                                    readonly default: 0;
                                    readonly examples: readonly [63960];
                                };
                            };
                        };
                        readonly ipc: {
                            readonly type: "object";
                            readonly properties: {
                                readonly date: {
                                    readonly type: "string";
                                    readonly examples: readonly ["2023-10-01"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly default: 0;
                                    readonly examples: readonly [0.4];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyAllYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año para consulta, ej: `2022`";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyCryptos: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["BTC"];
                            };
                            readonly value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [34299897];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyDolarToday: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-11-10"];
                        };
                        readonly value: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [902.89];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyDolarYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año para consulta, ej: `2022`";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-01-03"];
                            };
                            readonly value: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [844.69];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyEuroToday: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-11-10"];
                        };
                        readonly value: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [966.59];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyEuroYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año para consulta, ej: `2022`";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-01-03"];
                            };
                            readonly value: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [955.64];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyIpcToday: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-10-01"];
                        };
                        readonly value: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [0.4];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyIpcYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año para consulta, ej: `2022`";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-01-01"];
                            };
                            readonly value: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [1.2];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyUfToday: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-11-10"];
                        };
                        readonly value: {
                            readonly type: "number";
                            readonly default: 0;
                            readonly examples: readonly [36466.69];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyUfYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año para consulta, ej: `2022`";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-01-01"];
                            };
                            readonly value: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [30996.73];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyUtmToday: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly examples: readonly ["2023-11-01"];
                        };
                        readonly value: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [63960];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const EconomyUtmYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año para consulta, ej: `2022`";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-01-01"];
                            };
                            readonly value: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [54442];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GeographyCommunes: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly region_id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Arica"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GeographyProvinces: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly [" Antártica Chilena"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GeographyRegions: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                                readonly default: 0;
                                readonly examples: readonly [1];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Región de Arica y Parinacota"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Holidays: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2023-01-01"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["Año Nuevo"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["Civil"];
                            };
                            readonly inalienable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [true];
                            };
                            readonly extra: {
                                readonly type: "string";
                                readonly examples: readonly ["Civil e Irrenunciable"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const HolidaysYear: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly year: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Año a consultar";
                };
            };
            readonly required: readonly ["year"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly examples: readonly ["2020-01-01"];
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly examples: readonly ["Todos los Días Domingos"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["Civil"];
                            };
                            readonly inalienable: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly extra: {
                                readonly type: "string";
                                readonly examples: readonly ["Civil"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Ip: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly ip: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "IP que desea consultar";
                };
            };
            readonly required: readonly ["ip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly title: "Success";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly country: {
                                readonly type: "string";
                                readonly examples: readonly ["Chile"];
                            };
                            readonly countryCode: {
                                readonly type: "string";
                                readonly examples: readonly ["CL"];
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly examples: readonly ["RM"];
                            };
                            readonly regionName: {
                                readonly type: "string";
                                readonly examples: readonly ["Santiago Metropolitan"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly examples: readonly ["Santiago"];
                            };
                            readonly zip: {
                                readonly type: "string";
                                readonly examples: readonly ["34033"];
                            };
                            readonly lat: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [-33.4521];
                            };
                            readonly lon: {
                                readonly type: "number";
                                readonly default: 0;
                                readonly examples: readonly [-70.6536];
                            };
                            readonly timezone: {
                                readonly type: "string";
                                readonly examples: readonly ["America/Santiago"];
                            };
                            readonly isp: {
                                readonly type: "string";
                                readonly examples: readonly ["TELEFÓNICA CHILE S.A."];
                            };
                            readonly org: {
                                readonly type: "string";
                                readonly examples: readonly ["TELEFÓNICA CHILE S.A"];
                            };
                            readonly as: {
                                readonly type: "string";
                                readonly examples: readonly ["AS7418 TELEFÓNICA CHILE S.A."];
                            };
                            readonly proxy: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly hosting: {
                                readonly type: "boolean";
                                readonly default: true;
                                readonly examples: readonly [false];
                            };
                            readonly ip: {
                                readonly type: "string";
                                readonly examples: readonly ["191.112.179.129"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "IP inválida";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly ["Ip inválida"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Isapres: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const PasswordGenerate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly length: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 12;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Largo de la contraseña, el valor máximo permitido es 50.";
                };
                readonly numbers: {
                    readonly type: "string";
                    readonly enum: readonly ["0", "1"];
                    readonly default: "1";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Permite incluir números en la contraseña";
                };
                readonly symbols: {
                    readonly type: "string";
                    readonly enum: readonly ["0", "1"];
                    readonly default: "1";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Permite incluir símbolos en la contraseña";
                };
                readonly lowercase: {
                    readonly type: "string";
                    readonly enum: readonly ["0", "1"];
                    readonly default: "1";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Permite incluir letras en minúscula en la contraseña";
                };
                readonly uppercase: {
                    readonly type: "string";
                    readonly enum: readonly ["0", "1"];
                    readonly default: "1";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Permite incluir letras en mayúscula en la contraseña";
                };
                readonly exclude: {
                    readonly type: "string";
                    readonly default: "''";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Permite excluir caracteres de la contraseña. Ej: `aeiou` elimina todas las vocales de la contraseña";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly ["sk+D{7c!5KA~"];
                    };
                };
            }, {
                readonly title: "Limit inválido";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["PWD-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Parámetro length con valor inválido"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const PasswordStrength: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly password: {
                readonly type: "string";
                readonly description: "Contraseña que se quiere testear.";
                readonly default: "sk+D{7c!5KA~";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly contains: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["lowercase"];
                            };
                        };
                        readonly length: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [12];
                        };
                        readonly id: {
                            readonly type: "integer";
                            readonly default: 0;
                            readonly examples: readonly [3];
                        };
                        readonly value: {
                            readonly type: "string";
                            readonly examples: readonly ["Strong"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Pharmacies: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Pharmacies24H: {
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Postalcode: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly commune: {
                    readonly type: "string";
                    readonly default: "Santiago";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Nombre de la comuna, ej: Cerrillos";
                };
                readonly street: {
                    readonly type: "string";
                    readonly default: "Calle Moneda";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Calle o Avenida";
                };
                readonly number: {
                    readonly type: "string";
                    readonly default: "1202";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Númeración";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["8340648"];
                            };
                            readonly commune: {
                                readonly type: "string";
                                readonly examples: readonly ["SANTIAGO"];
                            };
                            readonly street: {
                                readonly type: "string";
                                readonly examples: readonly ["MONEDA"];
                            };
                            readonly number: {
                                readonly type: "string";
                                readonly examples: readonly ["1202"];
                            };
                            readonly latitude: {
                                readonly type: "string";
                                readonly examples: readonly ["-33.4421652"];
                            };
                            readonly longitude: {
                                readonly type: "string";
                                readonly examples: readonly ["-70.65262849"];
                            };
                        };
                    };
                };
            }, {
                readonly title: "Faltan datos";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["PC-01"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Falta indicar la Comuna, Calle o Número"];
                    };
                };
            }, {
                readonly title: "Dirección no encontrada";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["PC-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener el código postal"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Radios: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Radio Digital FM"];
                            };
                            readonly image: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly "200": {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://www.victorsanmartin.com/api/radios/images/1.png"];
                                    };
                                };
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly examples: readonly ["http://www.digitalfm.cl"];
                            };
                            readonly stream: {
                                readonly type: "string";
                                readonly examples: readonly ["https://redirector.dps.live/digitalfm/aac/icecast.audio"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RutGeneraDv: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rut: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "RUT para generar el dígito verificador.";
                };
            };
            readonly required: readonly ["rut"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "integer";
                        readonly default: 0;
                        readonly examples: readonly [3];
                    };
                };
            }, {
                readonly title: "Rut inválido";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["U-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Rut inválido"];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RutGenerate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly limit: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly default: 5;
                    readonly minimum: -2147483648;
                    readonly maximum: 2147483647;
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Puedes indicar cuántos RUT necesitas generar. Máximo 50.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["17516357-3"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RutGetName: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly rut: {
                    readonly type: "string";
                    readonly default: "16.163.631-2";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "RUT para buscar el nombre.";
                };
            };
            readonly required: readonly ["rut"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["success"];
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly properties: {
                            readonly document: {
                                readonly type: "string";
                                readonly examples: readonly ["16163631"];
                            };
                            readonly dv: {
                                readonly type: "string";
                                readonly examples: readonly ["2"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["GABRIEL BORIC FONT"];
                            };
                            readonly activities: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly activity: {
                                            readonly type: "string";
                                            readonly examples: readonly ["ACTIVIDADES DE ARTISTAS REALIZADAS DE FORMA INDEPENDIENTE: ACTORES, MU"];
                                        };
                                        readonly code: {
                                            readonly type: "string";
                                            readonly examples: readonly ["900003"];
                                        };
                                        readonly category: {
                                            readonly type: "string";
                                            readonly examples: readonly ["Segunda"];
                                        };
                                        readonly iva: {
                                            readonly type: "string";
                                            readonly examples: readonly ["No"];
                                        };
                                        readonly date: {
                                            readonly type: "string";
                                            readonly examples: readonly ["28-03-2019"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, {
                readonly title: "Rut inválido";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["U-02"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Rut inválido"];
                    };
                };
            }, {
                readonly title: "Origen offline";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["U-03"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["Error desde el origen, vuelva a intentar."];
                    };
                };
            }, {
                readonly title: "Rut not found";
                readonly type: "object";
                readonly properties: {
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["error"];
                    };
                    readonly data: {
                        readonly type: "string";
                        readonly examples: readonly [""];
                    };
                    readonly code: {
                        readonly type: "string";
                        readonly examples: readonly ["U-04"];
                    };
                    readonly message: {
                        readonly type: "string";
                        readonly examples: readonly ["No se logró obtener el nombre."];
                    };
                };
            }];
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
                readonly code: {
                    readonly type: "string";
                    readonly examples: readonly ["RATELIMIT"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["429 Too Many Request"];
                };
                readonly details: {
                    readonly type: "string";
                    readonly examples: readonly ["Superaste el límite máximo permitido."];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Saints: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly enero: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["María, Madre de Dios"];
                            };
                        };
                        readonly febrero: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Severiano"];
                            };
                        };
                        readonly marzo: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Rosendo"];
                            };
                        };
                        readonly abril: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Hugo"];
                            };
                        };
                        readonly mayo: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["José Obrero"];
                            };
                        };
                        readonly junio: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Justino, Juvenal"];
                            };
                        };
                        readonly julio: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Ester"];
                            };
                        };
                        readonly agosto: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Alfonso María de Ligorio"];
                            };
                        };
                        readonly septiembre: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Arturo"];
                            };
                        };
                        readonly octubre: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Teresita del Niño Jesús"];
                            };
                        };
                        readonly noviembre: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Todos los Santos"];
                            };
                        };
                        readonly diciembre: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Florencia"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const SaintsYesterdayTodayOrTomorrow: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly when: {
                    readonly type: "string";
                    readonly enum: readonly ["hoy", "ayer", "manana"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Especifica qué santoral deseas obtener.";
                };
            };
            readonly required: readonly ["when"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Paulina"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {};
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const ShowMyIp: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "string";
                    readonly examples: readonly ["191.112.179.129"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UtilsProxy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly url: {
                readonly type: "string";
                readonly description: "URL del sitio web a _scrapear_";
                readonly default: "https://httpbin.org/user-agent";
            };
            readonly referer: {
                readonly type: "string";
                readonly description: "Algunas URL requieren indicar el `referer`, utilice este parámetro para indicarla.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["text", "json"];
                    readonly default: "text";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Formato de la URL a consultar.";
                };
                readonly method: {
                    readonly type: "string";
                    readonly enum: readonly ["GET", "POST"];
                    readonly default: "GET";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Tipo de consulta, solo se soporte `GET` y `POST`.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly "user-agent": {
                            readonly type: "string";
                            readonly examples: readonly ["Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/118.0"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const Weather: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["SCAR"];
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly examples: readonly ["Arica"];
                            };
                            readonly updated_at: {
                                readonly type: "string";
                                readonly examples: readonly ["11:00"];
                            };
                            readonly temperature: {
                                readonly type: "string";
                                readonly examples: readonly ["18"];
                            };
                            readonly condition: {
                                readonly type: "string";
                                readonly examples: readonly ["Cubierto"];
                            };
                            readonly humidity: {
                                readonly type: "string";
                                readonly examples: readonly ["77"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const WeatherCode: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "string";
                    readonly enum: readonly ["SCFA", "SCAR", "SCBA", "SCCF", "SCAT", "SCCH", "SCIE", "SCCY", "SCIC", "SCFT", "SCDA", "SCIP", "SCSE", "SCMK", "SCJO", "SCTE", "SCCI", "SCON", "SCSN", "SCQN", "SCEL", "SCQP", "SCVD", "SCVM", "SCIR", "SCRM", "SCGZ", "SCFM", "SCRG", "SCGE", "SCTN", "SCCC", "SCHR", "SCNT"];
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                    readonly description: "Código de la estación meteorológica";
                };
            };
            readonly required: readonly ["code"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "string";
                            readonly examples: readonly ["SCFM"];
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly examples: readonly ["Porvenir"];
                        };
                        readonly updated_at: {
                            readonly type: "string";
                            readonly examples: readonly ["11:00"];
                        };
                        readonly temperature: {
                            readonly type: "string";
                            readonly examples: readonly ["5"];
                        };
                        readonly condition: {
                            readonly type: "string";
                            readonly examples: readonly ["Nublado"];
                        };
                        readonly humidity: {
                            readonly type: "string";
                            readonly examples: readonly ["75"];
                        };
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { Banks, CarBrands, CarBrandsModels, CarBrandsModelsVersions, CarCheckCrossingsWithoutTags, CarFindByDocumentNumber, CarInspection, CarPlate, CarPlateTesting, CarPublicTransportation, CarRecalls, CarSoap, CarTag, CarTrafficTickets, Earthquake, Earthquakes, EconomyAllToday, EconomyAllYear, EconomyCryptos, EconomyDolarToday, EconomyDolarYear, EconomyEuroToday, EconomyEuroYear, EconomyIpcToday, EconomyIpcYear, EconomyUfToday, EconomyUfYear, EconomyUtmToday, EconomyUtmYear, GeographyCommunes, GeographyProvinces, GeographyRegions, Holidays, HolidaysYear, Ip, Isapres, PasswordGenerate, PasswordStrength, Pharmacies, Pharmacies24H, Postalcode, Radios, RutGeneraDv, RutGenerate, RutGetName, Saints, SaintsYesterdayTodayOrTomorrow, ShowMyIp, UtilsProxy, Weather, WeatherCode };

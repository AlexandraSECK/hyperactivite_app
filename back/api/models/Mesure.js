/**
	Generated by sails-inverse-model
	Date:Mon Apr 06 2020 22:45:16 GMT+0200 (GMT+02:00)
*/

module.exports = {
    attributes: {
        idMesure: {
            type: "number",
            columnType: "int",
            isInteger: true,
            required: true
        },
        date: {
            type: "string",
            columnType: "date"
        },
        heure: {
            type: "number",
            columnType: "int",
            isInteger: true
        },
        valX: {
            type: "number",
            columnType: "int",
            isInteger: true
        },
        valY: {
            type: "number",
            columnType: "int",
            isInteger: true
        },
        valZ: {
            type: "number",
            columnType: "int",
            isInteger: true
        },
        vecteur: {
            type: "number",
            columnType: "int",
            isInteger: true
        },
        Creneaux: {
            model: "Creneaux",
            required: true
        }
    }
};
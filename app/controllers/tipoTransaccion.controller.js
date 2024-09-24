const db = require('../config/db.config.js');
const TipoTransaccion = db.TipoTransaccion;

exports.create = (req, res) => {
    TipoTransaccion.create(req.body).then(result => {
        res.status(200).json({ message: "Tipo de transacción creado con éxito", tipoTransaccion: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear el tipo de transacción", error: error.message });
    });
};

exports.retrieveAllTipos = (req, res) => {
    TipoTransaccion.findAll().then(tipos => {
        res.status(200).json({ tipos });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getTipoById = (req, res) => {
    TipoTransaccion.findByPk(req.params.id).then(tipo => {
        res.status(200).json({ tipo });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

const db = require('../config/db.config.js');
const Cuenta = db.Cuenta;

exports.create = (req, res) => {
    Cuenta.create(req.body).then(result => {
        res.status(200).json({ message: "Cuenta creada con éxito", cuenta: result });
    }).catch(error => {
        res.status(500).json({ message: "Error al crear la cuenta", error: error.message });
    });
};

exports.retrieveAllCuentas = (req, res) => {
    Cuenta.findAll().then(cuentas => {
        res.status(200).json({ cuentas });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getCuentaById = (req, res) => {
    Cuenta.findByPk(req.params.id).then(cuenta => {
        res.status(200).json({ cuenta });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.updateById = (req, res) => {
    Cuenta.update(req.body, { where: { IdCuenta: req.params.id } })
        .then(() => res.status(200).json({ message: "Cuenta actualizada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

exports.deleteById = (req, res) => {
    Cuenta.destroy({ where: { IdCuenta: req.params.id } })
        .then(() => res.status(200).json({ message: "Cuenta eliminada" }))
        .catch(error => res.status(500).json({ error: error.message }));
};

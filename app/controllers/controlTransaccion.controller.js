const db = require('../config/db.config.js');
const ControlTransacciones = db.ControlTransacciones;
const Cuenta = db.Cuenta;

exports.create = async (req, res) => {
    try {
        const { id_Cuenta, id_tipoTransaccion, MontoTransaccionCredito, MontoTransaccionDebito } = req.body;

        // Registrar la transacción
        const transaccion = await ControlTransacciones.create(req.body);

        // Actualizar el saldo de la cuenta
        const cuenta = await Cuenta.findByPk(id_Cuenta);
        if (!cuenta) {
            return res.status(404).json({ message: "Cuenta no encontrada" });
        }

        let nuevoSaldo = parseFloat(cuenta.SaldoInicial);
        if (MontoTransaccionCredito) {
            nuevoSaldo += parseFloat(MontoTransaccionCredito);
        } else if (MontoTransaccionDebito) {
            nuevoSaldo -= parseFloat(MontoTransaccionDebito);
        }

        await cuenta.update({ SaldoInicial: nuevoSaldo });

        res.status(200).json({ message: "Transacción registrada y saldo actualizado", transaccion, saldoActualizado: nuevoSaldo });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar la transacción", error: error.message });
    }
};

exports.retrieveAllTransacciones = (req, res) => {
    ControlTransacciones.findAll().then(transacciones => {
        res.status(200).json({ transacciones });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

exports.getTransaccionById = (req, res) => {
    ControlTransacciones.findByPk(req.params.id).then(transaccion => {
        res.status(200).json({ transaccion });
    }).catch(error => {
        res.status(500).json({ error: error.message });
    });
};

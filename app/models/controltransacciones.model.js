module.exports = (sequelize, Sequelize) => {
    const ControlTransacciones = sequelize.define('controlTransacciones', {
        id_registro: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_Cuenta: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'cuenta', // El nombre del modelo debe coincidir
                key: 'IdCuenta'
            }
        },
        FechaHoraIngreso: {
            type: Sequelize.DATE,
            allowNull: false
        },
        id_tipoTransaccion: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tipoTransacciones', // Asegúrate de que este modelo también esté correctamente definido
                key: 'id_tipoTransaccion'
            }
        },
        MontoTransaccionCredito: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true
        },
        MontoTransaccionDebito: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: true
        }
    });

    return ControlTransacciones;
};

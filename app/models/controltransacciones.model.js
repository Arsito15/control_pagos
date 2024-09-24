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
                model: 'cuentas',
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
                model: 'tipoTransacciones',
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

    // Relación de ControlTransacciones con Cuenta
    ControlTransacciones.belongsTo(sequelize.models.Cuenta, {
        foreignKey: 'id_Cuenta',
        as: 'cuenta'
    });

    // Relación de ControlTransacciones con TipoTransaccion
    ControlTransacciones.belongsTo(sequelize.models.TipoTransaccion, {
        foreignKey: 'id_tipoTransaccion',
        as: 'tipoTransaccion'
    });

    return ControlTransacciones;
};

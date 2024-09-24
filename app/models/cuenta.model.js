module.exports = (sequelize, Sequelize) => {
    const Cuenta = sequelize.define('cuenta', {
        IdCuenta: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        NoCuenta: {
            type: Sequelize.STRING,
            allowNull: false
        },
        TipoCuenta: {
            type: Sequelize.STRING,
            allowNull: false
        },
        NombreCompleto: {
            type: Sequelize.STRING,
            allowNull: false
        },
        FechaIngreso: {
            type: Sequelize.DATE,
            allowNull: false
        },
        FechaNacimiento: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Genero: {
            type: Sequelize.STRING
        },
        SaldoInicial: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        }
    });

    // Relación entre Cuenta y ControlTransacciones
    Cuenta.hasMany(sequelize.models.ControlTransacciones, {
        foreignKey: 'id_Cuenta',
        as: 'transacciones'
    });

    return Cuenta;
};

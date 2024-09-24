module.exports = (sequelize, Sequelize) => {
    const TipoTransaccion = sequelize.define('tipoTransaccion', {
        id_tipoTransaccion: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descripcion: {
            type: Sequelize.STRING,
            allowNull: false // Ejemplo: Debito o Credito
        }
    });
    return TipoTransaccion;
};

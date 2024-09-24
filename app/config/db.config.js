const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  operatorsAliases: false,

  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

// Importar los modelos
db.Cuenta = require('../models/cuenta.model.js')(sequelize, Sequelize);
db.TipoTransaccion = require('../models/tipotransaccion.model.js')(sequelize, Sequelize);
db.ControlTransacciones = require('../models/controltransacciones.model.js')(sequelize, Sequelize);

// Definir las asociaciones después de que los modelos hayan sido importados
db.Cuenta.hasMany(db.ControlTransacciones, {
  foreignKey: 'id_Cuenta',
  as: 'transacciones'
});

db.ControlTransacciones.belongsTo(db.Cuenta, {
  foreignKey: 'id_Cuenta',
  as: 'cuenta'
});

db.ControlTransacciones.belongsTo(db.TipoTransaccion, {
  foreignKey: 'id_tipoTransaccion',
  as: 'tipoTransaccion'
});

// Sincronizar las tablas en el orden correcto
db.sequelize.sync({ force: false }).then(async () => {
  await db.TipoTransaccion.sync();  // Primero crea la tabla tipoTransacciones
  await db.Cuenta.sync();           // Luego crea la tabla cuenta
  await db.ControlTransacciones.sync(); // Finalmente crea controlTransacciones
  console.log('Tablas sincronizadas correctamente.');
}).catch(err => {
  console.error('Error al sincronizar las tablas:', err);
});

module.exports = db;

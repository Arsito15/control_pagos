let express = require('express');
let router = express.Router();

// Importar controladores
const cuentas = require('../controllers/cuenta.controller.js');
const tipoTransacciones = require('../controllers/tipoTransaccion.controller.js');
const controlTransacciones = require('../controllers/controlTransaccion.controller.js');

// Rutas para cuentas
router.post('/api/cuentas/create', cuentas.create);
router.get('/api/cuentas/all', cuentas.retrieveAllCuentas);
router.get('/api/cuentas/:id', cuentas.getCuentaById);
router.put('/api/cuentas/update/:id', cuentas.updateById);
router.delete('/api/cuentas/delete/:id', cuentas.deleteById);

// Rutas para tipoTransacciones
router.post('/api/tipoTransacciones/create', tipoTransacciones.create);
router.get('/api/tipoTransacciones/all', tipoTransacciones.retrieveAllTipos);
router.get('/api/tipoTransacciones/:id', tipoTransacciones.getTipoById);

// Rutas para controlTransacciones
router.post('/api/controlTransacciones/create', controlTransacciones.create);
router.get('/api/controlTransacciones/all', controlTransacciones.retrieveAllTransacciones);
router.get('/api/controlTransacciones/:id', controlTransacciones.getTransaccionById);


module.exports = router;
const express = require('express');
const router = express.Router();

// Importar controladores
const cuentas = require('../controllers/cuenta.controller.js');
const tipoTransacciones = require('../controllers/tipoTransaccion.controller.js');
const controlTransacciones = require('../controllers/controlTransaccion.controller.js');

// Rutas para cuentas
router.post('/cuentas/create', cuentas.create);
router.get('/cuentas/all', cuentas.retrieveAllCuentas);
router.get('/cuentas/:id', cuentas.getCuentaById);
router.put('/cuentas/update/:id', cuentas.updateById);
router.delete('/cuentas/delete/:id', cuentas.deleteById);

// Rutas para tipoTransacciones
router.post('/tipoTransacciones/create', tipoTransacciones.create);
router.get('/tipoTransacciones/all', tipoTransacciones.retrieveAllTipos);
router.get('/tipoTransacciones/:id', tipoTransacciones.getTipoById);

// Rutas para controlTransacciones
router.post('/controlTransacciones/create', controlTransacciones.create);
router.get('/controlTransacciones/all', controlTransacciones.retrieveAllTransacciones);
router.get('/controlTransacciones/:id', controlTransacciones.getTransaccionById);

module.exports = router;

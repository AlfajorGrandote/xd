const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.list);
router.get('/ingresar', alumnoController.add);
router.post('/guardar', alumnoController.save);
router.get('/borrar/:leg_alumno', alumnoController.delete);
router.get('/actualizar/:leg_alumno', alumnoController.edit);
router.post('/actualizar/:leg_alumno', alumnoController.update);
router.get('/consulta/:consulta', alumnoController.consulta);

module.exports = router;
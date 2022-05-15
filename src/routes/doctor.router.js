const { Router } = require ('express');
const { contentType } = require('express/lib/response');
const router = Router();
const controller = require ('../controllers/doctor.controller');



router.get('/list',controller.list);

router.post('/create',controller.create)

router.put('/update/:id',controller.update)

router.delete('/delete/:id',controller.delete)

router.get('/listOne/:id',controller.listOne);

router.post('/listNumDoc',controller.numeroDeDoctoresPorEspecialidad);

router.post('/listNumDocCity',controller.numeroDeDoctoresPorCiudad);

router.post('/listEspDoc/:id',controller.especialidadDoctor);
module.exports = router;
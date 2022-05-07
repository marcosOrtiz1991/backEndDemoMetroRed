const { Router } = require ('express');
const router = Router();
const controller = require ('../controllers/task.controller');

router.get('/list',controller.list);

router.post('/create',controller.create)

router.put('/update/:id',controller.update)

router.delete('/delete/:id',controller.delete)

router.get('/listOne/:id',controller.listOne);



module.exports = router;
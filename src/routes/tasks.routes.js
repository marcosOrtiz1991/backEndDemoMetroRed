const { Router } = require ('express');
const router = Router();
const controller = require ('../controllers/task.controller');

router.get('/list',controller.list);

router.post('/create',(req,res)=>{
    res.send('crear especialidades');
})

router.put('/update',(req,res)=>{
    res.send('editar especialidades');
})

router.delete('/delete',(req,res)=>{
    res.send('eliminar especialidades');
})

router.get('/list/10',(req,res)=>{
    res.send('listar una especilidad');
})



module.exports = router;
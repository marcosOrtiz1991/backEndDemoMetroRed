const { Router } = require ('express');
const router = Router();

router.get('/list',(req,res)=>{
    res.send('listar especialidades');
})

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
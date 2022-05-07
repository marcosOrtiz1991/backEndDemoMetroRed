const controller = {};

controller.list =  (req,res)=>{
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from especialidades',(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows[0].esp_nombre);
        });
    });
  
};

controller.create = (req,res)=>{
    res.send('crear especialidades');
};
controller.update = (req,res)=>{
    res.send('editar especialidades');
};
controller.delete = (req,res)=>{
    res.send('eliminar especialidades');

};

module.exports = controller;
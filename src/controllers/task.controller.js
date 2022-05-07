const controller = {};

/**
   * Método que lista las especialidades .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
*/
controller.list =  (req,res)=>{
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from especialidades',(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });
  
};

/**
   * Método que crea una especialidad .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
*/
controller.create = (req,res)=>{
    const body = req.body;
    const name = body.nombre
    
    req.getConnection(async(err,conn) => {
        const result= await  conn.query("insert into especialidades (esp_nombre) values ('"+name+"')",(err, rows) =>{
              if (err){
                  res.send('error');
              }
              res.send('se creo satisfactoriamente');
          });
      });
   
};

/**
   * Método que actulíza una especialidad según su id.
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.update = (req,res)=>{
    const id = req.params.id
    const body = req.body;
    const name = body.nombre
    console.log(id);
    req.getConnection(async(err,conn) => {
      const result= await  conn.query("update especialidades set esp_nombre = '" +name+ "' where esp_id = "+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });
};

/**
   * Método que elimina una especialidad según su id.
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.delete = (req,res)=>{
    const id = req.params.id
    console.log(id);
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('delete from especialidades where esp_id = '+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });

};

/**
   * Método que lista una especialidad según su id.
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.listOne =  (req,res)=>{
   const id = req.params.id
    console.log(id);
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from especialidades where esp_id = '+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });
  
};

module.exports = controller;
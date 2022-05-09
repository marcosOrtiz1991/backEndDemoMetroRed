const controller = {};

/**
   * Método que lista los doctores .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
*/
controller.list =  (req,res)=>{
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from doctores',(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });
  
};

/**
   * Método que crea un doctor .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
*/
controller.create = (req,res)=>{
    const body = req.body;
    const name = body.nombre
    const cedula = body.cedula
    const foto = body.foto
    const ciudad = body.ciudad
    const especialidad = body.especialidad
    
    req.getConnection(async(err,conn) => {
        const result= await  conn.query("insert into doctores values ('"+name+"' '"+cedula+"' '"+foto+"' '"+ciudad+"' '"+especialidad +"' )",(err, rows) =>{
              if (err){
                  res.send('error');
              }
              res.send('se creo satisfactoriamente');
          });
      });
   
};

/**
   * Método que actulíza un doctor según su id.
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.update = (req,res)=>{
    const id = req.params.id
    const body = req.body;
    const name = body.nombre
    const cedula = body.cedula
    const foto = body.foto
    const ciudad = body.ciudad
    const especialidad = body.especialidad

    req.getConnection(async(err,conn) => {
      const result= await  conn.query("update doctores set doc_nombre = '" +name+ "' , doc_cedula = '" +cedula+ "' , doc_foto = '" +foto+ "' , doc_ciudad = '" +ciudad+ "' , doc_especialidad = '" +especialidad+ " where doc_id = "+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });
};

/**
   * Método que elimina un doctor según su id.
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.delete = (req,res)=>{
    const id = req.params.id
    console.log(id);
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('delete from doctores where doc_id = '+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });

};

/**
   * Método que lista un doctor según su id.
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.listOne =  (req,res)=>{
   const id = req.params.id
    console.log(id);
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from doctores where doc_id = '+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows);
        });
    });
  
};

module.exports = controller;
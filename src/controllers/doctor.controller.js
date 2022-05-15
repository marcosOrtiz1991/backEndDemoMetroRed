const controller = {};

/**
   * Método que lista los doctores .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
*/
controller.list =  (req,res)=>{
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from doctores d , especialidades e where d.doc_especialidad = e.esp_id group by doc_id',(err, rows) =>{
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
    //console.log(req.body)
    const body = req.body;
    const name = body.doc_nombre
    const cedula = body.doc_cedula
    const foto = body.doc_foto
    const ciudad = body.doc_ciudad
    const especialidad = body.doc_especialidad

    req.getConnection(async(err,conn) => {
        const result= await  conn.query("insert into doctores (doc_nombre, doc_cedula, doc_foto, doc_ciudad, doc_especialidad)"+
        "values ('"+name+"','"+cedula+"','"+foto+"','"+ciudad+"','"+especialidad +"' )",(err, rows) =>{
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
   * @param: doctor_id
*/
controller.update = (req,res)=>{
    const id = req.params.id
    const body = req.body;
    const name = body.doc_nombre
    const cedula = body.doc_cedula
    const foto = body.doc_foto
    const ciudad = body.doc_ciudad
    const especialidad = body.doc_especialidad
  
    req.getConnection(async(err,conn) => {
      const result= await  conn.query("update doctores set doc_nombre = '" +name+ "' , doc_cedula = '" +cedula+ "' , doc_foto = '" +foto+ "' , doc_ciudad = '" +ciudad+ "' , doc_especialidad = '" +especialidad+ "' where doc_id = "+id,(err, rows) =>{
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
    
    req.getConnection(async(err,conn) => {
      const result= await  conn.query('select * from doctores where doc_id = '+id,(err, rows) =>{
            if (err){
                res.json(err);
            }
            res.json(rows[0]);
        });
    });
  
};

/**
   * Método que lista el número de doctores por especilidad .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.numeroDeDoctoresPorEspecialidad =  (req,res)=>{
   
     req.getConnection(async(err,conn) => {
        const result = await conn.query('select esp_nombre as especialidadas, count(esp_id) as doctores  from especialidades e , doctores d where d.doc_especialidad = e.esp_id group by esp_id ',(err,rows)=>{
             if (err){
                 res.json(err);
             }
            
             res.json(rows);
         });
     });
   
 };

 
/**
   * Método que lista el número de doctores por ciudad .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.numeroDeDoctoresPorCiudad =  (req,res)=>{
   
    req.getConnection(async(err,conn) => {
       const result = await conn.query('select doc_ciudad as ciudad, count(1) as doctores from doctores d group by doc_ciudad ',(err,rows)=>{
            if (err){
                res.json(err);
            }
            console.log('el numer de doctores es: '+result)
            res.json(rows);
        });
    });
  
};

/**
   * Método que lista la especilidad según el doctor .
   * @author: Marcos Ortiz
   * @version: 1.0 6/05/2022
   * @param: id
*/
controller.especialidadDoctor =  (req,res)=>{
    const id = req.params.id;
    req.getConnection(async(err,conn) => {
       const result = await conn.query('select  e.esp_nombre as especialidad from especialidades e where e.esp_id = (select d.doc_especialidad  from doctores d where d.doc_id= '+id+')',(err,rows)=>{
            if (err){
                res.json(err);
            }
            console.log('el numer de doctores es: '+result)
            res.json(rows);
        });
    });
  
};

module.exports = controller;
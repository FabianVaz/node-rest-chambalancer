// Importar el módulo de conexión a la base de datos
const {connectMysql } = require('../dbconnection'); // Asume que tienes un archivo de conexión a la base de datos
class ServiciosModel
{
  static async consultar(){
    let db = await connectMysql();
    let query = db('Servicio');
    return await query;
  }

  static async consultar_por_id(id){
    let db = await connectMysql();
    return await db('Servicio').where('ID_servicio', id);
  }

  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db('Servicio').insert(datos).returning('ID_servicio');
    return result[0];
  }

}

  

module.exports = ServiciosModel;

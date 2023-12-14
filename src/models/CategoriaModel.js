// Importar el módulo de conexión a la base de datos
const { connectMysql } = require('../dbconnection'); 
class CategoriaModel
{
  static async consultar(){
    let db = await connectMysql();
    let query = db('Categoria_servicio');
    return await query;
  }

  static async consultar_por_id(id){
    let db = await connectMysql();
    return await db('Categoria_servicio').where('ID_categoria', id);
  }

  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db('Categoria_servicio').insert(datos).returning('ID_categoria');
    return result[0];
  }

}
module.exports = CategoriaModel;

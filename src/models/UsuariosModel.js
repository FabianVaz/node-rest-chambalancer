// Importar el módulo de conexión a la base de datos
const { connectMysql } = require('../dbconnection'); // Asume que tienes un archivo de conexión a la base de datos

class UsuariosModel
{
  static async consultar(){
    let db = await connectMysql();
    let query = db('Usuarios');
    return await query;
  }

  static async consultar_por_id(id){
    let db = await connectMysql();
    return await db('Usuarios').where('ID_usuario', id);
  }

  static async insertar(datos) {
    let db = await connectMysql();
    const result = await db('Usuarios').insert(datos).returning('ID_usuario');
    return result[0];
  }

}


module.exports = UsuariosModel;

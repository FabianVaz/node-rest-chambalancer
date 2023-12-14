const CategoriaModel = require('../models/CategoriaModel');

class CategoriaController
{
  static async indexGet(req, res) {
    let data = await CategoriaModel.consultar();
    res.send(data);
  }

  static async itemGet(req, res) {
    let id = req.params.id;
    let data = await CategoriaModel.consultar_por_id(id);
    if (data.length == 0) {
        res.status(404).send({errno: 404, error: 'Not found'});
        return;
    }
    res.send(data[0]);
  }

  static async indexPost(req, res) {
    try {
        const newData = req.body;

        const insertedId = await CategoriaModel.insertar(newData);

        res.status(201)
            .header('Location', `/temas/${insertedId}`)
            .send({status: 201, message: 'Created'});
    } catch (error) {
        console.error(error);
        res.status(400).send({ errno: 400, error: 'Bad Request' });
    }
  }
}

module.exports = CategoriaController;

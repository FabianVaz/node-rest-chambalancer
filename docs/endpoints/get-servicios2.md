# Endpoint: `GET /servicios`

Permite obtener información detallada sobre los servicios registrados.

## Ejemplo de Solicitud
```http
GET /servicios
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "ID_servicio": 1,
        "Nombre_servicio": "Construcción de casas",
        "Categoria_servicio": 1,
        "ID_usuario_propietario": 4,
        "Precio": "300.00",
        "Descripcion_servicio": "Construcción de casas en Cuyutlán."
},
{
        "ID_servicio": 2,
        "Nombre_servicio": "Cantante de Sierreño",
        "Categoria_servicio": 2,
        "ID_usuario_propietario": 2,
        "Precio": "100.00",
        "Descripcion_servicio": "Cantante de canciones de Sierreño."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "Cannot GET servicio."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

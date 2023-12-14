# Endpoint: `GET /servicios`

Permite obtener información detallada sobre las categorías registradas.

## Ejemplo de Solicitud
```http
GET /categorias
```

## Respuesta Exitosa (Código 200 OK)
```json
{
        "ID_categoria": 1,
        "Nombre_categoria": "Construcción"
},
{
        "ID_categoria": 2,
        "Nombre_categoria": "Artista"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "Cannot GET categoria."
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

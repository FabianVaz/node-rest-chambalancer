# Endpoint: `POST /categorias`

Permite añadir información a la tabla de Categoria-servicios en la base de datos.

## Parámetros requeridos

Nombre de la categoría.

## Ejemplo de Solicitud
```http
POST /usuarios
Content-Type: application/json

{
        "Nombre_categoria": "Albañilería"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
status: 201
message: CREATED
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "bad_request"
  }
  ```

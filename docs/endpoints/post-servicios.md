# Endpoint: `POST /servicios`

Permite añadir información a la tabla de Servicios en la base de datos.

## Parámetros requeridos

Nombre del servicio.  
Categoria del servicio.  
ID usuario propietario.  
Precio.  
Descripción servicio.  



## Ejemplo de Solicitud
```http
POST /usuarios
Content-Type: application/json

{
        "Nombre_servicio": "Construcción de casas",
        "Categoria_servicio": 1,
        "ID_usuario_propietario": 4,
        "Precio": "300.00",
        "Descripcion_servicio": "Construcción de casas en Cuyutlán."
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

# Endpoint: `POST /usuarios`

Permite añadir información a la tabla de Usuarios en la base de datos.

## Parámetros requeridos

Nombre de usuario.
Correo electrónico.
Tipo de usuarios. Consumidor/Proveedor.

## Ejemplo de Solicitud
```http
POST /usuarios
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

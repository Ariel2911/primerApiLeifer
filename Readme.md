# NODE JS API REST - CLON DE SPOTIFY

## DESCRIPCIÓN:

**API REST** destidada para un servicio de musica, pódcasts y videos digitales.
Todavía se encuentra en construcción.

## TECNOLOGÍAS:

NODE JS, EXPRESS, NODEMON, MORGAN, EXPRESS VALIDATOR, MONGOOSE, MONGOOSE DELETE, MULTER, JSONWEBTOKEN, BCRYPTJS, SLACK WEBHOOK.

## INSTALACIÓN Y CONFIGURACIÓN DEL PROYECTO:

1.- Clonar repositorio.-

2.- Ejecutar npm install para instalar dependencias.-

3.- Configurar variables de entorno en archivo .env conforme al archivo .env.example con valores de su entorno local.-

5.- Ejecutar comando npm run dev para iniciar el servidor.-

## DOCUMENTACIÓN:

### Auth: endpoints

#### Registrar un usuario

    post "/api/auth/register"

Datos requeridos

    {
	    name: String ({min:3,max:99}),
	    age: Number (opcional),
	    email: String,
	    passwpord: String ({min:3,max:15})
    }

Posibles respuestas

    200 { token, user}
    403 "ERROR_REGISTER_USER"
    404 "PAGE_NOT_FOUND"


#### Login de usuario

    post "/api/auth/login"

Datos requeridos

    {
        email: String,
        passwpord: String ({min:3,max:15})
    }

Posibles respuestas

    200 { "data": {
        "token": String,
        "user": {
            "_id": "String",
            "name": String,
            "email": String,
            "role": [
                "user" // "admin"
            ]
        }
    } }
    401 PASSWORD_INVALID
    403 ERROR_LOGIN_USER
    404 USER_NOT_EXIST

### Storage - Almacen de arcrivos: endpoints

#### Obtener lista de registros

    get "/api/storage/"

Posibles respuestas

    200 { "data":[] }
    403 ERROR_GET_ITEMS
    404 PAGE_NOT_FOUND
    

#### Obtener un registro

    get "/api/storage/:id"

Datos requeridos

    param: id

Posibles respuestas

    200 { "data": {
        "_id": String,
        "url": String,
        "filename": String,
        "createdAt": String,
        "updatedAt": String
    } }
    403 ERROR_GET_ITEM
    404 PAGE_NOT_FOUND
    
#### Insertar un registro

    post "/api/storage/"

Datos requeridos

    {
    	url: String,
	filename: string
    }

Posibles respuestas

    200 { "data": {
        "url": String,
        "filename": String,
        "_id": String,
        "createdAt": String,
        "updatedAt": String
    } }
    403 ERROR_CREATE_ITEM
    404 PAGE_NOT_FOUND
    
#### Eliminar un registro

    delete "/api/storage/:id"

Datos requeridos

    param: id

Posibles respuestas

    200 { "data": {
    	"filePath" : String,
	"deleted": 1
    	} }
    403 ERROR_DELETE_ITEM
    404 PAGE_NOT_FOUND
    
### Tracks: endpoints

#### Obtener lista de registros

    get "/api/tracks/"

Posibles respuestas

    200 { "data":[], "user" }
    403 ERROR_GET_ITEMS
    404 PAGE_NOT_FOUND
    

#### Obtener un registro

    get "/api/tracks/:id"

Datos requeridos

    param: id

Posibles respuestas

    200 { "data": 
    	[{  
  	"name": String,
	  "album": String,
	  "cover": String,
	  "artist": {
	      "name": String,
	      "nickname": String,
	      "nationality": String
	  },
	  "duration": {
	      "start": Number,
	      "end": Number
	  },
	  "mediaId": String
	}] 
	}
    403 ERROR_GET_ITEM
    404 PAGE_NOT_FOUND
    
#### Insertar un registro

    post "/api/tracks/"

Datos requeridos

    {  
  	"name": String,
	  "album": String,
	  "cover": String,
	  "artist": {
	      "name": String,
	      "nickname": String,
	      "nationality": String
	  },
	  "duration": {
	      "start": Number,
	      "end": Number
	  },
	  "mediaId": String
	}

Posibles respuestas

    200 { "data": {  
  	"name": String,
	  "album": String,
	  "cover": String,
	  "artist": {
	      "name": String,
	      "nickname": String,
	      "nationality": String
	  },
	  "duration": {
	      "start": Number,
	      "end": Number
	  },
	  "mediaId": String
	}}
    401 "NEED_TOKEN"
    403 ERROR_CREATE_ITEM
    404 PAGE_NOT_FOUND
    
#### Eliminar un registro

    delete "/api/tracks/:id"

Datos requeridos

    param: id

Posibles respuestas

    200 { "data": {
        "acknowledged": true,
        "modifiedCount": 0,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 0
    }}
    403 ERROR_DELETE_ITEM
    404 PAGE_NOT_FOUND
    

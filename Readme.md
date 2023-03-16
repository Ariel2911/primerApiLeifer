<h1 align="center">  NODE JS API REST - CLON DE SPOTIFY </h1>

---
<h2>  Descripción </h2>

<p><strong>API REST </strong> destidada para un servicio de musica, pódcasts y videos digitales.</p>
<br>

---

<h2>Carácteristicas</h2>

<h3>Dar de alta un usuario</h3>

End point

    post "/api/auth/register"

Datos requeridos

    {
	    name:String ({min:3,max:99}),
    	age: Number (opcional),
    	email:String,
    	passwpord:String ({min:3,max:15})
	}

Posibles respuestas

    200 res: { token, user}
    403 res: "ERROR_REGISTER_USER"
    404 res "PAGE_NOT_FOUND"


<h3>Login de usuario</h3>

End point

    post "/api/auth/login"

Datos requeridos

    {
        email:String,
        passwpord:String ({min:3,max:15})
    }

Posibles respuestas

    200 res: { token, user}
    401 res: PASSWORD_INVALID
	403 res: ERROR_LOGIN_USER
    404 res: "USER_NOT_EXIST"

imagen de los enpoints (POST /api/auth/register ), la información necesaria ( {"name":"Ariel", "email":"test@test.com" }) y las posibles respuestas(200 = ok, 400 = faltan datos, 404 = la página a la que decea entrar no exixte)

<h3>Almacen de Arcrivos</h3>

End point

    get "/api/storage/"

Posibles respuestas

    200 Muestra la lista de los archivos cargados
    404 res: "PAGE_NOT_FOUND"


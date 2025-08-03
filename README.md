# Cliente http ligero

Si necesitas una forma de probar una api y tienes configurada un ambiente de desarrollo con node.js 
puedes clonar el repositorio  para tener una aplicacion para consumir apis mediante peticiones http

### Consideraciones

Como el proyecto se levanta en su propio puerto (quizas es mucho para un cliente http) pero sobre todo 
porque las peticiones se realizan por js, la api detectara un problema de cors por lo que puedes habilitar 
cors para el desarrollo y luego deshabilitarlo si tu api no require tener cors activo

### Pasos para levantar el proyecto

1. Clonar el repositorio

2. ejecutar el comando para instalar

```bash
npm install
```

3. Correr la aplicacion 

```bash
npm run dev
```

4. visitar el siguiente enlace en un navegador

```bash
http://localhost:5173/
```


##  Pruebas 

```js
{
"title": "foo",
"body": "bar",
"userId": 1,
}
``
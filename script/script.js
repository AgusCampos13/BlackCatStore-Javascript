//productos
let nombre_carrito = []
let precio_carrito = []
let total_carrito = 0

//usuarios
let usuarios = [] 
let claves = []


//invocacion de funciones

alert('Vamos a crearte una cuenta :D')

let email = prompt('Ingresa tu mail:')
let clave = prompt('Ingresa tu clave: ')

if (crearCuenta(email, clave)){
    alert('Cuenta Creada con Exito!')

    alert('Ahora ingresa con tu cuenta')
    email = prompt('Ingresa tu mail:')
    clave = prompt('Ingresa tu clave: ')

    if(iniciarSesion(email, clave)){

        alert('A comprar!')
        let seguir
        do{
            
            let producto = prompt('Ingresa un producto')
            let precio = prompt('Ingresa su precio')

            agregarProducto(producto, parseInt(precio, 10))
            alert('Producto Agregado con Exito!')

            seguir = prompt('Deseas continuar?(S/N)') 
            seguir.toLowerCase

            verCarrito()

        }while(seguir == 's')
            
        alert('Total a Pagar: ' + total_carrito + '$')
    }
}


//-------------------------------------------------------------------------------------------------------

//productos
function agregarProducto(producto, precio){

    nombre_carrito.push(producto)
    precio_carrito.push(precio)

    total_carrito = total_carrito + precio
}

function verCarrito(){

    for (let i = 0; i < nombre_carrito.length; i++){

        console.log('Item N° ' + (i + 1) + ' - ' +  nombre_carrito[i] + ' - $' + precio_carrito[i])  
    }

    console.log('Total a Pagar: ' + total_carrito + '$') 
}

//iniciar sesion
function iniciarSesion(email, clave){

    //console.log('Entra! email:' + email + ' clave: ' + clave)

    let indice_usuario = usuarios.indexOf(email)

    //console.log('indice_usuario: ' + indice_usuario)
    if(indice_usuario != -1){
        
        if(comparaArrays(claves[indice_usuario], clave)){
            alert('Acceso Concedido!')
            return true

        }else{
            console.warn('Acceso Denegado!')
            return false
        }

    }else{
        console.warn('El usuario ingresado no existe')
        return false
    }
}

// crear cuenta 
function crearCuenta(email, clave){

    // console.log('Entra! email:' + email + ' clave: ' + clave)
    //console.log('(usuarios.indexOf(email) != -1: ' + (usuarios.indexOf(email)))

    if(usuarios.indexOf(email) != -1){
        console.warn('El usuario ya existe')

        return false

    }else{
        usuarios.push(email)
        claves.push(clave)

        return true
    }
}

//utilidad
function comparaArrays(array1, array2){

    //console.log('Entra! array1:' + array1 + ' array2: ' + array2)

    //tienen distinta longitud?
    if(array1.length !== array2.length){
        return false
    }

    for (let i = 0; i < array1.length; i++){

        //console.log('array1: ' + array1[i] + ' array2: ' + array2[i])

        if (array1[i] != array2[i]){
            return false
        }
    }

    return true
}
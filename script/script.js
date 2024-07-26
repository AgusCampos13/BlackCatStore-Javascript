//productos
let carrito = []
let total_carrito = 0

//usuarios
let usuarios = [] 

class Usuario{

    static id = 0

    constructor(nombre, apellido, email, clave){
        
        this.id = ++Usuario.id
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.clave = clave

    }
}

class Producto{

    static id = 0

    constructor(nombre, precio, cantidad){
        
        this.id = ++Producto.id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad

    }
}

// Listeners -------------------------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-iniciar-sesion');

    formulario.addEventListener('submit', function(event) {

        // console.log('Llego el evento')

        // Datos Iniciales Para Pruebas
        usuarios.push(new Usuario('Agustina', 'Campos', 'agus@gmail.com', 'clave123'))

        event.preventDefault(); // Evita el envío del formulario

        const access_correo_electronico = document.getElementById('access-correo-electronico').value;
        const access_clave = document.getElementById('access-clave').value

        // console.log('Valor del input_correo_electronico:', input_correo_electronico);
        // console.log('Valor del input_clave:', input_clave);


        iniciarSesion(access_correo_electronico, access_clave);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-crear-cuenta');

    formulario.addEventListener('submit', function(event) {

        //console.log('Llego el evento')

        event.preventDefault(); // Evita el envío del formulario

        const create_correo_electronico = document.getElementById('create-correo-electronico').value;
        const create_clave = document.getElementById('create-clave').value
        const create_nombre = document.getElementById('create-nombre').value;
        const create_apellido = document.getElementById('create-apellido').value

        crearCuenta(create_nombre, create_apellido, create_correo_electronico, create_clave)
    });
});

document.querySelectorAll('.cart-button').forEach(boton => {
    boton.addEventListener('click', function() {
        const nombre = this.getAttribute('data-nombre');
        const precio = parseFloat(this.getAttribute('data-precio'));

        //console.log(id + " " + nombre + " " + precio + " ")
        agregarProducto(nombre, precio, 1);
        verCarrito()
    });
});



//-------------------------------------------------------------------------------------------------------

//productos
function agregarProducto(nombre, precio, cantidad){

    for(let i = 0; i < carrito.length; i ++){

        if (carrito[i].nombre == nombre){
            //el producto ya esta en el carrito

            carrito[i].cantidad ++
        }
    }

    carrito.push(new Producto(nombre, precio, cantidad))
    alert("El producto fue agregado con exito!") 
    calcularTotalCarrito()
}

function calcularTotalCarrito(){

    let aux_total_carrito = 0; 

    for(let i = 0; i < carrito.length; i ++){

        aux_total_carrito = aux_total_carrito + (carrito[i].precio * carrito[i].cantidad)
    }

    total_carrito = aux_total_carrito 
}

function verCarrito(){

    for (let i = 0; i < carrito.length; i++){

        //console.log(carrito[i])  
    }

    alert('Total a Pagar: ' + total_carrito + '$') 
}

//iniciar sesion
function iniciarSesion(email, clave){

    for(let i = 0; i < usuarios.length; i ++){

        if (usuarios[i].email == email){

            if(comparaArrays(usuarios[i].clave, clave)){
                alert('Acceso Concedido!')
                return true
    
            }else{
                alert('Acceso Denegado!')
                return false
            }
        }
    }

    alert('El usuario ingresado no existe')
    return false
}

function crearCuenta(nombre, apellido, email, clave){

    //console.log('Entra! email:' + email + ' clave: ' + clave)
    //console.log('(usuarios.indexOf(email) != -1: ' + (usuarios.indexOf(email)))

    for(let i = 0; i < usuarios.length; i ++){

        if (usuarios[i].email == email){
            alert('El usuario ya existe')
            return false
        }
    }

    usuarios.push(new Usuario(nombre, apellido, email, clave))
    alert('El usuario fue creado con exito')

    //console.log(usuarios)

    return true
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
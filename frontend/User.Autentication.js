
var cerrar = document.getElementById('cerrar');

//Conexion a la api de autenticacion....
var table = document.getElementById('tableUsers');
var isAdmin = document.getElementById('isAdmin');


const api = 'http://localhost:3000/api/usuarios';


cerrar.addEventListener('click', function(event){
    if(cerrar){
        window.location.href = 'login.form.html'
    }
})


fetch(api,{method: 'GET'})
.then(response =>{
    if(!response.ok){
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    //
    const tbody = document.createElement('tbody');
    
    data.forEach(user =>{

        //No mostrar los admins 
        if(!user.admin){
            const row = document.createElement('tr');
            row.innerHTML = `
            <td> ${user.id}</td>
            <td> ${user.name}</td>
            <td> ${user.email}</td>
            <td>${user.admin}</td>
            `;
            tbody.appendChild(row)
        }
    })
    table.appendChild(tbody);
});

//Conexion a la api de productos

const apiProductos = 'http://localhost:3000/productos/productos'
var tableProductos = document.getElementById('tableProductos');

fetch(apiProductos, { method: 'GET' })
.then(response => {
    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return response.json();
})
.then(data => {
    console.log(data)
    const tbody = document.createElement('tbody')
    data.forEach(producto =>{
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${producto.id}</td>
        <td><img src="${producto.imagen}" alt="Imagen del producto" width="50"></td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.cantidad}</td>
    `;
    tbody.appendChild(row)
    })
    tableProductos.appendChild(tbody)
});


//Registro de productos

var form = document.getElementById('miForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var imagen = document.getElementById('imagen');
    var nombre = document.getElementById('nombre');
    var precio = document.getElementById('precio');
    var cantidad = document.getElementById('cantidad');
    var descripcion = document.getElementById('descripcion');
    var estado = document.getElementById('estado');


    if(!imagen.value || !nombre.value || !precio.value || !cantidad.value || !descripcion.value || !estado.value){
        alert('Los campos no pueden estar vacios')
        return 
    };

    const apiCreateProductos = 'http://localhost:3000/productos/crearProducto';

    fetch(apiCreateProductos, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
        imagen: imagen.value,
        nombre: nombre.value,
        precio: precio.value,
        cantidad: cantidad.value,
        descripcion: descripcion.value,
        estado: estado.value
    })})
    .then(response => {
        console.log(response)
        try{
            if(response){
                alert('Producto agregado')
                return 
            }
        }catch(error){
            console.log('Error subiendo productos', error)
        }
    })
})






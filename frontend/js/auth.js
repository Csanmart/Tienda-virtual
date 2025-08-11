//Inicio de sesion

const form = document.getElementById('miForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const mensajeAlerta = document.getElementById('mensaje');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Los campos no pueden estar vacíos...');
        return;
    }

    const api = 'http://localhost:3000/api/login';

    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json()) // ⬅ Convertimos la respuesta a JSON
    .then(data => {
        console.log("Respuesta del servidor:", data);

        if (data.user && data.user.isAdmin) {
            // Si es admin
            window.location.href = 'Tabla.datos.html';
        } else if (data.user) {
            // Si es usuario normal
            window.location.href = 'cliente.html';
        } else {
            mensajeAlerta.innerHTML = '<span class="text-danger">Credenciales incorrectas</span>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        mensajeAlerta.innerHTML = '<span class="text-danger">Error con la base de datos</span>';
    });
});



//Registro

const miForm = document.getElementById('miForm');


miForm.addEventListener('submit', function(event){
    event.preventDefault();


    //llamamos a los inputs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    //Configuracion de la api;

    const api = 'http://localhost:3000/api/Registro';

    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value
        })
    })
    .then(response =>{
        console.log(response);
        try{
            if(response){
                window.location.href= 'login.form.html'
            }else{
                console.log('Error en la redirecion')
            }
        }catch(error){
            console.log('Error subiendo los datos:', error);
        }
    })
    .catch(error =>{
        console.log('Error en la conexion en la base de datos...')
    })
});
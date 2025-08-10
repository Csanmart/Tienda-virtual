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
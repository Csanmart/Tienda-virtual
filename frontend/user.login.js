const form = document.getElementById('miForm');


form.addEventListener('submit', function(event){
    event.preventDefault();

    const mensajeAlerta = document.getElementById('mensaje')

    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    const api = 'http://localhost:3000/api/login/';

    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })
    .then(response => {
        
        console.log(response)
        try{
            if(response){
                window.location.href = 'Tabla.datos.html'
            }
        }catch(err){
            console.log('Error iniciando sesion', err)
        }
    })
    .catch(error =>{
        console.error('Error:' ,error);
        mensajeAlerta.innerHTML  = '<span class="text-danger">Error con la base de datos</span>'
    })

    
});
const form = document.getElementById('miForm');


form.addEventListener('submit', function(event){
    event.preventDefault();

    const mensajeAlerta = document.getElementById('mensaje')

    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const admin  = document.getElementById('admin')


    if(!email.value|| !password.value){
        alert('Los campos no pueden estar vacios...')
        return
    }
    
    const api = 'http://localhost:3000/api/login/';

    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email.value,
            password: password.value,
            admin:admin ? admin.value: null
        })
    })
    .then(response => {
        console.log(response)
        try{
            if(response.admin){
                window.location.href = 'admin/Tabla.Datos.html'
            }else{
                window.location.href = 'usuarios/cliente.html'
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
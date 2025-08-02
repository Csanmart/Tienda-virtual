
var cerrar = document.getElementById('cerrar');
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

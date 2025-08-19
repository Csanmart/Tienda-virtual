export default class UserIU{
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    mostrarUsuario(usuarios){
        this.container.innerHTML = "";
        usuarios.forEach(u =>{
            const card = document.createElement("div")
            card.className = "card";
            card.innerHTML=`
                <h3>${u.name}</h3>
                <p>Email: ${u.email}</p>
                <button data-id="${u.id}" class="btn btn-delete-user">Eliminar</button>
                <button data-id="${u.id}" class="btn btn-edit-user">Editar</button>
            `
            this.container.appendChild(card);
        })
    }
};
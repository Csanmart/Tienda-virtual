// Verificar sesión al cargar

document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    if (!usuario) {
        // Si no hay sesión, redirige al login
        window.location.href = 'login.html';
        return;
    }

    // Mostrar nombre y correo del usuario en la página
    document.getElementById("nombre").textContent = usuario.name;
    document.getElementById("email").textContent = usuario.email;
});

//Tarjeta de productos
const tarjeta = document.getElementById("tarjeta");
const apiProductos = "http://localhost:3000/productos/productos";

fetch(apiProductos, { method: "GET" })
  .then((response) => {
    console.log(response)
    if (!response.ok) {
      throw new Error("Error en el response", response);
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((producto) => {
      const card = document.createElement("div");

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="frontend/img/${producto.imagen}" class="card-img-top" alt="${
        producto.nombre
      }" style="object-fit: cover; height: 200px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text text-muted">${producto.descripcion}</p>
            <div class="mt-auto">
              <p class="fw-bold text-success">$${producto.precio}</p>
              <button class="btn btn-primary w-100 mb-3">Agregar al carrito</button>
              <button class= "btn btn-secondary mb-3 w-100" onclick="verMas(${producto.id})"><a>Ver mas</a></button>
            </div>
          </div>
        </div>
        `;
      tarjeta.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error obteniendo los datos..", error);
  });

//Mirar el productos por id
function verMas(id){
  window.location.href = `ver-mas.html?id=${id}`
};


//Redirecionar
function editar(){
  window.location.href = 'editar-perfil.html'
}

const cerrar = document.getElementById('cerrar')

cerrar.addEventListener('click', function(event){
  sessionStorage.clear();  
  if(cerrar){
        window.location.href = 'login.html'
    }
});


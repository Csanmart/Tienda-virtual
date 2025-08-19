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
    
    window.userId = usuario.userId
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


//Editar el usuario
// Botón editar
const editarBtn = document.getElementById('editar');
editarBtn.addEventListener('click', () => {
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));
  const formulario = document.getElementById('formulario');

  // Pintar formulario dinámicamente
  formulario.innerHTML = `
    <div class="card shadow-sm p-4">
      <h4 class="mb-3">Editar perfil</h4>
      <form id="formEditar">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" value="${usuario.name}" required>
        </div>
        <div class="mb-3">
          <label for="correo" class="form-label">Correo</label>
          <input type="email" class="form-control" id="correo" value="${usuario.email}" required>
        </div>
        <div class="mb-3">
          <label for="contrasena" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="contrasena" placeholder="Nueva contraseña">
        </div>
        <button type="submit" class="btn btn-success w-100">Guardar cambios</button>
      </form>
    </div>
  `;

  // Capturar el formulario después de pintarlo
  const formEditar = document.getElementById('formEditar');
  formEditar.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nombre').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contrasena').value;

    const apiEditar = `http://localhost:3000/api/actualizar/${window.userId}`;

    fetch(apiEditar, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    .then(response => {
      if (!response.ok) throw new Error(`Error en el status ${response.status}`);
      return response.json();
    })
    .then(data => {
      // Mensaje bonito con SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Perfil actualizado',
        text: 'Tus datos fueron guardados correctamente ✅',
        confirmButtonColor: '#3085d6'
      });

      // Actualizar datos en sessionStorage
      sessionStorage.setItem('usuario', JSON.stringify(data, {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
      }));

      // Refrescar datos en la tarjeta
      document.getElementById("nombre").textContent = data.usuario.name;
      document.getElementById("email").textContent = data.usuario.email;

      // Limpiar el formulario
      formulario.innerHTML = '';
    })
    .catch(error => {
      console.error("Error actualizando usuario:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al actualizar tu perfil ❌'
      });
    });
  });
});


//Mirar el productos por id
function verMas(id){
  window.location.href = `ver-mas.html?id=${id}`
};

const cerrar = document.getElementById('cerrar')

cerrar.addEventListener('click', function(event){
  sessionStorage.clear();  
  if(cerrar){
        window.location.href = 'login.html'
    }
});
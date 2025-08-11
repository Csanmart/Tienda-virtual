const tarjeta = document.getElementById('tarjeta');
const apiProductos = 'http://localhost:3000/productos/productos'
const strong = document.getElementById('nombre')
const api = 'http://localhost:3000/api/usuarios';





fetch(api, {method: 'GET'})
.then(response => response.json())
.then(data => {
  data.forEach(data =>{
    strong.innerHTML = `${data.name}`
  })
})

fetch(apiProductos, {method:'GET'})
.then(response => {
    if(!response.ok){
        throw new Error('Error en el response', response);
    }
    return response.json();
})
.then(data => {
    data.forEach(producto =>{
        const card = document.createElement('div');
        

        card.innerHTML=  `
        <div class="card h-100 shadow-sm">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="object-fit: cover; height: 200px;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text text-muted">${producto.descripcion}</p>
            <div class="mt-auto">
              <p class="fw-bold text-success">$${producto.precio}</p>
              <button class="btn btn-primary w-100 mb-3">Comprar</button>
            </div>
            <button class"btn btn-primary mb-3"><a>Ver mas</a></button>
          </div>
        </div>
        `;
        tarjeta.appendChild(card)
    });
})
.catch(error =>{
    console.error('Error obteniendo los datos..', error)
})

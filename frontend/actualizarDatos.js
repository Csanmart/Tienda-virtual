const { jsx } = require("react/jsx-runtime");

//Lleva formulario para editar
function llevarEditar() {
  window.location.href = "editar.html";
}

//Formulario para editar los datos.

const form = document.getElementById("miForm");

form.addEventListener("submit", function (event) {
  const api = "http://localhost:3000/api/update/:id";

  fetch(api, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  }).then((response) => {
    console.log(response);
    if (response.ok) {
      throw new Error("Error con el response");
    }
    return response.json();
    try {
      alert("Datos cambiados");
    } catch (error) {
      alert("Error cambiando los datos del usuario.");
    }
  }).catch(error=>{
    console.log('Error realizando procesos del servidor');
  })
});

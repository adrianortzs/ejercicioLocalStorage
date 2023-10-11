let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
	event.preventDefault();

    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const mesaje = event.target.mensaje.value;
    const imagen = event.target.imagen.value;

    const usuario =[{nombre:`${nombre}`},{email:`${email}`}, {mensaje: `${mesaje}`}, {imagen:`${imagen}`}]
    localStorage.setItem("user", JSON.stringify(usuario));

    console.log(usuario)
})

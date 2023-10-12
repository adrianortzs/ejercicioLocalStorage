let formulario = document.querySelector("form");

let listaUsers = [];
localStorage.setItem("listaUsers", JSON.stringify(listaUsers));

formulario.addEventListener("submit", function(event) {
	event.preventDefault();

    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const mesaje = event.target.mensaje.value;
    const imagen = event.target.imagen.value;
    
    let pintar = `nombre:${nombre}\n
                    email:${email}\n
                    mensaje: ${mesaje}\n
                    imagen:${imagen}\n`

    let p = document.createTextNode(pintar);
    document.body.appendChild(p);


    const usuario ={
        nombre:`${nombre}`,
        email:`${email}`, 
        mensaje: `${mesaje}`, 
        imagen:`${imagen}`
    }
    
    let nuevoUser = JSON.parse(localStorage.getItem("listaUsers"));
    
    nuevoUser.push(usuario);
    localStorage.setItem("listaUsers", JSON.stringify(nuevoUser));

})

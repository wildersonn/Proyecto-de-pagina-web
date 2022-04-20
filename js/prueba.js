var b = document.getElementById("boton")
b.addEventListener("click", iniciar)
var usuario = document.getElementById("usuario")
var contra = document.getElementById("contra")
var error = document.getElementById("error")

var u = "wilderson"
var c = 1234

function iniciar(){
    if (usuario.value == u && contra.value == c){
        window.location="pesoEnOtroPlaneta/indexPeso.html"
    }

    else{
        error.innerHTML= "Usuario o Contraseña incorrecta"; 
    }

}
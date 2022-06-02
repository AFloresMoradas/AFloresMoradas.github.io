
function validation() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var vaLetras = isNaN(name);

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(email);

    if (name == "") {
        alert("El nombre no puede estar en blanco");
        return false;
    }
    if (name.length >= 30 || /^\s+$/.test(name)) {
        alert("El nombre puede tener maximo 30 letras");
        return false;
    }
    if (vaLetras==false){
        alert("El nombre no puede contener numeros");
        return false;
    }
    if(esValido!=true){
        alert("El correo es invalido");
        return false;
    }
    if(message==""){
        alert("El mensaje no puede estar vacio")
        return false;
    }

    alert("Mensaje enviado con exito!");
}


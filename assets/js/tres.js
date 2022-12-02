const  clave =() =>{
    const pass1 = document.getElementById("clave1").value;
    const pass2 = document.getElementById("clave2").value;
    const pass3 = document.getElementById("clave3").value;
    const passFinal = (pass1 + pass2 + pass3)

    if (passFinal == 911) {
        document.querySelector('#suma_digitos').innerHTML = "Password 1 es correcta.";
    }
    else if (passFinal == 714) {
        document.querySelector('#suma_digitos').innerHTML = "Password 2 es correcta.";
    }
    else {
        document.querySelector('#suma_digitos').innerHTML = "Password incorrecta.";
    }

}
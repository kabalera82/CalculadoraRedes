function mostrarIp() {
    let ip = document.getElementById("ip").value;
    document.getElementById("prueba").innerText = "La IP es " + ip;
}

function limpiarIp() {
    document.getElementById("prueba").innerText = "";
}

// Función para transformar de decimal a binario
function transformar() {
    let opcion = radio();  // Llamamos a la función radio() para obtener la opción seleccionada
    
    switch (opcion) {
        case "decimalBinario":
            decimalABinario();
        break;
        case "binarioDecimal":
            binarioADecimal();
        break;
        case null:
            document.getElementById("prueba2").innerText = "Debes seleccionar una opción";
        break;
    }
};

// Función para obtener el valor del radio seleccionado
function radio() {
    let selectedRadio = document.querySelector('input[name="transformador"]:checked');
    if (selectedRadio) {
        return selectedRadio.value;  // Devuelve el valor del radio seleccionado
    } else {
        console.log("No se ha seleccionado ningún radio.");
        return null;  // Devuelve null si no hay radio seleccionado
    }
}


function decimalABinario(){
    let numDecimal = parseInt(document.getElementById("inputTransformador").value);
    // Si no es un número válido
    if (isNaN(numDecimal)) {
        document.getElementById("prueba2").innerText = "Ingrese un número válido";
        return;
    }

    let numBinario = "";
    
    while (numDecimal > 0) {
        numBinario = (numDecimal % 2) + numBinario; // Construir el binario en orden correcto
        numDecimal = Math.floor(numDecimal / 2);
    }

    document.getElementById("prueba2").innerText = numBinario || "0"; // Si es 0, mostrar "0"
}

function binarioADecimal() {
    let binario;
    let resultado = 0;
    let potencia = 0;

    binario = parseInt(document.getElementById("inputTransformador").value);

    // Verificar si el número es un binario válido (solo contiene 0s y 1s)
    while (binario > 0) {
        let digito = binario % 10;
        if (digito != 0 && digito != 1) {
            document.getElementById("prueba2").innerText = "No es un número binario válido";
            return;
        }
        // Convertir el dígito binario al valor decimal correspondiente
        resultado += digito * Math.pow(2, potencia);
        potencia++;
        // Eliminar el último dígito binario
        binario = Math.floor(binario / 10);
    }
    // Mostrar el resultado en el HTML
    document.getElementById("prueba2").innerText = resultado;
}

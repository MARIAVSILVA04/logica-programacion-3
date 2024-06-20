calcFactorial();

function calcFactorial() {
    // Solicitar al usuario un número y convertirlo a tipo number//
    let input = prompt("Hola! Calculemos el factorial de un número. Ingresa un número:");

    // Verificar si el usuario canceló el prompt//
    if (input === null) {
        console.log("Has cancelado. Ingresa un número la próxima vez.");
        return;
    }

    let numIngresado = Number(input);

    // Verificar si el dato ingresado es un número//
    if (isNaN(numIngresado)) {
        console.log("Ups! Datos no válidos. Ingresa un dato numérico.");
        return; // Salir de la función si no es un número válido//
    }

    // Calcular el factorial//
    let factorial = 1;
    for (let i = 2; i <= numIngresado; i++) {
        factorial *= i;
    }

    // Imprimir resultado por consola//
    console.log(`El factorial de ${numIngresado} es: ${factorial}`);
}
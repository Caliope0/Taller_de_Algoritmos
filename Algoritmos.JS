
// Escribir un programa que pregunte al usuario su nombre, y lueho lo salude.

let nombre;
nombre = prompt("Ingrese un nombre");
console.log("Hola " + nombre);

// Calcular el perímetro y área de un rectangulo dada su base y su altura.

function calcular(base, altura) {

    let area;
    area = base * altura;

    let perimetro;
    perimetro = 2 * (base + altura)

    return [area, perimetro]
}
let respuesta = calcular(7, 8)
console.log(resultado[0])

// Dados los catetos de un tríangulo rectángulo, calcular su hipotenusa.

function calcular_hipotenusa(cateto_1, cateto_2) {

    const hipotenusa = Math.sqrt(cateto_1 ** 2 + cateto_2 ** 2);
    return hipotenusa;
}
const result = calcular_hipotenusa(10, 20);
console.log(result);

// Dado dos numeros, mostrar la suma, resta, división y multiplicación de ambos.

function calcular_operaciones(a, b) {

    const suma = a + b; document.writeln(a + b);
    const resta = a - b; document.writeln(a - b);
    const dividir = a / b; document.writeln(a / b);
    const multiplicar = a * b; document.writeln(a * b);
    return [suma, resta, dividir, multiplicar]
}
const tanteo = calcular_operaciones(5, 7)
console.log(tanteo[2]);

// Calcular la media de tres números pedidos por el teclado (terminal,consola).

function media() {

    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let z = parseInt(document.getElementById("z").value);

    let promedio = (x + y + z) / 3
    return promedio;
}

// Un alumno desea saber cual será su calificación final en la materia de algoritmos. Dicha calificación se compone de los siguientes porcentajes:

/*    A. 55% del promedio de sus tres calificaciones parciales.
    B. 30% de la calificación del examen final.
    C. 15% de la calificación de un trabajo final.*/

function calificacion_final() {

    const parciales = ((a + b + c) / 3) * 0.55;

    const examen = d * 0.3;

    const trabajo = e * 0.15;

    return [parciales, examen, trabajo]
}
const resultado = calificacion_final(a = 5, b = 4, c = 4, d = 4, e = 4.5);
console.log(resultado);

// Dos vehículos viajan a diferentes velocidades (v1,v2) y están distanciados por una distancia d.
// el que esta detrás viaja a una velocidad mayor. Se pide hacer un algoritmo para ingresar la 
// distancia entre los vehículos (km) y sus respectivas velocidades (km/h) y con esto determinar 
// y mostrar en que tiempo(minutos) alcanzara al vehículo más rápido al otro.

function cacular_tiempo() {
    let v1 = parseInt(document.getElementById("x").value);
    let v2 = parseInt(document.getElementById("y").value);
    let d = parseInt(document.getElementById("z").value);

    let t = d / (v1 - v2);
    let tf = t * 60

    let resultado = document.getElementById("resultado");
    resultado.value = tf;
    return tf;
}





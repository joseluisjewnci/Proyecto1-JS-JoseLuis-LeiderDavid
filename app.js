const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

console.log("Sistema iniciado");

function nombresMayusculas() {
  const nombres = aprendices.map(a => a.nombre.toUpperCase());
  console.log("Nombres en mayúsculas:", nombres);
}
console.log("Sistema de Gestión de Notas iniciado");

// Mostrar aprendices
function mostrarAprendices() {
  console.log("\nLista de aprendices:");
  aprendices.forEach(a => {
    console.log(`${a.nombre} - Nota: ${a.nota} - Programa: ${a.programa}`);
  });
}

// Aprobados
function mostrarAprobados() {
  const aprobados = aprendices.filter(a => a.nota >= 3);

  console.log("\nAprendices aprobados:");
  aprobados.forEach(a => {
    console.log(`${a.nombre} - ${a.nota}`);
  });
}

// Reprobados
function mostrarReprobados() {
  const reprobados = aprendices.filter(a => a.nota < 3);

  console.log("\nAprendices reprobados:");
  reprobados.forEach(a => {
    console.log(`${a.nombre} - ${a.nota}`);
  });
}

// Map
function nombresMayusculas() {
  const nombres = aprendices.map(a => a.nombre.toUpperCase());
  console.log("\nNombres en mayúsculas:", nombres);
}

// Reduce
function calcularPromedio() {
  const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
  const promedio = suma / aprendices.length;
  console.log("\nPromedio:", promedio.toFixed(2));
}

// Sort
function ordenarNotas() {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);

  console.log("\nAprendices ordenados de mayor a menor:");
  ordenados.forEach(a => {
    console.log(`${a.nombre} - ${a.nota}`);
  });
}

// Clasificación
function clasificarNota(nota) {
  let nivel;

  switch (true) {
    case nota < 3:
      nivel = "Bajo";
      break;
    case nota < 4:
      nivel = "Básico";
      break;
    case nota < 4.6:
      nivel = "Alto";
      break;
    default:
      nivel = "Superior";
  }

  console.log(`Nivel: ${nivel}`);
}

// Promesa
function preguntar(texto) {
  return new Promise(resolve => rl.question(texto, resolve));
}

// Menú
async function menu() {
  let opcion = "";

  while (opcion !== "8") {
    opcion = await preguntar(`
1. Mostrar aprendices
2. Aprobados
3. Reprobados
4. Nombres en mayúsculas
5. Promedio
6. Ordenar notas
7. Clasificar nota
8. Salir
Seleccione una opción: `);

    switch (opcion) {
      case "1": mostrarAprendices(); break;
      case "2": mostrarAprobados(); break;
      case "3": mostrarReprobados(); break;
      case "4": nombresMayusculas(); break;
      case "5": calcularPromedio(); break;
      case "6": ordenarNotas(); break;
      case "7":
        const nota = await preguntar("Ingrese la nota: ");
        clasificarNota(parseFloat(nota));
        break;
      case "8":
        console.log("Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

menu();

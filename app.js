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

// reduce
function calcularPromedio() {
  const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
  const promedio = suma / aprendices.length;
  console.log("Promedio:", promedio.toFixed(2));
}

// map
function multiplicarNotas() {
  const resultado = aprendices.map(a => a.nota * 2);
  console.log("Notas multiplicadas:", resultado);
}

// filter
function mostrarAprobados() {
  const aprobados = aprendices.filter(a => a.nota >= 3);
  console.log("Aprobados:", aprobados);
}

// sort
function ordenarNotas() {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);
  console.log("Ordenados:", ordenados);
}
function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

// menú con while
async function menu() {
  let opcion = "";

  while (opcion !== "6") {
    opcion = await preguntar(`
1. Promedio
2. Multiplicar notas
3. Mostrar aprendices
4. Aprobados
5. Ordenar
6. Salir
Elige una opción: `);

    switch (opcion) {
      case "1":
        calcularPromedio();
        break;
      case "2":
        multiplicarNotas();
        break;
      case "3":
        console.log(aprendices);
        break;
      case "4":
        mostrarAprobados();
        break;
      case "5":
        ordenarNotas();
        break;
      case "6":
        console.log("Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

menu();

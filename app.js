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

function preguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, resolve);
  });
}

async function menu() {
  let opcion = "";

  while (opcion !== "7") {
    opcion = await preguntar(`
1. Promedio
2. Nombres en mayúsculas
3. Mostrar aprendices
4. Aprobados
5. Reprobados
6. Ordenar
7. Salir
Elige una opción: `);

    switch (opcion) {
      case "1":
        console.log("Función promedio pendiente");
        break;
      case "2":
        console.log("Función map pendiente");
        break;
      case "3":
        console.log("Función mostrar aprendices pendiente");
        break;
      case "4":
        console.log("Función aprobados pendiente");
        break;
      case "5":
        console.log("Función reprobados pendiente");
        break;
      case "6":
        console.log("Función ordenar pendiente");
        break;
      case "7":
        console.log("Saliendo...");
        rl.close();
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

menu();
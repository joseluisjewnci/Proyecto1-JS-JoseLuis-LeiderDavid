const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

function menu() {
  let opcion;

  while (opcion !== "4") {
    opcion = prompt(`
1. Mostrar aprendices
2. Mensaje prueba
3. Otro
4. Salir
`);

    switch (opcion) {
      case "1":
        console.log(aprendices);
        break;
      case "4":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

menu();
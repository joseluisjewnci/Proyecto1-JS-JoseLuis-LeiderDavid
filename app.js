const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

console.log("Sistema iniciado");
function calcularPromedio() {
  const suma = aprendices.reduce((acc, aprendiz) => acc + aprendiz.nota, 0);
  const promedio = suma / aprendices.length;

  console.log("Promedio:", promedio);
}
calcularPromedio();

function multiplicarNotas() {
  const resultado = aprendices.map(aprendiz => aprendiz.nota * 2);
  console.log("Notas multiplicadas:", resultado);
}

multiplicarNotas();

function menu() {
  let opcion;

  while (opcion !== "4") {
    opcion = prompt(`
1. Calcular promedio
2. Multiplicar notas
3. Mostrar aprendices
4. Salir
    `);

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
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción inválida");
    }
  }
}

menu();


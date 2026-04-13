const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

console.log("Sistema iniciado");

function calcularPromedio() {
  if (aprendices.length === 0) {
    console.log("No hay aprendices");
    return;
  }

  const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
  const promedio = suma / aprendices.length;

  console.log("Promedio:", promedio.toFixed(2));
}
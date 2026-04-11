const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

console.log("Sistema iniciado");

function multiplicarNotas() {
  const resultado = aprendices.map(a => a.nota * 2);
  console.log("Notas multiplicadas:", resultado);
}

multiplicarNotas();
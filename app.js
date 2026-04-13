const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

console.log("Sistema iniciado");

function ordenarNotas() {
  const ordenados = [...aprendices].sort((a, b) => b.nota - a.nota);

  console.log("Aprendices ordenados de mayor a menor:");
  ordenados.forEach(a => {
    console.log(`${a.nombre} - ${a.nota}`);
  });
}
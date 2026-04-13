const aprendices = [
  { nombre: "Ana", nota: 4.5, programa: "ADSO" },
  { nombre: "Luis", nota: 2.8, programa: "ADSO" },
  { nombre: "Marta", nota: 3.7, programa: "Diseño Web" },
  { nombre: "Pedro", nota: 1.9, programa: "ADSO" },
  { nombre: "Sofia", nota: 5.0, programa: "Diseño Web" }
];

console.log("Sistema iniciado");

function mostrarAprobados() {
  const aprobados = aprendices.filter(a => a.nota >= 3);

  console.log("Aprendices aprobados:");

  aprobados.forEach(a => {
    console.log(`${a.nombre} - ${a.nota}`);
  });
}

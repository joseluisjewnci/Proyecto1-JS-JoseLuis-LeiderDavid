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
const aprendices = [...];

function calcularPromedio() {
  if (aprendices.length === 0) {
    console.log("No hay aprendices");
    return;
  }

  const suma = aprendices.reduce((acc, a) => acc + a.nota, 0);
  const promedio = suma / aprendices.length;

  console.log("Promedio:", promedio.toFixed(2));
}
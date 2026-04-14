

<<<<<<< HEAD
=======
function calcularPromedio(){
if (aprendices.length === 0){console.log("No hay aprendices");
return;
}
const suma = aprendices.reduce((acc, a)=> acc + a.nota, 0);
const promedio = suma / aprendices.length;

console.log("promedio:", promedio.toFixed(2));
}

>>>>>>> 5b3165c6b67e37ba15594025c314e234e77e843a

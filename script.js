const anio = 2023
let nombreUsuario = prompt ("Decime tu nombre")
let apellidoUsuario = prompt ("Decime tu apellido")
let anioDeNacimiento = parseInt (prompt("Decime tu año de nacimiento"))

let edad = anio - anioDeNacimiento

let numero1 = 100
let numero2 = 90
let resultadoMultiplicacion = numero1 * numero2 //9000
let resultadoResta = numero1 - numero2 //10
let division = numero1 / numero2 // 1,11

numero1 = 1000
resultadoMultiplicacion = resultadoMultiplicacion * numero1 // 9000000

let datosUser = `Hola ${nombreUsuario} ${apellidoUsuario}, según mis cálculos tenes ${edad} años` // Diego Adrian
alert(datosUser)
console.log (datosUser)
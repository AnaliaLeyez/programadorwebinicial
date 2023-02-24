alert ("ingrese sus 6 números positivos, nosotros le indicamos cuál es el máximo")
let num1=parseInt(prompt ('número 1'));
let num2=parseInt(prompt ('número 2'));
let num3=parseInt(prompt ('número 3'));
let num4=parseInt(prompt ('número 4'));
let num5=parseInt(prompt ('número 5'));
let num6=parseInt(prompt ('número 6'));

const numeros =[num1, num2, num3, num4, num5, num6];

// opcion utilizando herramienta Math.max:
// document.write("el valor máximo es " + Math.max(...numeros) );


document.write ('los numeros son:'+ '<br>' );

for( let i = 0; i < numeros.length; i++){
	document.write(numeros[i] + '<br>')
}


let max = 0;

for (let numero of numeros) {
	if (max<numero)
		max=numero;
}

document.write('Valor máximo: ' + max);
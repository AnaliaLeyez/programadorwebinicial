
let distancia=parseInt(prompt('¿A qué distancia está tu destino?', ' '));

if (0<=distancia && distancia<1000) {
	document.write ('Usted debe transladarse a pie')
}

else if (1000<=distancia && distancia<10000) {
	document.write ('Usted debe transladarse en bicicleta')
}

else if (10000<=distancia && distancia<30000) {
	document.write ('Usted debe transladarse en colectivo')}

else if (30000<=distancia && distancia<100000) {
	document.write ('Usted debe transladarse en auto')}

else {
	document.write ('Usted debe transladarse en avión')}

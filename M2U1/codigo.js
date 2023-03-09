
const container= document.getElementsByClassName('container')[0];
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

rojo.addEventListener('click', function() {
    container.classList.add('rojo');
});

verde.addEventListener('click', function() {
    container.classList.add('verde');
});

azul.addEventListener('click', function() {
    container.classList.add('azul');
});

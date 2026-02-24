document.getElementById('botonSorpresa').addEventListener('click', function() {
    var texto = document.getElementById('textoSorpresa');
    texto.classList.toggle('oculto');
    
    if (!texto.classList.contains('oculto')) {
        this.textContent = "¡Te quiero!";
    } else {
        this.textContent = "Toca aquí para una sorpresa";
    }
});
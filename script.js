let totalScore = 0; // Inicializa el puntaje total
let fileUploaded = false; // Bandera para controlar si ya se subió un archivo

function addScore(value) {
    if (!fileUploaded) { // Verifica si ya se subió un archivo
        totalScore += value; // Suma el valor recibido al puntaje total
        document.getElementById('total-score').textContent = totalScore.toFixed(1); // Actualiza el puntaje en la página
        fileUploaded = true; // Marca que el archivo ya fue subido
    } else {
        alert("Ya subiste un archivo para este punto. No puedes subir más."); // Mensaje si se intenta subir otro archivo
    }
}

// Lógica de control del input de archivo
document.getElementById('file-upload').addEventListener('change', function () {
    if (this.files.length > 0) {
        addScore(0.5); // Llama a la función addScore con el valor correspondiente
    }
});

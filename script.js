let totalScore = 0;
let fileUploaded = false;

function addScore(value) {
    if (!fileUploaded) { // Verifica si ya se subió un archivo
        totalScore += value;
        document.getElementById('total-score').textContent = totalScore.toFixed(1); // Actualiza el puntaje en la página
        fileUploaded = true; // Marca que el archivo ya fue subido
    } else {
        alert("Ya subiste un archivo para este punto. No puedes subir más.");
    }
}

document.getElementById('file-upload').addEventListener('change', function () {
    if (this.files.length > 0) {
        addScore(0.5);
    }
});

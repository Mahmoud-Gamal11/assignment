const audio = document.getElementById('backgroundAudio');

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

document.getElementById('hiddenValue').textContent = document.getElementById('hiddenInput').value;
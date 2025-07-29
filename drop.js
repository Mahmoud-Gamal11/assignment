let hasDropped = false;
const dropZone = document.getElementById('dropZone');
const successMessage = document.getElementById('successMessage');
const notification = document.getElementById('notification');

function handleDrop(e) {
    e.preventDefault();
    if (hasDropped) {
        notification.classList.add('show');
        setTimeout(() => notification.classList.remove('show'), 2000);
        return;
    }
    const imageSrc = e.dataTransfer.getData('text/plain');
    dropZone.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Dropped Image';
    dropZone.appendChild(img);
    successMessage.classList.add('show');
    setTimeout(() => successMessage.classList.remove('show'), 2000);
    hasDropped = true;
}
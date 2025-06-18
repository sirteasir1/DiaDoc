document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.classList.add('fade-overlay');
    overlay.textContent = 'Загрузка...'; 
    document.body.appendChild(overlay);

    window.onload = function() {
        overlay.classList.add('hidden');
        body.classList.add('loaded');
    };
});
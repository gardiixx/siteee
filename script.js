function toggleSection() {
    const section = document.getElementById('extra-section');
    const button = document.querySelector('.toggle-button');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
        button.textContent = 'Afficher moins';
    } else {
        section.classList.add('hidden');
        button.textContent = 'Afficher plus';
    }
}

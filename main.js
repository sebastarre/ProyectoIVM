function filterCards() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {  // Cambiado de 'cad' a 'card'
        const cardTitle = card.getAttribute('data-title').toLowerCase();  // Corregido el nombre de la variable
        if (cardTitle.includes(searchValue)) {
            card.style.display = 'block';  // Muestra la tarjeta si coincide
        } else {
            card.style.display = 'none';  // Oculta la tarjeta si no coincide
        }
    });
}

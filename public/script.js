document.getElementById('fetch-promotions').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/promotions');
        if (!response.ok) {
            throw new Error('Erro ao buscar promoções');
        }
        const promotions = await response.json();
        displayPromotions(promotions);
    } catch (error) {
        console.error(error);
        alert('Erro ao buscar promoções: ' + error.message);
    }
});

function displayPromotions(promotions) {
    const promotionsList = document.getElementById('promotions-list');
    promotionsList.innerHTML = ''; // Limpa a lista anterior

    if (promotions.length === 0) {
        promotionsList.innerHTML = '<p>Nenhuma promoção encontrada.</p>';
        return;
    }

    promotions.forEach(promotion => {
        const promotionItem = document.createElement('div');
        promotionItem.className = 'promotion-item';
        promotionItem.innerHTML = `
            <h2>${promotion.title}</h2>
            <p>Preço: ${promotion.price}</p>
            <a href="${promotion.link}" target="_blank">Ver Promoção</a>
        `;
        promotionsList.appendChild(promotionItem);
    });
}

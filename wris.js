const cardInput = document.getElementById('cardInput');
const addBtn = document.getElementById('addBtn');
const cardContainer = document.getElementById('cardContainer');

let cards = [];

function createCard(title) {
    const card = {
        id: Date.now(),
        title: title,
        createdAt: new Date().toLocaleString()
    };
    cards.push(card);
    renderCards();
}

function deleteCard(id) {
    cards = cards.filter(card => card.id !== id);
    renderCards();
}

function renderCards() {
    cardContainer.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <p style="color: #666; font-size: 14px;">Created: ${card.createdAt}</p>
            <div class="card-actions">
                <button class="delete-btn" onclick="deleteCard(${card.id})">Delete</button>
            </div>
        `;
        cardContainer.appendChild(cardElement);
    });
}

addBtn.addEventListener('click', () => {
    const title = cardInput.value.trim();
    if (title) {
        createCard(title);
        cardInput.value = '';
    }
});

cardInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const title = cardInput.value.trim();
        if (title) {
            createCard(title);
            cardInput.value = '';
        }
    }
});

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
        
        const title = document.createElement('h3');
        title.textContent = card.title;
        
        const timestamp = document.createElement('p');
        timestamp.style.color = '#666';
        timestamp.style.fontSize = '14px';
        timestamp.textContent = `Created: ${card.createdAt}`;
        
        const actions = document.createElement('div');
        actions.className = 'card-actions';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteCard(card.id));
        
        actions.appendChild(deleteBtn);
        cardElement.appendChild(title);
        cardElement.appendChild(timestamp);
        cardElement.appendChild(actions);
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

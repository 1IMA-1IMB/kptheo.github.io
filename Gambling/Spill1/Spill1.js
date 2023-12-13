document.getElementById('spinnKnapp').addEventListener('click', function() {
    let symboler = ['🍒', '🍋', '🍉', '7️⃣', '💎'];
    let slot1 = document.getElementById('slot1');
    let slot2 = document.getElementById('slot2');
    let slot3 = document.getElementById('slot3');
    let resultat = document.getElementById('resultat');

    slot1.textContent = symboler[Math.floor(Math.random() * symboler.length)];
    slot2.textContent = symboler[Math.floor(Math.random() * symboler.length)];
    slot3.textContent = symboler[Math.floor(Math.random() * symboler.length)];

    if (slot1.textContent === slot2.textContent && slot2.textContent === slot3.textContent) {
        resultat.textContent = 'Gratulerer! Du vant!';
    } else {
        resultat.textContent = 'Prøv igjen!';
    }
});

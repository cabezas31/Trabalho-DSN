document.getElementById('checkin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const passengerName = document.getElementById('passenger-name').value;
    const busNumber = document.getElementById('bus-number').value;

    // Adiciona check-out à lista (pode ser melhorado com lógica real)
    const checkoutList = document.getElementById('checkout-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${passengerName} - Ônibus: ${busNumber}`;
    checkoutList.appendChild(listItem);

    // Limpa o formulário
    this.reset();
});

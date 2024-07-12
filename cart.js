document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('Cart loaded:', cart);  // Debugging: Zeigt den geladenen Warenkorb-Inhalt an

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Größe: ${item.size}</p>
                    <p>Menge: ${item.quantity}</p>
                    <p>Preis: ${item.price}</p>
                </div>
                <button class="remove-item">Entfernen</button>
            `;
            cartItemsContainer.appendChild(cartItem);
            subtotal += parseFloat(item.price.replace('€', '').replace(',', '.')) * item.quantity;
        });

        subtotalElement.textContent = `${subtotal.toFixed(2).replace('.', ',')} €`;
        totalElement.textContent = `${subtotal.toFixed(2).replace('.', ',')} €`;

        document.querySelectorAll('.remove-item').forEach((button, index) => {
            button.addEventListener('click', () => {
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });
        });
    }

    updateCart();

    checkoutButton.addEventListener('click', function() {
        alert('Zur Kasse gehen...');
        // Hier können Sie die Checkout-Logik hinzufügen
    });
});

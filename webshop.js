document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('fixed-cart-icon');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart updated:', cart);  // Debugging: Zeigt den aktuellen Warenkorb-Inhalt an
    }

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('.price').textContent;
            const productImage = product.querySelector('img').src;
            const productSize = 'L'; // Hier können Sie die Größe dynamisch hinzufügen
            const productQuantity = 1; // Hier können Sie die Menge dynamisch hinzufügen

            cart.push({ name: productName, price: productPrice, image: productImage, size: productSize, quantity: productQuantity });
            updateCart();

            alert('Das Produkt wurde in den Einkaufswagen gelegt!');
        });
    });

    cartIcon.addEventListener('click', function() {
        window.location.href = 'cart.html';
    });
});

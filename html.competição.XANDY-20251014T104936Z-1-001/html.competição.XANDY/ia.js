// Funcionalidade do carrinho
let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada! Total: R$ ' + total.toFixed(2));
        cart = [];
        total = 0;
        updateCart();
    }
}
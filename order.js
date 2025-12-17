// cart representing the current order contents.
let cart = [];
function $(id) {
    return document.getElementById(id);
} // Shortcut for getElementById

/**
 * Applies category filtering and optional sorting to menu
 * Restores original DOM order first (from originalOrders)
 */
function filterMenu() {
    const selectedCategory = document.getElementById('category-select').value;
    const selectedSort = document.getElementById('sort-select').value;

    // Reset all categories to their original items
    const pizzaCategory = document.getElementById('pizza-category');
    const drinksCategory = document.getElementById('drinks-category');
    const sidesCategory = document.getElementById('sides-category');

    pizzaCategory.innerHTML = '';
    drinksCategory.innerHTML = '';
    sidesCategory.innerHTML = '';

    originalOrders.pizzas.forEach(item => pizzaCategory.appendChild(item.cloneNode(true)));
    originalOrders.drinks.forEach(item => drinksCategory.appendChild(item.cloneNode(true)));
    originalOrders.sides.forEach(item => sidesCategory.appendChild(item.cloneNode(true)));

    // Hide all categories by default;
    pizzaCategory.style.display = 'none';
    drinksCategory.style.display = 'none';
    sidesCategory.style.display = 'none';

    // Show selected category
    let activeCategoryId;
    let categoryKey;
    if (selectedCategory === 'pizzas') {
        activeCategoryId = 'pizza-category';
        categoryKey = 'pizzas';
        pizzaCategory.style.display = 'block';
    } else if (selectedCategory === 'drinks') {
        activeCategoryId = 'drinks-category';
        categoryKey = 'drinks';
        drinksCategory.style.display = 'block';
    } else if (selectedCategory === 'sides') {
        activeCategoryId = 'sides-category';
        categoryKey = 'sides';
        sidesCategory.style.display = 'block';
    }
        
    // Clear and repopulate with original items
    const activeCategoryEl = document.getElementById(activeCategoryId);
    activeCategoryEl.innerHTML = '';
    originalOrders[categoryKey].forEach(item => {activeCategoryEl.appendChild(item.cloneNode(true));});
    
    // Update menu title
    const menuTitle = document.querySelector('.menu-section h2');
    if (menuTitle) {
        if (selectedCategory === 'pizzas') {
            menuTitle.textContent = 'Our Menu';
        } else if (selectedCategory === 'drinks') {
            menuTitle.textContent = 'Drinks';
        } else if (selectedCategory === 'sides') {
            menuTitle.textContent = 'Sides';
        }
    }

  // Sort items in the active category
    if (activeCategoryId) {
        const categoryElement = document.getElementById(activeCategoryId);
        let items = Array.from(categoryElement.querySelectorAll('.pizza-item'));

        if (selectedSort !== 'default') {
            items.sort((a, b) => {
                if (selectedSort === 'calories') {
                    const calA = parseInt(a.getAttribute('data-calories')) || 0;
                    const calB = parseInt(b.getAttribute('data-calories')) || 0;
                    return calA - calB;
                } else if (selectedSort === 'price') {
                    const priceA = parseFloat(a.querySelector('.size-btn').getAttribute('onclick').match(/[\d.]+/)[0]);
                    const priceB = parseFloat(b.querySelector('.size-btn').getAttribute('onclick').match(/[\d.]+/)[0]);
                    return priceA - priceB;
                } else if (selectedSort === 'name') {
                    const nameA = a.querySelector('h3').textContent.toLowerCase();
                    const nameB = b.querySelector('h3').textContent.toLowerCase();
                    return nameA.localeCompare(nameB);
                }
            });

            // Re-append sorted items in new order
            categoryElement.innerHTML = '';
            items.forEach(item => categoryElement.appendChild(item));
        }
        // For 'default', the original order is already restored above
    }
}

    // Show toast message for lightweight feedback (non-blocking)
function showToast(title, message, duration = 1500) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDescription');

  toastTitle.textContent = title;
  toastDesc.textContent = message;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Render cart on initial load so persisted items shown
renderCart();

/* ---------- Order Modal (confirmation) ---------- */
function showOrderModal(title, message) {
  const modal = document.getElementById('orderModal');
  const modalTitle = document.getElementById('orderModalTitle');
  const modalMsg = document.getElementById('orderModalMessage');
  const okBtn = document.getElementById('orderModalOkBtn');

  modalTitle.textContent = title;
  modalMsg.textContent = message;
  modal.classList.add('show');

  okBtn.onclick = () => {
    modal.classList.remove('show');
  };
}
/**
 * Add an item (by name/size/price) to cart. If the same exists,
 * increments quantity.
 */
function addToCart(name, size, price) {
    const itemId = `${name}-${size}`;
    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: itemId,
            name: name,
            size: size,
            price: price,
            quantity: 1
        });
    }
    renderCart();
    showToast('Added to Cart', `${name} (${size}) added to your cart.`);
}

/**
 * Decrement quantity for a cart line item; remove it if quantity reaches zero.
 */
function removeFromCart(itemId) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        // remove item when quantity reaches 0
        cart = cart.filter(i => i.id !== itemId);
    }
    renderCart();
}
/**
 * Compute to two-decimal.
 */
function getTotalPrice() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}
/**
 * Render cart sidebar contents in single html string
 */
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        return;
    }

    let html = cart.map(item => `
    <div class="cart-item">
        <div class="cart-item-info">
                    <p>${item.name}</p>
                    <small>${item.size} × ${item.quantity}</small>
                </div>
                <div>
                    <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                    <button type="button" class="remove-btn" style="color: #320f11ff;" onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
            </div>
        `).join('') 
        html += `
        <div class="cart-total">
            <span>Total:</span>
            <span class="price">$${getTotalPrice()}</span>
        </div>
    `;
    cartItemsDiv.innerHTML = html; // Updates the DOM with generated HTML
}; 

// called by confirm button
//Open the order details modal.
function openOrderDetailsDialog() {
    // Use the in-memory cart (kept in sync)
    const currentCart = cart || [];
    document.body.classList.add('modal-open');
    if (!currentCart || currentCart.length === 0) {
        alert("Your cart is empty! Please add some pizzas.");
        return;
    }
    // Populate items + total above the form
    populateOrderDetailsModal();

    // Show the modal
    const modal = document.getElementById('order-details-modal');
    if (modal) modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    // Optionally focus the first input for accessibility:
    const firstInput = modal.querySelector('input, textarea, select, button');
    if (firstInput) firstInput.focus();
}

function closeOrderDetailsDialog() {
    document.body.classList.remove('modal-open');
    const modal = document.getElementById('order-details-modal');
    if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }  
}  
/**
 * Handle order form submission, Resets cart and form afterwards.
 */
function submitOrder(event) {
    event.preventDefault();

    if (!cart.length) {
        showToast('Empty Cart', 'Please add items to your cart!');
        return;
    }

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    console.log('Form data:', { name, phone, orderType });
    let confirmationMessage = `Order placed successfully!\n\nName: ${name}\n`;

    if (orderType === 'Delivery') {
        const address = document.getElementById('address').value;
        if (!address.trim()) {
            showToast('Missing Address', 'Please enter a delivery address.');
            return;
        }
        confirmationMessage += `\n\nWe'll deliver to ${address} in 30-45 minutes!`;
    } else {
        confirmationMessage += `\n\nYour order will be ready for pickup in 20-30 minutes!`;
    }
    const lines = confirmationMessage.split('\n');

    closeOrderDetailsDialog();
    showOrderModal('Order Confirmed', confirmationMessage);
    cart = [];
    renderCart();
    document.getElementById('order-form').reset();

    // Reset to default delivery option
    document.getElementById('delivery').checked = true;
    document.getElementById('address-group').style.display = 'block';
    document.getElementById('address').style.display = 'block';
    document.getElementById('address').required = true;
        
}

document.addEventListener('DOMContentLoaded', () => {
    // Setup the address visibility logic for the form inside the modal
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('change', (event) => {
            if (event.target.name === 'orderType') {
                const isDelivery = event.target.value === 'Delivery';
                const addressGroup = document.getElementById('address-group');
                const addressTextarea = document.getElementById('address');
                
                if (isDelivery) {
                    addressGroup.style.display = 'block';
                    addressTextarea.style.display = 'block';
                    addressTextarea.required = true;
                } else {
                    addressGroup.style.display = 'none';
                    addressTextarea.style.display = 'none';
                    addressTextarea.required = false;
                }
            }
        });
    }
});
/**
 * Populate the order details modal with current cart line items and total.
 */
function populateOrderDetailsModal() {
  const itemsContainer = document.getElementById('order-details-items');
  const totalContainer = document.getElementById('order-details-total');

  if (!itemsContainer || !totalContainer) return;

  // Clear previous content
  itemsContainer.textContent = '';
  totalContainer.textContent = '';

  if (!cart || cart.length === 0) {
    itemsContainer.textContent = 'Your cart is empty.';
    return;
  }

  // Build a simple list
  const list = document.createElement('div');
  list.className = 'order-items-list';

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'order-item-row';

    const left = document.createElement('div'); // name + qty
    left.className = 'order-item-left';
    left.textContent = `${item.name} (${item.size}) × ${item.quantity}`;

    const right = document.createElement('div'); // line price
    right.className = 'order-item-right';
    right.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

    row.appendChild(left);
    row.appendChild(right);
    list.appendChild(row);
  });

  itemsContainer.appendChild(list);

  // Show total
  const totalRow = document.createElement('div');
  totalRow.className = 'order-total-row';
  totalRow.textContent = `Total: $${getTotalPrice()}`;
  totalContainer.appendChild(totalRow);
}
/**
 * Generic modal for final order confirmation dialog.
 * Adds click-outside and Escape-to-close interactions.
 */
function showOrderModal(title, message) {
    const modal = document.getElementById('orderModal');
    const modalTitle = document.getElementById('orderModalTitle');
    const modalMsg = document.getElementById('orderModalMessage');
    const okBtn = document.getElementById('orderModalOkBtn');

    modalTitle.textContent = title;
    modalMsg.textContent = message;
    modal.classList.add('show');

    // Close modal when OK button is clicked
    okBtn.onclick = () => {
        modal.classList.remove('show');
    };

    // Close modal when clicking outside the box
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    };

    // Close modal with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('show');
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}


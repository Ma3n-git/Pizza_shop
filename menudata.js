/**
 * Static menu catalog used to render the order page.
 */
const menuData = {
    //array of pizza, drink and sides objects
    pizzas: [
        {
            id: 'margherita',
            name: 'Margherita',
            description: 'Tomato, mozzarella, basil',
            emoji: '🍕',
            calories: 800,
            sizes: [
                { size: 'Small', price: 5.99 },
                { size: 'Medium', price: 10.99 },
                { size: 'Large', price: 14.99 }
            ]
        },
        {
            id: 'pepperoni',
            name: 'Pepperoni',
            description: 'Pepperoni, mozzarella, tomato sauce',
            emoji: '🍕',
            calories: 950,
            sizes: [
                { size: 'Small', price: 7.99 },
                { size: 'Medium', price: 12.99 },
                { size: 'Large', price: 16.99 }
            ]
        },
        {
            id: 'vegetarian',
            name: 'Vegetarian',
            description: 'Bell peppers, mushrooms, olives, onions',
            emoji: '🍕',
            calories: 750,
            sizes: [
                { size: 'Small', price: 7.99 },
                { size: 'Medium', price: 12.99 },
                { size: 'Large', price: 16.99 }
            ]
        },
        {
            id: 'hawaiian',
            name: 'Hawaiian',
            description: 'Ham, pineapple, mozzarella',
            emoji: '🍕',
            calories: 900,
            sizes: [
                { size: 'Small', price: 8.99 },
                { size: 'Medium', price: 12.99 },
                { size: 'Large', price: 16.99 }
            ]
        },
        {
            id: 'meat-lovers',
            name: 'Meat Lovers',
            description: 'Pepperoni, sausage, bacon, ham',
            emoji: '🍕',
            calories: 1100,
            sizes: [
                { size: 'Small', price: 9.99 },
                { size: 'Medium', price: 13.99 },
                { size: 'Large', price: 17.99 }
            ]
        },
        {
            id: 'bbq-chicken',
            name: 'BBQ Chicken',
            description: 'BBQ sauce, chicken, red onions, cilantro',
            emoji: '🍕',
            calories: 800,
            sizes: [
                { size: 'Small', price: 8.99 },
                { size: 'Medium', price: 13.99 },
                { size: 'Large', price: 17.99 }
            ]
        },
        {
            id: 'supreme',
            name: 'Supreme',
            description: 'Pepperoni, sausage, peppers, mushrooms, onions',
            emoji: '🍕',
            calories: 1050,
            sizes: [
                { size: 'Small', price: 9.99 },
                { size: 'Medium', price: 14.99 },
                { size: 'Large', price: 18.99 }
            ]
        },
        {
            id: 'buffalo-chicken',
            name: 'Buffalo Chicken',
            description: 'Buffalo sauce, chicken, mozzarella, ranch drizzle',
            emoji: '🍕',
            calories: 950,
            sizes: [
                { size: 'Small', price: 8.99 },
                { size: 'Medium', price: 13.99 },
                { size: 'Large', price: 17.99 }
            ]
        },
        {
            id: 'four-cheese',
            name: 'Four Cheese',
            description: 'Mozzarella, cheddar, parmesan, blue cheese',
            emoji: '🍕',
            calories: 850,
            sizes: [
                { size: 'Small', price: 7.99 },
                { size: 'Medium', price: 12.99 },
                { size: 'Large', price: 16.99 }
            ]
        }
    ],
    drinks: [
        {
            id: 'coca-cola',
            name: 'Coca-Cola',
            description: 'Classic Coke',
            emoji: '🥤',
            calories: 150,
            sizes: [
                { size: '330ml', price: 1.99 },
                { size: '500ml', price: 2.49 },
                { size: '1L', price: 3.99 }
            ]
        },
        {
            id: 'fanta',
            name: 'Fanta',
            description: 'Orange fizzy drink',
            emoji: '🧃',
            calories: 140,
            sizes: [
                { size: '330ml', price: 1.99 },
                { size: '500ml', price: 2.49 }
            ]
        },
        {
            id: 'sprite',
            name: 'Sprite',
            description: 'Lemon-lime soda',
            emoji: '🥤',
            calories: 140,
            sizes: [
                { size: '330ml', price: 1.99 },
                { size: '500ml', price: 2.49 }
            ]
        },
        {
            id: 'orange-juice',
            name: 'Orange Juice',
            description: 'Freshly Squeezed',
            emoji: '🍊',
            calories: 120,
            sizes: [
                { size: 'Small', price: 2.49 },
                { size: 'Large', price: 3.99 }
            ]
        },
        {
            id: 'iced-tea',
            name: 'Iced Tea',
            description: 'Sweet lemon iced tea',
            emoji: '🥤',
            calories: 130,
            sizes: [
                { size: 'Small', price: 2.49 },
                { size: 'Large', price: 3.49 }
            ]
        },
        {
            id: 'lemonade',
            name: 'Lemonade',
            description: 'Freshly squeezed lemonade',
            emoji: '🍋',
            calories: 120,
            sizes: [
                { size: 'Small', price: 2.49 },
                { size: 'Large', price: 3.49 }
            ]
        },
        {
            id: 'water',
            name: 'Water',
            description: 'Still mineral water',
            emoji: '💧',
            calories: 0,
            sizes: [
                { size: '500ml', price: 1.49 },
                { size: '1L', price: 2.49 }
            ]
        }
    ],
    sides: [
        {
            id: 'garlic-bread',
            name: 'Garlic Bread',
            description: 'Fresh baked with garlic butter',
            emoji: '🍞',
            calories: 150,
            sizes: [
                { size: 'Regular', price: 3.99 },
                { size: 'Large', price: 5.99 }
            ]
        },
        {
            id: 'chicken-wings',
            name: 'Chicken Wings',
            description: '6 pieces with your choice of sauce',
            emoji: '🍗',
            calories: 150,
            sizes: [
                { size: 'BBQ', price: 6.99 },
                { size: 'Buffalo', price: 6.99 },
                { size: 'Garlic Parmesan', price: 7.49 }
            ]
        },
        {
            id: 'mozzarella-sticks',
            name: 'Mozzarella Sticks',
            description: 'Breaded cheese sticks with marinara sauce',
            emoji: '🧀',
            calories: 200,
            sizes: [
                { size: '6 pieces', price: 5.99 }
            ]
        },
        {
            id: 'potato-wedges',
            name: 'Potato Wedges',
            description: 'Seasoned with herbs',
            emoji: '🍟',
            calories: 250,
            sizes: [
                { size: 'Regular', price: 4.49 },
                { size: 'Large', price: 6.49 }
            ]
        },
        {
            id: 'french-fries',
            name: 'French Fries',
            description: 'Crispy golden fries with your choice of sauce',
            emoji: '🍟',
            calories: 300,
            sizes: [
                { size: 'Regular', price: 3.99 },
                { size: 'Large', price: 5.99 }
            ]
        },
        {
            id: 'caesar-salad',
            name: 'Caesar Salad',
            description: 'Fresh romaine, parmesan, croutons with dressing',
            emoji: '🥗',
            calories: 100,
            sizes: [
                { size: 'House', price: 4.99 },
                { size: 'Caesar', price: 5.49 }
            ]
        }
    ]
};
// Store original order of items for each category to allow "default" sorting
const originalOrders = {
    pizzas: [],
    drinks: [],
    sides: []
};


// Generate menu items in the DOM
function generateMenuItems() {
    const pizzaCategory = document.getElementById('pizza-category');
    const drinksCategory = document.getElementById('drinks-category');
    const sidesCategory = document.getElementById('sides-category');
    
    // Clear existing content
    pizzaCategory.innerHTML = '';
    drinksCategory.innerHTML = '';
    sidesCategory.innerHTML = '';
    
    menuData.pizzas.forEach(item => {
        pizzaCategory.appendChild(createMenuItem(item));
    });
    
    menuData.drinks.forEach(item => {
        drinksCategory.appendChild(createMenuItem(item));
    });
    
    menuData.sides.forEach(item => {
        sidesCategory.appendChild(createMenuItem(item));
    });
}

/**
 * Create a single menu element with buttons wired to addToCart().
 * @param {Object} item -
 * @returns {HTMLDivElement}
 */
function createMenuItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'pizza-item';
    itemDiv.dataset.calories = item.calories;
    
    const sizeButtons = item.sizes.map(size => 
        `<button class="size-btn" onclick="addToCart('${item.name}', '${size.size}', ${size.price})">
            ${size.size} - $${size.price}
        </button>`
    ).join('');
    
    itemDiv.innerHTML = `
        <div class="pizza-header">
            <div>
                <h3>${item.name}</h3>
                <p><strong>${item.description}</strong></p>
            </div>
            <span style="font-size: 3rem;">${item.emoji}</span>
        </div>
        <div class="size-buttons">
            ${sizeButtons}
        </div>
    `;
    
    return itemDiv;
}
/**
 * Toggle address textarea visibility and requirement based on
 * selection.
 */
function toggleAddressField() {
        const checked = document.querySelector('input[name="orderType"]:checked');
        const isDelivery = checked && checked.value === 'Delivery';
        const addressTextarea = document.getElementById('address');
        const addressGroup = document.getElementById('address-group');
        if (isDelivery) {
            if (addressTextarea) addressTextarea.style.display = 'block';
            if (addressGroup) addressGroup.style.display = 'block';
            if (addressTextarea) addressTextarea.required = true;
        } else {
            if (addressTextarea) addressTextarea.style.display = 'none';
            if (addressGroup) addressGroup.style.display = 'none';
            if (addressTextarea) addressTextarea.required = false;
        }
        const radios = document.querySelectorAll('input[name="orderType"]');
        radios.forEach(radio => radio.addEventListener('change', toggleAddressField));
}
    
// Initialize the order page
document.addEventListener('DOMContentLoaded', function() {
    // Generate menu items from data
    generateMenuItems(); 

    // Save original order of items
    const pizzaCategory = document.getElementById("pizza-category");
    const drinksCategory = document.getElementById("drinks-category");
    const sidesCategory = document.getElementById("sides-category");
    
    originalOrders.pizzas = Array.from(pizzaCategory.querySelectorAll('.pizza-item')).map(item => item.cloneNode(true));
    originalOrders.drinks = Array.from(drinksCategory.querySelectorAll('.pizza-item')).map(item => item.cloneNode(true));
    originalOrders.sides = Array.from(sidesCategory.querySelectorAll('.pizza-item')).map(item => item.cloneNode(true));
    
    // Add listeners
    document.getElementById("category-select").addEventListener("change", filterMenu);
    document.getElementById("sort-select").addEventListener("change", filterMenu);
    
    // Set initial view
    filterMenu();
    
    // listen to toggle address field
    toggleAddressField();
});


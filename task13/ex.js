const products = [
    {
        name: 'Sony Playstation 5',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/playstation_5_tywoqq.png',
        type: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung Galaxy',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739038/samsung_galaxy_iad0cv.png',
        type: 'smartphones',
        price: 399.99,
    },
    {
        name: 'Cannon EOS Camera',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739063/cannon_eos_camera_ydidrx.png',
        type: 'cameras',
        price: 749.99,
    },
    {
        name: 'Sony A7 Camera',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_a7_camera_xvkxwd.png',
        type: 'cameras',
        price: 1999.99,
    },
    {
        name: 'LG TV',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/lg_tv_yl0k03.png',
        type: 'televisions',
        price: 799.99,
    },
    {
        name: 'Nintendo Switch',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/nintendo_switch_diq6cy.png',
        type: 'games',
        price: 299.99,
    },
    {
        name: 'Xbox Series X',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/xbox_series_x_e9yex6.png',
        type: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung TV',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/samsung_tv_adpfag.png',
        type: 'televisions',
        price: 1099.99,
    },
    {
        name: 'Google Pixel',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739064/google_pixel_r2bpdo.png',
        type: 'smartphones',
        price: 499.99,
    },
    {
        name: 'Sony ZV1F Camera',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_zv1f_camera_o7kt3t.png',
        type: 'cameras',
        price: 799.99,
    },
    {
        name: 'Toshiba TV',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/toshiba_tv_sdsrnz.png',
        type: 'televisions',
        price: 499.99,
    },
    {
        name: 'iPhone 14',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739062/iphone_14_fhu2gq.png',
        type: 'smartphones',
        price: 999.99,
    }
];

function renderProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white p-4 rounded-lg shadow';
        productCard.innerHTML = `
            <img src="${product.url}" alt="${product.name}" class="w-full h-48 object-contain mb-4">
            <h3 class="text-lg font-semibold">${product.name}</h3>
            <p class="text-gray-600">$${product.price.toFixed(2)}</p>
            <p class="text-sm text-gray-500">${product.type}</p>
        `;
        productList.appendChild(productCard);
    });
}

function filterAndSortProducts() {
    let filteredProducts = [...products];

    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery)
        );
    }

    const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(cb => cb.value);
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedCategories.includes(product.type)
        );
    }

    const sortOption = document.getElementById('sortSelect').value;
    if (sortOption === 'low-to-high') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-to-low') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    renderProducts(filteredProducts);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterAndSortProducts);
document.getElementById('sortSelect').addEventListener('change', filterAndSortProducts);
document.querySelectorAll('.category-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', filterAndSortProducts);
});

// Initial render
renderProducts(products);
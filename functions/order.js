const API__URL = 'https://fakestoreapi.com/products?limit=12';

async function getProducts() {
    try {
        const response = await fetch(API__URL);
        const data = await response.json();
        console.log(data);
        data.forEach(producto => {
            crearFoodBox(producto);
        });
    } catch(error) {
        console.error(error);
    }
}

getProducts();

const orderContainer = document.querySelector('#order-container');

function crearFoodBox(comida) {
    const {image, title, description, price} = comida;
    const foodBox = document.createElement('div');
    foodBox.classList.add("food__box");

    foodBox.innerHTML = `
        <img src=${image} alt="" class="food__image">
        <h3 class="food__tittle">${title}</h3>
        <p class="food__description font-monospace">${description}</p>
        <p class="food__price roboto-regular-italic">$${price}</p>
        <button class="food__button roboto-bold">Agregar</button>
    `;

    orderContainer.appendChild(foodBox);
}
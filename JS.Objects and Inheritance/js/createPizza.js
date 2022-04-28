const ingredientsItems = document.querySelectorAll('.ingredients__item');
const createBtn = document.getElementById('create-button');
const doughSelect = document.getElementById('dough-select');
let ingredientNamesArray = [];
let ingredientCaloriesArray = [];
let ingredientPriceArray = [];

class Pizza {
    constructor(ingredients, calories, price) {
        this.ingredients = ingredients;
        this.calories = calories + 'kkal';
        this.price = price + '$';
    }

}

ingredientsItems.forEach(item => {
    item.addEventListener('click', e => {
        const clickedItem = e.target.closest('.ingredients__item');
        if (!clickedItem.classList.contains('checked')) {
            const ingredientName = clickedItem.children[1].children[0].innerHTML;
            const ingredientCal = clickedItem.children[1].children[1].innerHTML;
            const ingredientPrice = clickedItem.children[1].children[2].innerHTML;
            ingredientNamesArray.push(ingredientName);
            ingredientCaloriesArray.push(+ingredientCal);
            ingredientPriceArray.push(+ingredientPrice);
            let sumOfCalories = ingredientCaloriesArray.reduce((acc, num) => {
                return acc + num;
            });
            let sumOfPrice = ingredientPriceArray.reduce((acc, num) => {
                return acc + num;
            });
            let readyPizza = new Pizza(ingredientNamesArray, sumOfCalories, sumOfPrice);
            doughSelect.onselect = this.value;
            doughSelect.onchange = this.value;
            createBtn.addEventListener('click', () => {
                gatherData(readyPizza, doughSelect.value);
            });
        } else {
            ingredientNamesArray.pop();
            ingredientCaloriesArray.pop();
            ingredientPriceArray.pop();
            let sumOfCalories = ingredientCaloriesArray.reduce((acc, num) => {
                return acc + num;
            });
            let sumOfPrice = ingredientPriceArray.reduce((acc, num) => {
                return acc + num;
            });
            let readyPizza = new Pizza(ingredientNamesArray, sumOfCalories, sumOfPrice);
            doughSelect.onselect = this.value;
            doughSelect.onchange = this.value;
            createBtn.addEventListener('click', () => {
                gatherData(readyPizza, doughSelect.value);
            });
        }
    });
});


function gatherData(pizza, dough) {


    resultWindow.innerHTML =
        `
        <h2>Поздравляю вы сделали свою пиццу:</h2>
        <div>Тесто: <span>${dough}</span></div>
        <div>Начинка: <span>${pizza.ingredients}</span></div>
        <div>Калории: <span>${pizza.calories}</span></div>
        <div>С вас: <span>${pizza.price}</span></div>
    `
    resultWindow.classList.add('show');
}


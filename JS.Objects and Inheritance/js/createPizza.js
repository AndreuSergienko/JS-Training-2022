const ingredientsItems = document.querySelectorAll('.ingredients__item');
const createBtn = document.getElementById('create-button');
const doughSelect = document.getElementById('dough-select');
let ingredientNamesArray = [];
let ingredientCaloriesArray = [];
let ingredientPriceArray = [];

class Pizza {
    constructor(ingredients, calories, price) {
        this.ingredients = ingredients;
        this.calories = calories;
        this.price = price;
    }

}

class Empty extends Pizza {
    ingredients = [];
    calories = '';
    price = '';
}

ingredientsItems.forEach(item => {
    item.addEventListener('click', e => {
        const clickedItem = e.target.closest('.ingredients__item');
        let k1 = 10;
        let k2 = 15;
        if (!clickedItem.classList.contains('checked')) {
            const ingredientCurName = clickedItem.children[1].children[0].innerHTML;
            const ingredientCurCal = clickedItem.children[1].children[1].innerHTML;
            const ingredientCurPrice = clickedItem.children[1].children[2].innerHTML;
            ingredientNamesArray.push(ingredientCurName);
            ingredientCaloriesArray.push(+ingredientCurCal);
            ingredientPriceArray.push(+ingredientCurPrice);
            let sumOfCalories = ingredientCaloriesArray.reduce((acc, num) => {
                return acc + num;
            });
            let sumOfPrice = ingredientPriceArray.reduce((acc, num) => {
                return acc + num;
            });
            if (sumOfPrice < k1) {
                sumOfPrice += (sumOfPrice * 0.2)
            } else if (sumOfPrice > k1 && sumOfPrice < k2) {
                sumOfPrice += (sumOfPrice * 0.15)
            } else if (sumOfPrice > k2) {
                sumOfPrice += (sumOfPrice * 0.1)
            }
            let readyPizza = new Pizza(ingredientNamesArray, sumOfCalories, sumOfPrice);
            doughSelect.onselect = this.value;
            doughSelect.onchange = this.value;
            createBtn.addEventListener('click', () => {
                gatherShowData(readyPizza, doughSelect.value);
                if (readyPizza) {
                    sendPizza(readyPizza)
                };
            });
        } else {
            ingredientNamesArray.pop();
            ingredientCaloriesArray.pop();
            ingredientPriceArray.pop();
            if (ingredientCaloriesArray.length == 0 || ingredientPriceArray.length == 0) {
                let emptyPizza = new Empty();
                doughSelect.onselect = this.value;
                doughSelect.onchange = this.value;
                createBtn.addEventListener('click', () => {
                    gatherShowData(emptyPizza, doughSelect.value);
                    sendPizza(emptyPizza);
                });
            } else {
                let sumOfCalories = ingredientCaloriesArray.reduce((acc, num) => {
                    return acc + num;
                });
                let sumOfPrice = ingredientPriceArray.reduce((acc, num) => {
                    return acc + num;
                });
                if (sumOfPrice < k1) {
                    sumOfPrice += (sumOfPrice * 0.2)
                } else if (sumOfPrice > k1 && sumOfPrice < k2) {
                    sumOfPrice += (sumOfPrice * 0.15)
                } else if (sumOfPrice > k2) {
                    sumOfPrice += (sumOfPrice * 0.1)
                }
                let readyPizza = new Pizza(ingredientNamesArray, sumOfCalories, sumOfPrice);
                doughSelect.onselect = this.value;
                doughSelect.onchange = this.value;
                createBtn.addEventListener('click', () => {
                    gatherShowData(readyPizza, doughSelect.value);
                    if (readyPizza) {
                        sendPizza(readyPizza)
                    };
                });
            };
        };

    });
});

const sendPizza = async (pizza) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(pizza),
    });
}


function gatherShowData(pizza, dough) {

    resultWindow.innerHTML =
        `
        <h2>Поздравляю вы сделали свою пиццу:</h2>
        <div>Тесто: <span>${dough}</span></div>
        <div>Начинка: <span>${pizza.ingredients}</span></div>
        <div>Калории: <span>${pizza.calories ? pizza.calories + ' kkal' : ''}</span></div>
        <div>С вас: <span>${pizza.price ? pizza.price + ' $' : ''}</span></div>
    `
    resultWindow.classList.add('show');
}
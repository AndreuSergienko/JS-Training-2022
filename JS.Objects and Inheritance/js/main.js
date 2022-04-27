const ingredients = document.getElementById('ingredients');
const addBtn = document.querySelectorAll('.pizza__add-btn');
const pizzaDescription = document.querySelectorAll('.pizza__description');
const resultWindow = document.getElementById('result-window');

for (const btn of addBtn) {
    btn.addEventListener('click', (e) => {
        ingredientNamesArray = [];
        ingredientCaloriesArray = [];
        ingredientPriceArray = [];
        const currBtn = e.target.dataset.add;
        pizzaDescription.forEach(item => {
            const pizzaDescriptionData = item.dataset.description;
            if (currBtn == pizzaDescriptionData) {
                const pizzaDescriptionContent = item.innerHTML;
                resultWindow.innerHTML = `
                    <h2>Поздравляю вы заказали пиццу:</h2>
                    ${pizzaDescriptionContent}
                    <button type="button" class="order-button">Оформить заказ</button>
                `;
            }
        });
        resultWindow.classList.add('show');
    })
}

ingredients.addEventListener('click', e => {
    const ingredientItem = e.target.closest('.ingredients__item');
    ingredientItem.classList.toggle('checked');
    if (ingredientItem.classList.contains('checked')) {
        ingredientItem.children[0].checked = true;
    } else {
        ingredientItem.children[0].checked = false;
    }
})
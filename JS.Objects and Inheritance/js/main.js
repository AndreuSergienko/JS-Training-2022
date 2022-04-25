const ingredients = document.getElementById('ingredients');

ingredients.addEventListener('click', e => {
    const ingredientItem = e.target.closest('.ingredients__item');
    ingredientItem.classList.toggle('checked');
    if (ingredientItem.classList.contains('checked')) {
        ingredientItem.children[0].checked = true;
    }else {
        ingredientItem.children[0].checked = false;
    }
})
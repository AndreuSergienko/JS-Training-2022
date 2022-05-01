const ingredientsItems = document.querySelectorAll(".ingredients__item");
const createBtn = document.getElementById("create-button");
const doughSelect = document.getElementById("dough-select");

let readyPizza, sumOfPrice;

doughSelect.onchange = this.value;

class Pizza {
  constructor(ingredients, calories, price) {
    this.ingredients = [ingredients];
    this.calories = calories;
    this.price = price;
  }
}

ingredientsItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const clickedItem = e.target.closest(".ingredients__item");
    let ingredientCurName = clickedItem.children[1].children[0].innerHTML;
    let ingredientCurCal = clickedItem.children[1].children[1].innerHTML;
    let ingredientCurPrice = clickedItem.children[1].children[2].innerHTML;
    let k1 = 10;
    let k2 = 15;
    if (!clickedItem.classList.contains("checked")) {
      if (readyPizza == undefined) {
        sumOfPrice = +ingredientCurPrice;
        readyPizza = new Pizza(
          ingredientCurName,
          +ingredientCurCal,
          sumOfPrice
        );
      } else {
        readyPizza.ingredients.push(ingredientCurName);
        readyPizza.calories += +ingredientCurCal;
        readyPizza.price += +ingredientCurPrice;
        sumOfPrice = readyPizza.price;
        if (sumOfPrice < k1) {
          sumOfPrice += sumOfPrice * 0.2;
        } else if (sumOfPrice > k1 && sumOfPrice < k2) {
          sumOfPrice += sumOfPrice * 0.15;
        } else if (sumOfPrice > k2) {
          sumOfPrice += sumOfPrice * 0.1;
        }
      }
      createBtn.addEventListener("click", () => {
        gatherShowData(doughSelect.value, readyPizza, sumOfPrice);
        sendPizza(readyPizza);
      });
    } else {
      if (readyPizza.calories == 0 || readyPizza.price == 0) {
        readyPizza = new Pizza("", "", "");
      } else {
        readyPizza.ingredients.pop();
        readyPizza.calories -= +ingredientCurCal;
        readyPizza.price -= +ingredientCurPrice;
        sumOfPrice = readyPizza.price;
        if (sumOfPrice < k1) {
          sumOfPrice += sumOfPrice * 0.2;
        } else if (sumOfPrice > k1 && sumOfPrice < k2) {
          sumOfPrice += sumOfPrice * 0.15;
        } else if (sumOfPrice > k2) {
          sumOfPrice += sumOfPrice * 0.1;
        }
      }
      createBtn.addEventListener("click", () => {
        gatherShowData(doughSelect.value, readyPizza, sumOfPrice);
        sendPizza(readyPizza);
      });
    }
  });
});

const sendPizza = async (pizza) => {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(pizza),
  });
};

function gatherShowData(dough, pizza, sumOfPrice) {
  resultWindow.innerHTML = `
        <h2>Поздравляю вы сделали свою пиццу:</h2>
        <div>Тесто: <span>${dough}</span></div>
        <div>Начинка: <span>${pizza.ingredients}</span></div>
        <div>Калории: <span>${
          pizza.calories ? pizza.calories + " kkal" : ""
        }</span></div>
        <div>С вас: <span>${sumOfPrice ? sumOfPrice + " $" : ""}</span></div>
    `;
  resultWindow.classList.add("show");
}

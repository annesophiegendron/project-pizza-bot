const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

let orderQuantity;

const startOrder = (event) => {
  const currentCard = event.target.parentElement
  console.log(' current car', currentCard)
  const nextCard = currentCard.nextElementSibling
  // Hide the card1 - (toggle classname javascript)
  currentCard.classList.remove("active");
  currentCard.classList.add("hidden");
  console.log({ "nextcard": nextCard })
  // Show the card2
  nextCard.classList.remove("hidden");
  nextCard.classList.add("active");
};
// (search add event listener to multiple elements)
const nextButtons = document.querySelectorAll(".orderButton");

// add a listener to buttons
for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", startOrder);
}

// add a third button + new function to go back to the firstcard + new function for the previous button







const checkOrderName = (orderName) => {
  if (orderName === vegetarian || orderName === hawaiian || orderName === pepperoni) {
    orderQuantity = prompt(`How many of ${orderName} pizza do you want?`);
    console.log(orderQuantity);
    showConfirmation()
  } else {
    alert("This pizza is not on the menu. Please try again.");
    orderName = prompt("Enter the name of the pizza you want to order today.");
    checkOrderName()
  }
};

const totalCost = () => {
  return orderQuantity * pizzaPrice
};

const getCookingTime = () => {
  if (orderQuantity < 3) {
    return '10';
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return '15';
  } else {
    return '20';
  }
};

const showConfirmation = () => {
  document.getElementById("order-confirmation").innerHTML = (`Great! I'll get started on your ${orderName} pizza right away, it will cost ${totalCost()} kr. The pizzas will take ${getCookingTime()} minutes!`);
};


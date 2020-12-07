const buttonAdd = document.querySelector('#add-btn');
const buttonClear = document.querySelector('#clear-btn');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('#total-calories');
const list = document.querySelector('.list-group');
let total = 0;

foodName.value = '';
foodCalories.value = 0;

const Snackbar = document.querySelector('#snackbar');

function mySnackbar(message) {
    Snackbar.innerHTML = message;
    Snackbar.className = "show";
    setTimeout(function () { Snackbar.className = Snackbar.className.replace("show", ""); }, 3000);
}

buttonAdd.addEventListener('click', (event) => {
    if (foodName.value != '' && foodCalories.value != 0) {
        let mealName = foodName.value;
        let mealCalories = parseInt(foodCalories.value);

        console.log(mealName);
        console.log(mealCalories);

        total += mealCalories;
        totalSpan.innerHTML = total;

        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        let text = `Food: ${mealName}; Calories: ${mealCalories}`;
        listItem.appendChild(document.createTextNode(text));
        list.appendChild(listItem);

        console.log('Total: ' + total);

        event.preventDefault();
    }
    else {
        mySnackbar("Invalid Form fields");
    }
    
    if(foodCalories.value == 0) mySnackbar("Calories value must be above 0");
});

buttonClear.addEventListener('click', (event) => {
    foodName.value = '';
    foodCalories.value = 0;

    console.log('Form cleared successfully!');

    event.preventDefault();
});





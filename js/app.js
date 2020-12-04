const buttonAdd = document.querySelector('#add-btn');
const buttonClear = document.querySelector('#clear-btn');
const foodName = document.querySelector('#item-name');
const foodCalories = document.querySelector('#item-calories');
const totalSpan = document.querySelector('#total-calories');
const list = document.querySelector('.list-group');
let total = 0;

foodName.value = '';
foodCalories.value = 0;

buttonAdd.addEventListener('click', (event) => {
    if (foodName.value != '') {
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
        let html = `
        <div class="toast" data-autohide="false">
            <div class="toast-header">
            Toast Header
            </div>
            <div class="toast-body">
            Some text inside the toast body
            </div>
        </div>
        `;
        document.body.innerHTML += html;

        $('.toast').toast('show');
    }
});

buttonClear.addEventListener('click', (event) => {
    foodName.value = '';
    foodCalories.value = 0;

    console.log('Form cleared successfully!');

    event.preventDefault();
});





let counterValue = 0;
// const initialValue = document.getElementById('value');
const initialValue = document.querySelector('#value');
console.log(initialValue);
const btnCountMinus = document.querySelector('[data-action="decrement"]');
console.log(btnCountMinus);
const btnCountPlus = document.querySelector('[data-action="increment"]');
console.log(btnCountPlus);
btnCountMinus.addEventListener('click', function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
} );
btnCountPlus.addEventListener('click', function () {
    counterValue += 1;
    initialValue.textContent = counterValue;
} );
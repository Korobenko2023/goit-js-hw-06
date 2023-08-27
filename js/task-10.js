function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputAmountBoxes = document.querySelector('[type="number"]');
const btnCreateBoxes = document.querySelector('[data-create]');
btnCreateBoxes.addEventListener('click', getBoxes);
const btnDestroyBoxes = document.querySelector('[data-destroy]');
btnDestroyBoxes.addEventListener('click', destroyBoxes);
const boxesContainer = document.getElementById("boxes");


function getBoxes() {
 const amount = inputAmountBoxes.value;
 createBoxes(amount);
}
function createBoxes(amount) {
  let sizeBox = 30;
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    sizeBox += 10;
    boxesArray.push(box);
  }
  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxesArray);
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyElement = document.body;
changeColorBtn.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
})


// 
// const changeColorBtn = document.querySelector('.change-color');
// const colorSpan = document.querySelector('.color');
// const bodyElement = document.body;
// const handlerColor = () => {
//   const randomColor = getRandomHexColor();
//   bodyElement.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// }
// changeColorBtn.addEventListener('click', handlerColor);


// const changeColorBtn = document.querySelector('.change-color');
// const colorSpan = document.querySelector('.color');
// const bodyElement = document.body;
// function handlerColor() {
//   const randomColor = getRandomHexColor();
//   bodyElement.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// }
// changeColorBtn.addEventListener('click', handlerColor);
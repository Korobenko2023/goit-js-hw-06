// const textInput = document.querySelector('#name-input');
// console.log(textInput);
// const textOutput = document.querySelector('#name-output');
// console.log(textOutput);
// textInput.addEventListener('input', (event) => {
//    textOutput.textContent = event.currentTarget.value.trim();
//   });

const textInput = document.querySelector('#name-input');
console.log(textInput);
const textOutput = document.querySelector('#name-output');
console.log(textOutput);
textInput.addEventListener('input', () => {
  const inputValue = textInput.value.trim();
 textOutput.textContent = inputValue;
 if (inputValue === '') {
   textOutput.textContent = 'Anonymous';
}});


//  const textInput = document.querySelector('#name-input');
//  console.log(textInput);
//  const textOutput = document.querySelector('#name-output');
//  console.log(textOutput);
//  textInput.addEventListener('input', () => {
//     const inputValue = textInput.value.trim();
//     if (inputValue === '') {
//         textOutput.textContent = 'Anonymous';
//     } else { 
//         textOutput.textContent = inputValue;
//     }
//   });
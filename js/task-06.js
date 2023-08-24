const textInput = document.getElementById('validation-input');
console.log(textInput);

const handler = () => {
    const valueInput = textInput.value.trim();
       if (valueInput.length === 6) {
        textInput.classList.remove('invalid');    
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');    
        textInput.classList.add('invalid');
    }
};
textInput.addEventListener('blur', handler);
// const tlacitkoElement = document.querySelector('#button-order');

// tlacitkoElement.addEventListener('click', () => {
//     tlacitkoElement.textContent = 'Objednáno';
// });


// cvičení Kontrola dostupnosti
const button = document.querySelector('#button-order');
setTimeout(() => {
    button.textContent = 'Objednat';
    button.disabled = false;
}, 8000);

button.addEventListener('click', () => {
    button.textContent = 'Objednáno';
})
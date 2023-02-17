const quantityNumber = document.querySelector('.quantity__num'),
    quantityMinus = document.querySelector('.quantity__minus'),
    quantityPlus = document.querySelector('.quantity__plus');

let quantityCounter = 1;

quantityPlus.addEventListener('click', function () {
    if (quantityCounter < 10) {
        quantityCounter++;
        quantityNumber.innerText = quantityCounter;
    }
})

quantityMinus.addEventListener('click', function () {
    if (quantityCounter > 1) {
        quantityCounter--;
        quantityNumber.innerText = quantityCounter;
    }
})
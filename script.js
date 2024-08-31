// кастомный чекбокс измeняeт input недоступным для правки

const checkbox = document.querySelectorAll('.setPrice input[type="checkbox"]');
const priceInput = document.querySelectorAll('.offer__price')

checkbox.forEach((elem, i) => {
    elem.addEventListener('change', () => {
        if(checkbox[i].checked) {
            priceInput[i].disabled = 'true';
            priceInput[i].value = '';
            priceInput[i].style.background = '#b3c8d1';
            priceInput[i].style.borderColor = '#b3c8d1';
        }
        else {
            priceInput[i].removeAttribute('disabled');
            priceInput[i].style.background = '#fff';
            priceInput[i].style.borderColor = '#0297d4';
        }
    })
});


// переключение номеров страниц (страниц нет)

const cardPageNum = document.querySelectorAll('.card__page__num')
const arrowPage = document.querySelector('.arrow')

cardPageNum.forEach((elem) => {
    elem.addEventListener('click', () => {
        const activeElem = document.querySelector('.active__page__num');
        activeElem.classList.remove('active__page__num');
        elem.classList.add('active__page__num')
    })
})



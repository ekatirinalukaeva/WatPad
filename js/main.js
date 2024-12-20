const swiper = new Swiper(".mySwiper", {

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

const accardionBtn = document.querySelectorAll('.accardion__btn');
const accardeonContent = document.querySelectorAll('.accardeon__content');
const accardeonWrapper = document.querySelectorAll('.accardeon__wrapper');

function remove() {
    accardionBtn.forEach(item => {
        item.classList.remove('accardion__btn--active');
    })
    accardeonContent.forEach(item => {
        item.classList.remove('accardeon__content--visible');
    })
}

accardeonWrapper.forEach((item, j) => {
    item.addEventListener('click', (e) => {
        accardionBtn[j].classList.toggle('accardion__btn--active');
        if (accardionBtn[j].classList.contains('accardion__btn--active')) {
            accardeonContent[j].classList.add('accardeon__content--visible', 'fade')
        }
        else {
            accardeonContent[j].classList.remove('accardeon__content--visible')
        }

    });
});
remove();




const anchorAbility = document.querySelector('[data-anchor-ability]');
const anchorServices = document.querySelector('[data-anchor-services]')
const anchorFAQ = document.querySelector('[data-anchor-faq]');
const katya = document.querySelector('.katya');
const end = document.querySelector('[data-end]')

katya.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:"smooth",
        top:0,
        left:0
    })
});
end.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior:"smooth",
        top:4700,
        left:0
    })
})


anchorAbility.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior: 'smooth',
        top: 674,
        left: 0
    });
})
anchorServices.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior: 'smooth',
        top: 1665,
        left: 0
    });
})
anchorFAQ.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior: 'smooth',
        top: 2630,
        left: 0
    });
});
anchorFAQ.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        behavior: 'smooth',
        top: 2630,
        left: 0
    });
})


const formBtn = document.querySelector('.form__btn');
const hideText = document.querySelector('.hide__text');
const formInputs = document.querySelectorAll('.form__input');
const dataName = document.querySelector('[data-name]');
const dataEmail = document.querySelector('[data-email]');
const dataText = document.querySelector('[data-text]')


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;



function onInput() {
    if (isEmailValid(dataEmail.value)) {
        dataEmail.style.borderColor = '#00fa9a';
        return true
        
    } else {
        dataEmail.style.borderColor = 'red';
        return false
    }
}


function onInput2() {
    if (isNamelValid(dataName.value)) {
        dataName.style.borderColor = '#00fa9a';
        return true
        
    } else {
        dataName.style.borderColor = 'red';
        return false
    }
}


function onInput3() {
    if (isTextlValid(dataText.value)) {
        dataText.style.borderColor = '#00fa9a';
        return true
        
    } else {
        dataText.style.borderColor = 'red';
        return false
    }
}


dataEmail.addEventListener('input', onInput);
dataName.addEventListener('input', onInput2);
dataText.addEventListener('input', onInput3);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}
function isTextlValid(value) {
    return value
}
function isNamelValid(value) {
    return value
}
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (dataName.value !== '' && dataEmail.value !== '' && dataText.value !== '' && onInput() == true) {
        formBtn.classList.add('hide')
        hideText.classList.add('visible');
    }
});



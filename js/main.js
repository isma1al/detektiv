// const burgerBtn = document.querySelector('.burger');
// const closeBtn = document.querySelector('.close');
// const menu = document.querySelector('.menu__list');

// burgerBtn.addEventListener('click', () =>{
//     menu.classList.add('menu__list--active');
// })

// closeBtn.addEventListener('click', () =>{
//     menu.classList.remove('menu__list--active');
// })

let inputs = document.querySelectorAll('input[type="tel"]')

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(inputs)

console.log(inputs);

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener('click', (e) =>{
        e.preventDefault();

        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
    })
}
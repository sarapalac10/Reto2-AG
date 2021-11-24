//Carrusel de imágenes

//Para que sea un carrusel infinito, la img 6 es a la vez la 0.

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

//Poner el último elemento de primero para dar la vuelta al final
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    } , 500) ;
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});

function Prev() {
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
     slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    } , 500) ;
}

//Darle click a las miniaturas

let cantidadMiniaturas = document.querySelectorAll(".cta")
console.log(cantidadMiniaturas);

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta1")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e) {
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener('click',function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },500)
});

window.addEventListener("click", function(e) {
    // console.log(e.target)
    if (e.target == modalC) {
        modal.classList.toggle("modal-close");

        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },500)
    }
});
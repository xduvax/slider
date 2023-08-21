
const botones = document.querySelectorAll("[data-carrusel-boton]");
const slideInterval = 3000;
let slideTimer;

botones.forEach(boton =>{
    boton.addEventListener("click", () =>{

        stopAutoSlide();
        const offset = boton.dataset.carruselBoton === "next" ? 1 : -1;
        const slides = boton
            .closest("[data-carrusel]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        menuSlide(newIndex);
        startAutoSlide();
        
    })
})

const botonesMenu = document.querySelectorAll('.contenedor-botones .boton-menu-slide');

botonesMenu.forEach((boton, indice) => {
    boton.addEventListener('click', () => {

        let slider = document.querySelector("[data-slides]");
        const activeSlide = document.querySelector("[data-active]");
        
        delete activeSlide.dataset.active;
        slider.children[indice].dataset.active = true;
        menuSlide(indice);
    });
});

function menuSlide(newIndex){

    let menuBotones = document.querySelector("[data-menu-slider]");
    let activeBoton = menuBotones.querySelector("[data-boton-active]");
    delete activeBoton.dataset.botonActive;
    menuBotones.children[newIndex].dataset.botonActive = true;
    
}

function autoSlide() {
    const nextButton = document.querySelector("[data-carrusel-boton='next']");
    nextButton.click();
}

function startAutoSlide() {
    slideTimer = setInterval(autoSlide, slideInterval);
}

function stopAutoSlide() {
    clearInterval(slideTimer);
}

startAutoSlide();

//Despliegue de menú hamburguesa ----------

/*
function openMenu() {
    const menu= document.querySelectorAll("menu");
    menu.classList.add("is-active");
}

const elementosAbrirMenu = document.querySelectorAll("open-menu");

if(elementosAbrirMenu) {
    for(let i=0; i<elementosAbrirMenu.length; i++ ){
        elementosAbrirMenu[i].addEventListener("click", openMenu);
    }
}

//-------

function closeMenu(){
    const menu= document.querySelectorAll("menu");
    menu.classList.remove("is-active");
}


const elementosCerrarMenu = document.querySelectorAll("close-menu");
if(elementosCerrarMenu) {
    for(let i=0; i < elementosCerrarMenu.length; i++){
        elementosCerrarMenu[i].addEventListener("click", closeMenu);
    }


}

*/


function openMenu() {
    const menu= document.getElementById("menu");
    const hamburguer = document.querySelector('.icono-menu');
    hamburguer.classList.add("is-active");
    menu.classList.add("is-active");
}

const elementosAbrirMenu = document.getElementsByClassName("open-menu");

if(elementosAbrirMenu) {
    for(let i=0; i<elementosAbrirMenu.length; i++ ){
        elementosAbrirMenu[i].addEventListener("click", openMenu);
    }
}

//-------

function closeMenu(){
    const menu= document.getElementById("menu");
    const hamburguer = document.querySelector('.icono-menu');
    hamburguer.classList.remove("is-active");
    menu.classList.remove("is-active");
}


const elementosCerrarMenu = document.getElementsByClassName("close-menu");
if(elementosCerrarMenu) {
    for(let i=0; i < elementosCerrarMenu.length; i++){
        elementosCerrarMenu[i].addEventListener("click", closeMenu);
    }


}

//Llamado de APIs para Projects --------------


async function callApi() {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const finalRes = await res.jason();
    document.querySelector("img").setAttribute("src",finalRes[3].image);
}

callApi()


//Validación de suscripción --------------


function validateSubscription() {

    const emailHomeValue = document.querySelector(".email-envelope").value
    
    if (!emailHomeValue.includes("@")) {
        return alert("Chequear la información escrita")
    }
    else {
    return alert("Su email ha sido enviado")
    }
}
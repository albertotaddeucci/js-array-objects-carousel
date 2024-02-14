
//array objcets
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
];



//buttons
const buttonPlay = document.getElementById("button-start");
const buttonEnd = document.getElementById("button-end");
const buttonSwitch = document.getElementById("button-switch");

//variabile se in autoplay
let onPlay = true;

//variabile se scorrimento ascendente
let upPlay = true;

//button start
buttonPlay.addEventListener("click",function(){
    if (!onPlay){
        autoPlay = setInterval(arrowClick,3000);
        onPlay = true;
    }    
});

//button end
buttonEnd.addEventListener("click",function(){
    clearInterval(autoPlay);
    clearInterval(autoSwitch);
    onPlay = false;
    
});


//button switch direction
let autoSwitch;
buttonSwitch.addEventListener("click",function(){    
    if (upPlay == true){
        clearInterval(autoPlay);
        autoSwitch = setInterval(arrowSwitch,3000);
        upPlay = false;        
    } else {
        clearInterval(autoSwitch);
        autoPlay = setInterval(arrowClick,3000)
        upPlay = true
    }
    
})

// Autoplay
let autoPlay = setInterval(arrowClick,3000);


// costanti per lo slider
const sliderElement = document.getElementById("slider");
const sideSliderElement = document.getElementById("side-slider");
const captionSliderElement = document.getElementById("image-text");


//ciclo per inserire img 
images.forEach(currentImage => {
    const sideElement = document.createElement("div");
    const captionElement = document.createElement("div");
    const titleElement = document.createElement("h2");
    const textElement = document.createElement("p");
    
    for(let key in currentImage){
        
        if (key == "image"){

            //immagini in slideshow principale
            sliderElement.innerHTML += `<img src="./${currentImage.image}">`;
            
            //immagini in side-slider
            sideElement.innerHTML += `<img src="./${currentImage.image}">`;
            sideElement.style = `height: calc(100%/${images.length});`
            
        } else if (key == "title") {
            
            titleElement.innerHTML += `${currentImage.title}`;
            captionElement.append(titleElement);
            
        } else {
            textElement.innerHTML += `${currentImage.text}`;
            captionElement.append(textElement);
            
        }
    }
    
    //aggiungo in pagina elementi creati
    sideSliderElement.append(sideElement)           
    captionSliderElement.append(captionElement);


})

//aggiunta classi active agli elementi
document.querySelector("#slider img:nth-of-type(1)").className = "active";
document.querySelector("#side-slider div:nth-of-type(1)").className = "active";
document.querySelector("#image-text div:nth-of-type(1)").className = "active";

//contatore slider immagini
let slideNumber = 1;



// -  QUANDO premo la freccia SU
document.querySelector("#up-arrow").addEventListener("click", function() {

    
    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.remove("active");        
        
        
        // - aumento il contatore di 1
        slideNumber++;
        
        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.add("active");        


    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.add("active");

    }

        
});

// -  QUANDO premo la freccia giù
document.querySelector("#down-arrow").addEventListener("click", function() {



    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.remove("active");


        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.add("active");


    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#side-slider div:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text div:nth-of-type(${slideNumber})`).classList.add("active");

    }
    


});





//funzione per click freccia su
function arrowClick(){

    document.querySelector("#up-arrow").click()

}

//funzione per click freccia giù
function arrowSwitch(){

    document.querySelector("#down-arrow").click()

}


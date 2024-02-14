
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
    }
];



// bersagliamo lo slider
const sliderElement = document.getElementById("slider");
const sideSliderElement = document.getElementById("side-slider");
const captionSliderElement = document.getElementById("image-text");


//ciclo per inserire img 
images.forEach(currentImage => {

    
    for(let key in currentImage){
        
        if (key == "image"){
            sliderElement.innerHTML += `<img src="./${currentImage.image}">`;
            
            const sideElement = document.createElement("div");
            sideElement.innerHTML += `<img src="./${currentImage.image}">`;
            sideSliderElement.append(sideElement)           

        } else if (key == "title") {

            const titleElement = document.createElement("h2");
            titleElement.innerHTML += `${currentImage.title}`;
            captionSliderElement.append(titleElement);

        } else {
            const textElement = document.createElement("p");
            textElement.innerHTML += `${currentImage.text}`;
            captionSliderElement.append(textElement);

        }
    }
})


document.querySelector("#slider img:nth-of-type(1)").className = "active";
document.querySelector("#image-text h2:nth-of-type(1)").className = "active";
document.querySelector("#image-text p:nth-of-type(1)").className = "active";




/*
-  salvo un contatore della slide
-  QUANDO premo la freccia SU
    - prendo l'immagine attuale e le rimuovo la classe "active"  
    - aumento il contatore di 1
    - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
*/


// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#up-arrow").addEventListener("click", function() {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.remove("active");


        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.add("active");


        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.remove("active");


        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.add("active");


    }

        
});


document.querySelector("#down-arrow").addEventListener("click", function() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.remove("active");



        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.add("active");


        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.remove("active");


        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text h2:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#image-text p:nth-of-type(${slideNumber})`).classList.add("active");


    }
    


});
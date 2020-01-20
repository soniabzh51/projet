var slide = ["public/images/ambiance_pub.jpg", "public/images/pinte_fonds_noir.jpg", "public/images/cheers.jpg", "public/images/tireuse.jpg"];
var i = 0; 
function ChangeSlide(sens) {     
    i = i + sens;
    if (i < 0)         
    i = slide.length - 1; 

    if (i > slide.length - 1)        
    i = 0; 

document.getElementById("slide2").src = slide[i];
}
/*
let slide = ["publique/image/slider-index/patate.jpg", "publique/image/slider-index/poulet.jpg",
"publique/image/slider-index/sandwich.jpg", "publique/image/slider-index/saucisse.jpg",
"publique/image/slider-index/pizza.jpg", "publique/image/slider-index/plat.jpg"];

let i = 0;

setInterval(function () {
document.getElementById('slide2').src = slide[i];
//on incrémente la valeur i de 1
i++;
//si i est égale 6 alors i retourne a 0
if (i == 6) i = 0;
}, 3000); //3000 = 3 sec 
//fonction déclanché au clic d'une flèche 
function ChangeSlide(sens) {
//on concatenne i par le paramtètre (sens)
i = i + sens;
//on soustrait 1 a i
if (i < 0)
    i = slide.length - 1;
//on ajoute 1 a i
else if (i > slide.length - 1)
    i = 0;
document.getElementById('slide2').src = slide[i];
}
*/
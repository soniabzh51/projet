var slide = ["images1920/ambiance_pub.jpg", "images1920/pinte_fonds_noir.jpg", "images1920/cheers.jpg", "images1920/tireuse.jpg"];
var i = 0; 
function ChangeSlide(sens) {     
    i = i + sens;
    if (i < 0)         
    i = slide.length - 1; 

    if (i > slide.length - 1)        
    i = 0; 

document.getElementById("slide2").src = slide[i];
}
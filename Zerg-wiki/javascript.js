
// Function to rotate sigil
var angle = 0;
//Rotates the img 15 degrees
function sigilspin(){
    angle += 45;
    document.querySelector("img.sigil").style.transform = "rotate(+" + angle +"deg)"
}
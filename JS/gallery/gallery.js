/*Name this external file gallery.js*/

function upDate(previewPic){
    var img = document.getElementById("image");
    var src= previewPic.src;
    img.style.backgroundColor = "red"
    img.style.backgroundImage = "URL("+src+")";
    console.log(src);
    img.innerHTML=previewPic.alt;
     
}

function unDo(){
    var img = document.getElementById("image");
    img.style.backgroundImage = "URL('')";
    img.style.backgroundColor = "#8e68ff";   
    img.innerHTML = "Hover over an image below to display here."; 
}
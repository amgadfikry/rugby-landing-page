//open and close menu
const menuIcon = document.querySelector(".icon-menu");
const closeIcon = document.querySelector(".icon-close");
const menu = document.querySelector(".links");

menuIcon.addEventListener("click",function(){
    menu.classList.toggle("inactive")
})
closeIcon.addEventListener("click",function(){
    menu.classList.toggle("inactive")
})

//auto scrolling photos in main section
const photos = document.querySelectorAll(".main-photos img");
const dots = document.querySelectorAll(".dot");
const photoLength = photos.length
let start = 0;

setInterval(function(){
    photos.forEach(el=>{
        el.classList.remove("active-photo");
    })
    dots.forEach(el=>{
        el.classList.remove("active-dot")
    })
    if(start == photoLength -1){
        start = 0;
        photos[start].classList.add("active-photo");
        dots[start].classList.add("active-dot");
    }
    else{
        start +=1;
        photos[start].classList.add("active-photo");
        dots[start].classList.add("active-dot");
    }
}
    ,3000)


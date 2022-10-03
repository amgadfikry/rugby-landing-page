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
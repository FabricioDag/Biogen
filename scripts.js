let hamburguerBtn = document.querySelector(".hamburguerBtn")
let menu = document.querySelector(".mobileNav")

hamburguerBtn.addEventListener("click", function(){
    menu.classList.toggle("active")
    hamburguerBtn.classList.toggle("close")
})
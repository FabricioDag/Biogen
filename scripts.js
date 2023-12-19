let hamburguerBtn = document.querySelector(".hamburguerBtn")
let menu = document.querySelector(".mobileNav")

hamburguerBtn.addEventListener("click", function(){
    menu.classList.toggle("active")
    hamburguerBtn.classList.toggle("close")
})

window.addEventListener('scroll', function(){
    var menus = document.querySelector('#menus');
    menus.classList.toggle('ativo', window.scrollY > 0);
    console.log('jaahah')
  })
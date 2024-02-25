let Burger = document.querySelector(".burger")
let navbar = document.querySelector(".navbar")
let navList = document.querySelector(".nav-list")
let rightNav = document.querySelector(".right-nav")


Burger.addEventListener('click',() => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp')
})
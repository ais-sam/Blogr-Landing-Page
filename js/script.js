// Header Burger
const burger = document.querySelector('.nav-burger')
const mobileMenu = document.querySelector('.nav__mobile ')


burger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active')
})


// Header menu

const headerLinks = document.querySelectorAll('.nav__link a')

headerLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        headerLinks.forEach(lnk=>link==lnk? link.classList.toggle('active') :lnk.classList.remove('active'))
    })
})


// mobile drop down menu
const mobileLinks = document.querySelectorAll('.nav__mobile-link')
mobileLinks.forEach(link=>{
    link.addEventListener('click',(lnk)=>{
        lnk.classList.add('active')
        // mobileLinks.forEach(lnk=>link==lnk? link.classList.add('active') :lnk.classList.remove('active'))

    })
})

// Hide drop down menu and navbar submenu when scrolling

let lastScrollY = window.scrollY

window.addEventListener('scroll',()=>{
    if (window.scrollY > 0) {
        // hide drop down menu
        mobileMenu.classList.remove('active');
        burger.classList.remove('active')
        // hide submenu
        headerLinks.forEach(link=>link.classList.remove('active'))

    }
})

// AOS JS
AOS.init({
    easing: 'ease',
    duration:1000,
    once : 'true',
});



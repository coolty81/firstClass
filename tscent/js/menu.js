const menu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');

menuIcon.addEventListener('click', () => {
    if(!menu.className.includes('isOpen')) menu.classList.add('isOpen');
    else menu.classList.remove('isOpen');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('isOpen');
});

const header_mainmenu = document.querySelectorAll('header .main-menu');
header_mainmenu.forEach((menu) => {
    menu.addEventListener('mouseover', () => {
        menu.classList.add('isOpen');
    });
});

header_mainmenu.forEach((menu) => {
    menu.addEventListener('mouseout', () => {
        menu.classList.remove('isOpen');
    });
});

const mo_mainmenu = document.querySelectorAll('#mobile-menu .main-menu');
mo_mainmenu.forEach((menu) => {
    menu.addEventListener('click', () => {
        if(!menu.className.includes('isOpen')) {
            menu.classList.add('isOpen');
        }
        else {
            menu.classList.remove('isOpen');
        }
    });
});

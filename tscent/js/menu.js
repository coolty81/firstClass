const menu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');

menuIcon.addEventListener('click', () => {
    if(!menu.className.includes('isOpen')) menu.className = 'isOpen';
    else menu.className = '';
});

closeMenu.addEventListener('click', () => {
    menu.className = '';
});

const header_mainmenu = document.querySelectorAll('header .main-menu');
header_mainmenu.forEach((menu) => {
    menu.addEventListener('mouseover', () => {
        menu.className = 'main-menu isOpen';
    });
});

header_mainmenu.forEach((menu) => {
    menu.addEventListener('mouseout', () => {
        menu.className = 'main-menu';
    });
});

const mo_mainmenu = document.querySelectorAll('#mobile-menu .main-menu');
mo_mainmenu.forEach((menu) => {
    menu.addEventListener('click', () => {
        if(!menu.className.includes('isOpen')) {
            menu.className = 'main-menu isOpen';
        }
        else {
            menu.className = 'main-menu';
        }
    });
});

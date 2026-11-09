const menu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');

menuIcon.addEventListener('click', () => {
    if(menu.style.transform === 'translateX(100%)') menu.style.transform = 'translateX(0%)';
    else menu.style.transform = 'translateX(100%)';
});

closeMenu.addEventListener('click', () => {
menu.style.transform = 'translateX(100%)';
});

mobileSearchPanel.addEventListener('click', () => {
searchMenu.style.display = 'flex';
document.form.search.focus();
menu.style.transform = 'translateX(100%)';
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        searchMenu.style.display = 'none';
        searchPanel.style.color = '#666666';
        menu.style.transform = 'translateX(100%)';
    }
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

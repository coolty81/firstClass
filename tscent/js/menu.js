const searchMenu = document.querySelector('#search');
const searchPanel = document.querySelector('#searchPanel');
const mobileSearchPanel = document.querySelector('#mobile-searchPanel');
const menu = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('#menuIcon');
const closeMenu = document.querySelector('#closeMenu');

searchPanel.addEventListener('click', () => {
if(searchMenu.style.display == 'none') { 
    searchMenu.style.display = 'flex';
    searchPanel.style.color = '#B37A56';
    document.form.search.focus();
}
else {
    searchMenu.style.display = 'none';
    searchPanel.style.color = '#666666';
}
});

document.querySelector("#closeSearch").addEventListener("click", () => {
    searchMenu.style.display = 'none';
    searchPanel.style.color = '#666666';
});

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

const header_mainmenu = document.querySelectorAll('header .main-menu');
header_mainmenu.forEach((menu) => {
    menu.addEventListener('mouseover', () => {
        menu.children[1].style.display = 'flex';
    });
});

header_mainmenu.forEach((menu) => {
    menu.addEventListener('mouseout', () => {
        menu.children[1].style.display = 'none';
    });
});

const mo_mainmenu = document.querySelectorAll('#mobile-menu .main-menu');
mo_mainmenu.forEach((menu) => {
    menu.addEventListener('click', () => {
        if(menu.children[1].style.display == 'flex') {
            menu.children[1].style.display = 'none';
            menu.children[0].innerText = '▶ '+menu.children[0].innerText.split(' ')[1];
        }
        else {
            menu.children[1].style.display = 'flex';
            menu.children[0].innerText = '▼ '+menu.children[0].innerText.split(' ')[1];
        }
    });
});

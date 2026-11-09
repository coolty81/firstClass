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

const mo_mainmenu = document.querySelectorAll('#moMenu .main-menu');
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

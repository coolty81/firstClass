const searchPanel = document.querySelector("#search");
const searchToggle = document.querySelector("#showPanel");
const mobileSearchToggle = document.querySelector("#mobile-showPanel");
const searchClose = document.querySelector("#closeSearch");
const mobileMenu = document.querySelector("#mobile-menu");
const openMenuButton = document.querySelector("#openMenu");
const closeMenuButton = document.querySelector("#closeMenu");

function setSearch(open) {
    if (!searchPanel || !searchToggle) return;

    searchPanel.hidden = !open;
    searchToggle.setAttribute("aria-expanded", String(open));
    searchToggle.style.color = open ? "var(--accent-warm)" : "var(--text-secondary)";

    if (open) {
        document.querySelector("#site-search")?.focus();
    }
}

function setMobileMenu(open) {
    if (!mobileMenu || !openMenuButton) return;

    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    openMenuButton.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
}

searchToggle?.addEventListener("click", () => {
    setSearch(searchPanel.hidden);
});

mobileSearchToggle?.addEventListener("click", () => {
    setSearch(searchPanel.hidden);
    setMobileMenu(false);
});

searchClose?.addEventListener("click", () => setSearch(false));
openMenuButton?.addEventListener("click", (event) => {
    event.preventDefault();
    setMobileMenu(true);
});
closeMenuButton?.addEventListener("click", () => setMobileMenu(false));

mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMobileMenu(false));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setSearch(false);
        setMobileMenu(false);
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

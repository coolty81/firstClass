const searchPanel = document.querySelector("#search");
const searchToggle = document.querySelector("#showPanel");
const mobileSearchToggle = document.querySelector("#moblie-showPanel");
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

searchToggle?.addEventListener("click", () => {
    setSearch(searchPanel.hidden);
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

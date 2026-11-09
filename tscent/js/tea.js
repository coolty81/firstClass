const searchPanel = document.querySelector("#search");
const searchToggle = document.querySelector("#searchPanel");
const searchClose = document.querySelector("#closeSearch");
const mobileSearchToggle = document.querySelector("#mobile-searchPanel");
const menuPanel = document.querySelector("#moMenu");
const menuOpen = document.querySelector("#menuIcon");
const menuClose = document.querySelector("#closeMenu");
const purchaseNotice = document.querySelector("#purchase-notice");

function toggleSearch(forceOpen) {
    if (!searchPanel) return;
    const open = typeof forceOpen === "boolean"
        ? forceOpen
        : searchPanel.style.display === "none";

    searchPanel.style.display = open ? "flex" : "none";
    searchToggle?.setAttribute("aria-expanded", String(open));
    mobileSearchToggle?.setAttribute("aria-expanded", String(open));

    if (open) document.querySelector("#tea-search")?.focus();
}

function toggleMenu(open) {
    if (!menuPanel) return;
    menuPanel.style.transform = open ? "translateX(0%)" : "translateX(100%)";
    menuPanel.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
}

searchToggle?.addEventListener("click", () => toggleSearch());
searchClose?.addEventListener("click", () => toggleSearch(false));
mobileSearchToggle?.addEventListener("click", () => {
    toggleMenu(false);
    toggleSearch(true);
});

menuOpen?.addEventListener("click", () => toggleMenu(true));
menuClose?.addEventListener("click", () => toggleMenu(false));

menuPanel?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
});

document.querySelectorAll(".tea-buy-button").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.product;
        if (purchaseNotice) {
            purchaseNotice.textContent = productName + " 상품의 상세·구매 페이지는 내부 페이지 제작 후 연결할 예정입니다.";
            purchaseNotice.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    });
});

document.querySelectorAll(".tea-series-tabs a").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tea-series-tabs a").forEach(item => item.classList.remove("is-active"));
        tab.classList.add("is-active");
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        toggleSearch(false);
        toggleMenu(false);
    }
});

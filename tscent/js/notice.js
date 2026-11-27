const searchPanel = document.querySelector('#searchPanel');
const mobileSearchPanel = document.querySelector('#mobile-searchPanel');
const search = document.querySelector('#search');
const closeSearch = document.querySelector('#closeSearch');
const searchInput = document.querySelector('#notice-search');

function setSearchOpen(isOpen) {
    if (!search) return;
    search.style.display = isOpen ? 'flex' : 'none';
    searchPanel?.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) searchInput?.focus();
}

searchPanel?.addEventListener('click', () => {
    setSearchOpen(search.style.display !== 'flex');
});
mobileSearchPanel?.addEventListener('click', () => {
    setSearchOpen(true);
    document.querySelector('#mobile-menu')?.classList.remove('isOpen');
});
closeSearch?.addEventListener('click', () => setSearchOpen(false));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setSearchOpen(false);
});

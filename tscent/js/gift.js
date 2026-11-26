const searchPanel = document.querySelector('#searchPanel');
const mobileSearchPanel = document.querySelector('#mobile-searchPanel');
const search = document.querySelector('#search');
const closeSearch = document.querySelector('#closeSearch');

function setSearchOpen(isOpen) {
    if (!search) return;
    search.style.display = isOpen ? 'flex' : 'none';
    searchPanel?.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) document.querySelector('#gift-search')?.focus();
}

searchPanel?.addEventListener('click', () => {
    setSearchOpen(search.style.display !== 'flex');
});
mobileSearchPanel?.addEventListener('click', () => setSearchOpen(true));
closeSearch?.addEventListener('click', () => setSearchOpen(false));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setSearchOpen(false);
});

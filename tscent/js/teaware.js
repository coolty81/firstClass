const searchPanel = document.querySelector('#searchPanel');
const searchPanelMobile = document.querySelector('#mobile-searchPanel');
const search = document.querySelector('#search');
const closeSearch = document.querySelector('#closeSearch');

function toggleSearch(open) {
    if (!search) return;
    search.style.display = open ? 'flex' : 'none';
    searchPanel?.setAttribute('aria-expanded', String(open));
    if (open) document.querySelector('#teaware-search')?.focus();
}

searchPanel?.addEventListener('click', () => {
    toggleSearch(search.style.display === 'none' || !search.style.display);
});
searchPanelMobile?.addEventListener('click', () => toggleSearch(true));
closeSearch?.addEventListener('click', () => toggleSearch(false));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleSearch(false);
});

const swiper = new Swiper('.hero-sec > .swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.visual .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '" aria-label="' + (index + 1) + '번째 배너"></span>';
        },
    },

    autoplay: {
        delay: 5000,
    },

    navigation: {
        nextEl: '.visual .swiper-button-next',
        prevEl: '.visual .swiper-button-prev',
    },
});

const searchMenu = document.querySelector('#search');
const searchPanel = document.querySelector('#searchPanel');
const mobileSearchPanel = document.querySelector('#mobile-searchPanel');

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

mobileSearchPanel.addEventListener('click', () => {
    searchMenu.style.display = 'flex';
    document.form.search.focus();
    menu.style.transform = 'translateX(100%)';
});

document.querySelector("#closeSearch").addEventListener("click", () => {
    searchMenu.style.display = 'none';
    searchPanel.style.color = '#666666';
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        searchMenu.style.display = 'none';
        searchPanel.style.color = '#666666';
        menu.style.transform = 'translateX(100%)';
    }
});

let selectedTab = 0;
function changeTab(tabNo) {
    const image = document.querySelector('.tea-image > img');
    const menu = document.querySelector('.category-tabs');
    const h3 = document.querySelector('.tea-copy > h3');
    const p = document.querySelector('.tea-copy > p');
    const a = document.querySelector('.tea-copy > a');
    menu.children[selectedTab].className = '';
    menu.children[tabNo].className = 'is-active';
    selectedTab = tabNo;
    if(tabNo == 0) {
        image.src = 'img/visual03(fix).png';
        image.alt = '티센트 잎차 이미지';
        h3.innerText = '잎차 · 葉茶';
        p.innerText = '맑고 섬세한 향과 부드러운 맛이 조화된 티센트의 잎차를 만나보세요.\n아리산, 운남, 하동, 제주 등 각 지역의 개성과 떼루아를 큐레이션합니다.';
        a.innerText = '잎차 모두 보기 ↗';
    }
    
    else if(tabNo == 1) {
        image.src = 'img/visual01(trim).png';
        image.alt = '테이블 위의 찻잔 이미지';
        h3.innerText = '다도구 · 茶道具';
        p.innerText = '차를 끓이고, 우려내고, 마시는 일련의 과정을 돕는 도구들.\n쓰임과 재료, 질감까지 차분하게 큐레이션합니다.'
        a.innerText = '다도구 모두 보기 ↗';
    }

    else if(tabNo == 2) {
        image.src = 'img/featured03(webp).webp';
        image.alt = '찻잎이 담긴 상자 이미지';
        h3.innerText = '선물세트 · 膳物';
        p.innerText = '차와 다도구를 정성스럽게 구성한 선물 세트입니다.\n일상 속 차의 시간을 다른 사람과 나누는 방법을 제안합니다.';
        a.innerText = '선물세트 모두 보기 ↗';
    }
}

let selectedImg = 0;
function changeImg(imgNo) {
    const figure = document.querySelectorAll('.featured-sub-image');
    const img = document.querySelector('.featured-image > img');
    figure[selectedImg].className = 'featured-sub-image';
    figure[imgNo].className = 'featured-sub-image is-active';
    selectedImg = imgNo;
    if(imgNo == 0) {
        img.src = 'img/visual03(fix).png';
        img.alt = '대만 아리산 탄배오룡 대표 상품 이미지';
    }

    else if(imgNo == 1) {
        img.src = 'img/featured02.png';
        img.alt = '잎차 이미지';
    }

    if(imgNo == 2) {
        img.src = 'img/featured03.png';
        img.alt = '찻잎이 담긴 상자 이미지';
    }
}

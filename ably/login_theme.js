// 선택한 테마에 맞는 CSS 파일을 불러옵니다.
const themeSelect = document.getElementById("themeSelect");
const themeStylesheet = document.getElementById("themeStylesheet");

const themeFiles = {
    neo: "./login_neo.css",
    glass: "./login_glass.css",
    pixel: "./login_pixel.css"
};

themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;

    if (selectedTheme) {
        // 선택한 테마 CSS를 연결합니다.
        themeStylesheet.href = themeFiles[selectedTheme];
    } else {
        // 기본 디자인을 선택하면 테마 CSS 연결을 해제합니다.
        themeStylesheet.removeAttribute("href");
    }
});

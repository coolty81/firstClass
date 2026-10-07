# AI_CODING_GUIDE.md

## 1. 문서 목적

이 문서는 `coolty81/firstClass` 저장소의 현재 버거킹 로그인 UI 코드를 기준으로, 앞으로 새로운 브랜드의 로그인 UI를 만들 때 **기존 HTML 구조, CSS 작성 방식, 파일 구조, 네이밍, 접근성 처리 방식을 최대한 유지**하기 위한 AI 코딩 가이드이다.

새 화면을 만들 때 목표는 기존 코드를 전부 새로운 방식으로 바꾸는 것이 아니라,

> **기존 버거킹 UI의 구조와 작성 습관을 유지하면서 브랜드별 콘텐츠와 디자인만 필요한 만큼 변경하는 것**

이다.

기준 파일:

- `BK/login.html`
- `css/default.css`
- `font/css/bkbulmatpro.css`
- `font/css/sdgothicneo.css`
- `font/css/pretendardvariable.css`
- `BK/img/` 내부 아이콘 및 이미지

---

## 2. 현재 프로젝트 구조

```text
firstClass/
├─ BK/
│  ├─ img/
│  │  ├─ apple_logo_icon.svg
│  │  ├─ back_icon.svg
│  │  ├─ cancel_icon.svg
│  │  ├─ checkBox_active.svg
│  │  ├─ checkBox_disabled.svg
│  │  ├─ eye_icon.svg
│  │  ├─ kakao_logo_icon.svg
│  │  ├─ naver_logo_icon.svg
│  │  ├─ samsung_logo_icon.svg
│  │  └─ ...
│  └─ login.html
├─ css/
│  └─ default.css
├─ font/
│  ├─ BKBulMatPro-Bold.woff
│  ├─ PretendardVariable.woff2
│  ├─ SDGothicNeoRound-eMd.woff
│  ├─ SDGothicNeoRound-gBd.woff
│  ├─ SDGothicNeoRound-hEb.woff
│  └─ css/
│     ├─ bkbulmatpro.css
│     ├─ pretendardvariable.css
│     └─ sdgothicneo.css
└─ index.html
```

새 브랜드를 추가할 경우에도 기존 구조를 참고한다.

예시:

```text
BRAND/
├─ img/
└─ login.html
```

브랜드별 이미지와 HTML은 해당 브랜드 폴더 안에서 관리하고, 공통 reset은 `css/default.css`를 계속 사용한다.

---

## 3. HTML 기본 원칙

### 3-1. 기본 문서 구조

기존 버거킹 화면은 다음 구조를 사용한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>...</title>
    ...
</head>
<body>
    <div id="wrap">

        <header>
            ...
        </header>

        <main>
            ...
        </main>

    </div>
</body>
</html>
```

새 화면도 특별한 이유가 없다면 이 구조를 유지한다.

### 3-2. 시멘틱 구조는 화면 모양이 아니라 콘텐츠 의미를 기준으로 결정

기존 코드의 구조를 참고하되 태그를 기계적으로 복사하지 않는다.

기본 판단 기준:

- 사이트 또는 화면의 상단 영역 → `<header>`
- 화면의 핵심 콘텐츠 → `<main>`
- 하나의 주제를 가진 콘텐츠 그룹 → `<section>`
- 독립적으로 볼 수 있는 콘텐츠 → `<article>`
- 주요 이동 메뉴 → `<nav>`
- 반복되는 같은 종류의 항목 → `<ul>`, `<li>` 검토
- 의미 없는 레이아웃 박스 → `<div>`

새 브랜드 화면에서도 HTML만 읽었을 때 정보 구조를 이해할 수 있도록 작성한다.

---

## 4. 제목 구조

### 4-1. `h1`

화면을 대표하는 제목은 `<h1>`을 사용한다.

버거킹 로그인 화면:

```html
<header>
    <h1>로그인</h1>
</header>
```

브랜드가 달라져도 화면의 대표 제목이 로그인이라면 구조를 유지한다.

```html
<h1>로그인</h1>
```

### 4-2. `h2`

`h2`는 단순히 글자가 큰 요소에 쓰지 않는다.

페이지 안의 주요 콘텐츠 주제를 나타내는 제목에 사용한다.

예:

```html
<h2 class="title">
    <span>안녕하세요 :)</span>
    <span>버거킹입니다.</span>
</h2>
```

### 4-3. 화면에 보이지 않는 제목

문서 구조와 접근성을 위해 제목이 필요하지만 디자인상 화면에 표시하지 않아야 하는 경우 기존 프로젝트의 `.sr-only` 방식을 사용한다.

```html
<h2 class="sr-only">...</h2>
```

단순히 제목을 삭제하지 않는다.

---

## 5. Form 구조

기존 버거킹 로그인 UI는 폼을 다음과 같이 구성한다.

```html
<form action="#">
    <fieldset>
        <legend class="sr-only">로그인 화면</legend>

        ...
    </fieldset>
</form>
```

### 기본 원칙

- 사용자 입력과 제출이 있는 영역 → `<form>`
- 관련 있는 입력을 그룹으로 묶어야 하는 경우 → `<fieldset>`
- 그룹 이름 → `<legend>`
- 입력 요소의 설명 → `<label>`
- 실제 사용자 입력 → `<input>`
- 폼 제출 → `<button type="submit">`

새 브랜드의 로그인 UI도 로그인/회원정보 입력 화면이라는 의미가 같다면 이 구조를 우선 사용한다.

---

## 6. Input 작성 방식

기존 프로젝트에서는 입력창을 `input`으로 작성하고 CSS로 크기와 모양을 만든다.

```html
<input
    type="email"
    id="email"
    name="email"
    placeholder="아이디(이메일)를 입력해 주세요."
>
```

```html
<input
    type="password"
    name="password"
    placeholder="비밀번호를 입력해 주세요."
>
```

가능한 경우 입력창에는 `label`을 연결한다.

```html
<label for="email" class="sr-only">아이디(이메일)</label>
<input type="email" id="email" name="email">
```

아이콘이나 텍스트를 입력창 내부에 배치해야 하는 경우에도 입력 기능 자체는 `input`으로 유지하고, 시각적인 장식은 별도의 요소 또는 CSS로 처리한다.

---

## 7. Button과 Link 구분

### `button`

사용자의 동작을 현재 페이지에서 실행하는 경우 사용한다.

예:

```html
<button type="submit" class="login_btn">로그인</button>
```

```html
<button type="button" class="pw_btn">
    <span class="sr-only">비밀번호 보기</span>
</button>
```

```html
<button type="button" class="prev_btn">
    <span class="sr-only">이전 버튼</span>
</button>
```

### `a`

다른 페이지 또는 다른 위치로 이동하는 경우 사용한다.

예:

```html
<a href="password.html">비밀번호 재설정</a>
```

새 브랜드를 만들 때 이동 링크를 단순히 `<button>`으로 만들지 않는다.

---

## 8. 반복 콘텐츠와 목록

반복되는 콘텐츠라고 무조건 `<ul>`로 바꾸지는 않는다.

먼저 다음을 판단한다.

> 같은 성격의 항목들이 독립적으로 반복되는가?

그렇다면 `ul > li`를 검토한다.

현재 버거킹 코드에서는 `login_link`와 `sns_list`가 `div` 안에서 반복 링크를 직접 배치하는 형태도 사용되고 있다.

```html
<div class="login_link">
    <a href="#">아이디 찾기</a>
    <a href="password.html">비밀번호 재설정</a>
    <a href="#">회원가입</a>
</div>
```

```html
<div class="sns_list">
    <a href="#">...</a>
    <a href="#">...</a>
    <a href="#">...</a>
    <a href="#">...</a>
</div>
```

새 브랜드 작업에서는 **기존 코드 스타일을 기본값으로 유지**하되, 사용자가 시멘틱 개선을 요청했거나 콘텐츠 의미상 목록 구조가 명확한 경우에만 변경을 제안한다.

---

## 9. `div` 사용 원칙

`div`는 기존 프로젝트에서도 적극적으로 사용한다.

예:

```html
<div id="wrap">
```

```html
<div class="input_box">
```

```html
<div class="login_option">
```

```html
<div class="sns_login">
```

`div` 자체를 줄이는 것을 목표로 하지 않는다.

### 사용 기준

`div`를 사용할 수 있는 경우:

- 시각적인 레이아웃을 위한 그룹
- 스타일 적용을 위한 컨테이너
- 적절한 시멘틱 태그가 없는 일반적인 UI 그룹

반대로 다음과 같은 경우에는 의미에 맞는 요소를 먼저 검토한다.

- 입력 그룹 → `fieldset`
- 제목 → `h1`~`h6`
- 이동 링크 → `a`
- 동작 버튼 → `button`
- 반복 목록 → `ul`/`li` 검토

---

## 10. CSS 파일 구성 원칙

### `css/default.css`

공통 reset과 기본 브라우저 스타일 초기화를 담당한다.

포함된 예:

- `box-sizing`
- margin/padding reset
- body 기본 설정
- typography 관련 기본 처리
- list-style 제거
- link reset
- image reset
- form element reset
- focus 처리
- `.sr-only`
- reduced motion 대응

새 브랜드 페이지를 만들 때 이미 `default.css`에 존재하는 reset 코드를 페이지 CSS에 다시 복사하지 않는다.

---

## 11. 페이지별 CSS

페이지별 디자인 관련 값은 각 HTML 파일의 `<style>` 영역 또는 기존 프로젝트에서 정한 페이지별 방식에 맞춘다.

현재 `BK/login.html`에서는 `<style>` 안에 다음과 같은 CSS 변수를 정의하고 있다.

```css
:root {
    --font: "Sandoll GothicNeoRound", sans-serif;
    --font-pre: "Pretendard Variable", sans-serif;
    --font-BKR: "BKR", sans-serif;
    --primary: #512314;
    --focus: #D62302;
    --baseBorder: #D9CFC6;
    --inputBg: #FFFCF9;
    --button: #E9DDCD;
    --errorColor: #C54734;
    --placeholder: #EBE6E2;
    --text: #766053;
    --bg: #F4EBDC;
}
```

브랜드가 달라질 경우 이 변수 구조를 유지하면서 값만 브랜드에 맞게 바꾸는 방식을 우선한다.

변수 이름은 특별한 이유가 없다면 기존 이름을 유지한다.

---

## 12. 단위와 크기

현재 프로젝트에서는 `html`에 기본 글자 크기를 설정하고 `rem`을 사용한다.

```css
html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
}
```

새 화면에서도 특별한 이유가 없으면 기존 단위 체계를 유지한다.

기존 프로젝트에서 사용하는 `px`는 실제 UI 치수를 표현할 때 그대로 사용해도 된다.

---

## 13. 레이아웃 방식

현재 버거킹 코드에서는 `flex`를 자주 사용한다.

예:

```css
header {
    position: relative;
    display: flex;
    justify-content: center;
    height: 48px;
    align-items: center;
}
```

```css
.title {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
```

```css
.login_option label {
    display: inline-flex;
}
```

새 브랜드 UI도 간단한 가로/세로 정렬이 필요하면 기존처럼 `flex`를 우선 사용한다.

절대 위치를 먼저 사용하는 방식으로 전체 레이아웃을 다시 만들지 않는다.

---

## 14. `#wrap` 규칙

현재 페이지는 `#wrap`을 기준으로 전체 화면 크기를 관리한다.

```css
#wrap {
    width: 100%;
    max-width: 1024px;
    min-width: 360px;
    background-color: var(--bg);
}
```

새 브랜드 화면도 모바일 UI를 기준으로 만들더라도 기존 `#wrap` 구조와 반응형 기준을 유지하는 것을 우선한다.

---

## 15. 접근성 처리

현재 프로젝트에서 `.sr-only`는 실제 화면에서는 보이지 않지만 스크린 리더에서 읽을 수 있는 텍스트를 위해 사용한다.

새 화면에서도 아이콘만 있는 버튼이나 링크에는 내용을 설명하는 숨김 텍스트를 제공한다.

```html
<button type="button">
    <span class="sr-only">비밀번호 보기</span>
</button>
```

```html
<button type="button">
    <span class="sr-only">이전 버튼</span>
</button>
```

```html
<a href="#">
    <span class="sr-only">카카오 로그인</span>
</a>
```

시각적으로 아이콘만 보인다고 해서 의미 있는 텍스트를 삭제하지 않는다.

---

## 16. 아이콘과 이미지 경로

기존 버거킹 코드는 브랜드 폴더 안의 `img` 폴더를 사용한다.

```css
background: url(img/eye_icon.svg) no-repeat center / 26px;
```

```css
background-image: url(img/kakao_logo_icon.svg);
```

새 브랜드도 기본적으로 다음 패턴을 유지한다.

```text
BRAND/
├─ img/
│  ├─ back_icon.svg
│  ├─ eye_icon.svg
│  └─ ...
└─ login.html
```

페이지 파일과 이미지 파일의 상대 경로를 먼저 확인한 후 작성한다.

---

## 17. 폰트

현재 프로젝트에는 다음 계열의 폰트가 등록되어 있다.

- Burger King 전용 계열: `BKBulMatPro-Bold.woff`
- `Pretendard Variable`
- `SDGothicNeoRound`

그리고 HTML에서 각 폰트용 CSS를 불러온다.

```html
<link rel="stylesheet" href="../font/css/bkbulmatpro.css">
<link rel="stylesheet" href="../font/css/sdgothicneo.css">
<link rel="stylesheet" href="../font/css/pretendardvariable.css">
<link rel="stylesheet" href="../css/default.css">
```

새 브랜드에서 다른 폰트를 사용할 경우 **기존 폰트 구조를 먼저 확인한 다음 필요한 폰트만 추가**한다.

기존 폰트 파일이나 CSS를 삭제하거나 교체하지 않는다.

---

## 18. CSS 선택자 작성 방식

현재 코드에서는 단순한 클래스 선택자뿐 아니라 자식/형제 선택자와 가상 요소를 사용한다.

예:

```css
.title > span
```

```css
.login_option label:first-child
```

```css
.login_link a::after
```

```css
.login_option .check:checked + span::before
```

새 화면에서도 기존 프로젝트에서 이미 사용한 선택자 개념을 우선 활용한다.

CSS 구조를 만들기 위해 새로운 전처리기나 CSS 프레임워크를 추가하지 않는다.

---

## 19. Checkbox 처리 방식

현재 버거킹 로그인 UI는 실제 checkbox input을 유지하면서 시각적 체크박스는 `::before`와 SVG 배경 이미지로 표현한다.

```html
<label>
    <input type="checkbox" class="check sr-only" checked>
    <span>자동 로그인</span>
</label>
```

```css
.login_option .check + span::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(img/checkBox_disabled.svg) no-repeat center / contain;
}

.login_option .check:checked + span::before {
    content: "";
    background-image: url(img/checkBox_active.svg);
}
```

새 브랜드에서 동일한 UI가 필요한 경우 이 방식을 우선한다.

실제 입력을 제거하고 이미지 하나만 넣어 체크박스를 구현하지 않는다.

---

## 20. 비밀번호 보기 버튼

기존 UI는 비밀번호 입력창을 담는 요소에 `position: relative`를 주고 버튼을 절대 위치로 배치한다.

```css
.input_box.rela {
    position: relative;
}

.pw_btn {
    width: 26px;
    height: 26px;
    background: url(img/eye_icon.svg) no-repeat center / 26px;
    position: absolute;
    right: 20px;
    bottom: 12px;
}
```

새 브랜드에서도 같은 형태의 눈 아이콘 UI를 사용한다면 이 구조를 우선 사용한다.

---

## 21. CSS 주석 스타일

현재 코드는 학습 과정에서 배운 내용을 주석으로 기록하는 특징이 있다.

새 코드를 작성할 때도 학습용 프로젝트라는 성격을 고려하여 **필요한 경우 CSS 개념을 설명하는 주석을 유지**한다.

예:

```css
/* var()를 통해 CSS 변수를 불러오기 가능 */
```

주석은 다음과 같은 경우 유용하다.

- 새롭게 사용한 CSS 개념
- 선택자를 이렇게 작성한 이유
- 접근성을 위해 넣은 코드
- 브라우저 기본 동작을 초기화한 이유
- 처음 보는 속성

모든 줄에 기계적으로 주석을 달지는 않는다.

---

## 22. 새로운 브랜드 로그인 화면 제작 절차

### STEP 1. 현재 프로젝트 확인

먼저 다음을 확인한다.

```text
현재 폴더 구조
현재 HTML 위치
CSS 위치
이미지 경로
폰트 경로
현재 파일의 연결 상태
```

### STEP 2. 기준 코드 확인

`BK/login.html`과 `css/default.css`를 먼저 참고한다.

기존 구조를 확인한 뒤 새로운 화면의 구조를 결정한다.

### STEP 3. 화면 정보 구조 분석

디자인을 다음처럼 의미 단위로 나눈다.

```text
header
main
form
input
button
link
section
list
```

단순히 Figma 레이어 이름을 HTML 태그로 그대로 복사하지 않는다.

### STEP 4. HTML 구조 먼저 작성

CSS를 먼저 작성하지 않는다.

콘텐츠의 의미와 제목 관계를 먼저 결정하고 HTML 구조를 만든다.

### STEP 5. 기존 CSS 방식으로 스타일링

기존 방식인 다음을 우선 사용한다.

- CSS 변수
- `rem`
- `px`
- `flex`
- 상대 경로 이미지
- `.sr-only`
- 페이지별 클래스

### STEP 6. 연결 상태 확인

다음을 확인한다.

```text
HTML → CSS 경로
HTML → 이미지 경로
HTML → 폰트 CSS 경로
링크 → 연결 페이지
```

### STEP 7. 화면 비교 및 수정

디자인과 실제 화면을 비교하여 다음을 확인한다.

- 위치
- 간격
- 크기
- 폰트
- 색상
- 입력창
- 버튼
- 아이콘

---

## 23. AI가 임의로 변경하지 말아야 하는 것

사용자가 별도로 요청하지 않는 한 다음을 임의로 변경하지 않는다.

### 프로젝트 기술 스택

- HTML
- CSS

기존 프로젝트에 없는 프레임워크를 추가하지 않는다.

예:

- React 추가 금지
- Vue 추가 금지
- Tailwind 추가 금지
- Bootstrap 추가 금지

### 파일 구조

기존 구조와 다른 구조를 만들기 전에 이유가 있는지 먼저 확인한다.

### 공통 reset

`css/default.css`의 역할을 다른 파일로 옮기거나 중복해서 작성하지 않는다.

### 네이밍

기존 클래스명과 비슷한 의미의 새로운 클래스명을 무분별하게 만들지 않는다.

예:

```text
login_btn
login_link
sns_login
sns_list
input_box
pw_btn
prev_btn
```

같은 프로젝트의 네이밍 스타일을 우선 참고한다.

---

## 24. AI가 해야 할 판단과 사용자에게 알려야 할 판단

AI는 다음을 먼저 검토한다.

- 파일 경로가 맞는가?
- 기존 CSS로 해결할 수 있는가?
- 새로운 구조가 꼭 필요한가?
- 기존 클래스명으로 표현할 수 있는가?
- 시멘틱 구조가 콘텐츠 의미에 맞는가?
- 새로운 태그를 사용해야 하는 이유가 있는가?

그리고 기존 코드와 다른 선택을 하게 되면 그 이유를 설명한다.

예:

> 기존 버거킹 화면은 `div`로 링크들을 그룹화하고 있지만, 이번 화면은 반복되는 동일한 항목의 의미가 더 명확하므로 `ul > li` 구조를 사용할 수 있습니다.

즉, 기존 코드를 존중하되 **기존 코드와 다르게 만드는 경우에는 근거를 남긴다.**

---

## 25. 새 브랜드에서 유지해야 할 핵심 스타일

새 브랜드 로그인 UI의 디자인은 브랜드에 맞게 바뀔 수 있지만 다음 코딩 스타일은 가능한 한 유지한다.

```text
HTML
├─ #wrap
├─ header
├─ main
├─ form
├─ fieldset / legend
├─ input / label
└─ button / a

CSS
├─ :root 변수
├─ rem 중심의 글자 크기
├─ flex 중심의 간단한 레이아웃
├─ 상대경로 이미지
├─ CSS pseudo-element
├─ .sr-only
└─ default.css 공통 reset 사용
```

---

## 26. 새 화면 코드 작성 시 AI 응답 방식

새로운 브랜드 로그인 UI를 요청받으면 바로 코드를 작성하기보다 다음을 먼저 확인한다.

1. 어떤 파일에 작성하는지
2. 해당 파일의 상대 경로
3. 필요한 이미지 파일
4. 필요한 폰트
5. 기존 공통 CSS 연결 여부
6. 현재 디자인의 콘텐츠 구조
7. 기존 버거킹 코드와 유지할 부분
8. 새 브랜드에 맞게 바꿔야 할 부분

### 권장 설명 순서

```text
1. 현재 구조 분석
2. 유지할 기존 구조
3. 새 브랜드에서 변경할 부분
4. HTML 구조
5. CSS 수정
6. 경로 및 연결 확인
7. 화면 테스트
```

---

## 27. 최종 원칙

이 프로젝트에서 AI가 지켜야 할 가장 중요한 기준은 다음과 같다.

> **새 코드를 더 최신 방식으로 만드는 것이 목적이 아니다.**

> **현재 버거킹 UI 프로젝트의 HTML/CSS 구조와 학습 방식을 이해하고, 그 구조를 유지하면서 새로운 브랜드의 화면을 같은 프로젝트 안에서 확장할 수 있도록 만드는 것이 목적이다.**

따라서 새로운 기술을 도입하기보다 현재 프로젝트에서 이미 사용하고 있는 기술과 문법을 먼저 활용한다.

특히 시멘틱 마크업에서는:

```text
디자인 모양
↓
태그 선택
```

이 아니라

```text
콘텐츠 의미
↓
HTML 구조
↓
CSS로 모양 표현
```

순서로 판단한다.

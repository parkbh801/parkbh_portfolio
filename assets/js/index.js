'use strict';

// 사진이 겹쳐있게 CSS를 지정한 후 가장 위로 올라오게 할 z-index: 1;을 CSS 해놓은 클래스명
const showingClass = 'showing';
// querySelector를 통해 첫 번째 박스를 지정
const firstShow = document.querySelector('.slide:first-child');
// classList.add()를 통해 클래스명 주입
firstShow.classList.add(showingClass);

function slide() {
  // 현재 showingClass가 적용되어 있는 요소를 찾는다.
  const currentSlide = document.querySelector(`.${showingClass}`);
  if (currentSlide) {
    // showingClass가 있다면 현재 요소에서 showingClass를 지운다.
    currentSlide.classList.remove(showingClass);
    // showingClass의 다음 요소를 찾는다.
    // nextElementSibling은 다음 요소를 찾는다.
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      // 다음요소가 있다면 다음요소에 showingClass추가
      nextSlide.classList.add(showingClass);
    } else {
      // 다음요소가 없다면(마지막 요소였다면) 첫 번째 요소에 showingClass 추가
      firstShow.classList.add(showingClass);
    }
  } else {
    firstShow.classList.add(showingClass);
  }
}
// 2초마다 사진이 넘어간다.
setInterval(slide, 2000);

// 모바일 화면에서 네비게이션에 있는 햄버거바 버튼를 누를 경우 메뉴가 나타난다.
const Navbar = document.querySelector('.nav_more'); // 햄버거바
const menu = document.querySelector('.navbar > ul.nav_menu'); // 메뉴
Navbar.addEventListener('click', function () {
  menu.classList.toggle('show');  // display: flex; 를 toggle형식으로 실행
});

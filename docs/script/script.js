// Swiper1__init 함수 정의
function PcSwiper__init() {
  const swiper = new Swiper(".pc-swiper-banner-box .swiper", {
    loop: true, // 슬라이드 반복여부
    speed: 700, // 슬라이드 전환 속도
    effect: "fade", // 슬라이드 전환 효과
    fadeEffect: { crossFade: true },
    autoplay: {
      // 슬라이드 자동재생
      delay: 3000, // 2초에 한번씩 슬라이드 전환
    },

    pagination: {
      el: ".swiper-pagination",
    },
  });
}

PcSwiper__init(); // 함수 실행

function MobileSwiper2__init() {
  const swiper = new Swiper(".mobile-swiper-banner-box .swiper", {
    loop: true,
    speed: 700,
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 3000,
    },
  });
}

MobileSwiper2__init();

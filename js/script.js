console.log("Hello world");

const swiper = new Swiper(".first-screen__body", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

const menuLinks = document.querySelectorAll(".header-menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
/////////Определение типов устройств
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const downMenu = document.querySelector(".header-down__menu");
const menuList = document.querySelector(".header-menu__list");
const menuItems = document.querySelectorAll(".header-menu__item");
if (isMobile.any()) {
  document.body.classList.add("_touch");
  downMenu.classList.add("swiper");
  menuList.classList.add("swiper-wrapper");
  if (menuItems.length > 0) {
    menuItems.forEach((menuItem) => {
      menuItem.classList.add("swiper-slide");
    });
  }
  const swiperBrands_1 = new Swiper(".header-down__menu", {});
} else {
  document.body.classList.add("_pc");
}

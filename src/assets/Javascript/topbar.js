const iconMobile = document.querySelector(".header-menu-icon");
const headerMenu = document.querySelector(".header-menu");
let isMenuOpen = false;
let mobileMenuDom;

const closeMenu = () => {
  mobileMenuDom.classList.remove("open");
};

const createMobileMenu = () => {
  mobileMenuDom = document.createElement("div");
  mobileMenuDom.classList.add("mobile-menu");
  mobileMenuDom.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  mobileMenuDom.append(headerMenu.querySelector("ul").cloneNode(true));
  headerMenu.append(mobileMenuDom);
};

const openMenu = () => {
  if (mobileMenuDom) {
  } else {
    createMobileMenu();
  }
  mobileMenuDom.classList.add("open");
};

const toogleMobileMenu = (e) => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};

iconMobile.addEventListener("click", (event) => {
  event.stopPropagation();
  toogleMobileMenu();
});

window.addEventListener("click", () => {
  if (isMenuOpen) {
    toogleMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 400 && isMenuOpen) {
    toogleMobileMenu();
  }
});

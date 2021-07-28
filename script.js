const menu = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".hamburger-icon");
const menuItems = document.querySelector(".menu-items");

const product = document.querySelector(".accordion-product");
const company = document.querySelector(".accordion-company");
const connect = document.querySelector(".accordion-connect");

const productShown = document.querySelector(".accordion-product-open");
const companyShown = document.querySelector(".accordion-company-open");
const connectShown = document.querySelector(".accordion-connect-open");

const productNav = document.querySelector(".product-dropdown");
const companyNav = document.querySelector(".company-dropdown");
const connectNav = document.querySelector(".connect-dropdown");

const productNavOpen = document.querySelector(".product-dropdown-open");
const companyNavOpen = document.querySelector(".company-dropdown-open");
const connectNavOpen = document.querySelector(".connect-dropdown-open");

menu.addEventListener("click", () => {
  menuIcon.classList.toggle("menu-open");
  menuItems.classList.toggle("menu-items-open");
  product.classList.remove("clicked");
  productShown.classList.remove("clicked");
  company.classList.remove("clicked");
  companyShown.classList.remove("clicked");
  connect.classList.remove("clicked");
  connectShown.classList.remove("clicked");
});

product.addEventListener("click", () => {
  product.classList.toggle("clicked");
  productShown.classList.toggle("clicked");
  if (product.classList.contains("clicked")) {
    company.classList.remove("clicked");
    companyShown.classList.remove("clicked");
    connect.classList.remove("clicked");
    connectShown.classList.remove("clicked");
  }
});

company.addEventListener("click", () => {
  company.classList.toggle("clicked");
  companyShown.classList.toggle("clicked");
  if (company.classList.contains("clicked")) {
    product.classList.remove("clicked");
    productShown.classList.remove("clicked");
    connect.classList.remove("clicked");
    connectShown.classList.remove("clicked");
  }
});

connect.addEventListener("click", () => {
  connect.classList.toggle("clicked");
  connectShown.classList.toggle("clicked");
  if (connect.classList.contains("clicked")) {
    company.classList.remove("clicked");
    companyShown.classList.remove("clicked");
    product.classList.remove("clicked");
    productShown.classList.remove("clicked");
  }
});

productNav.addEventListener("click", () => {
  productNav.classList.toggle("clicked");
  productNavOpen.classList.toggle("clicked");
  if (productNav.classList.contains("clicked")) {
    companyNav.classList.remove("clicked");
    companyNavOpen.classList.remove("clicked");
    connectNav.classList.remove("clicked");
    connectNavOpen.classList.remove("clicked");
  }
});

companyNav.addEventListener("click", () => {
  companyNav.classList.toggle("clicked");
  companyNavOpen.classList.toggle("clicked");
  if (companyNav.classList.contains("clicked")) {
    productNav.classList.remove("clicked");
    productNavOpen.classList.remove("clicked");
    connectNav.classList.remove("clicked");
    connectNavOpen.classList.remove("clicked");
  }
});

connectNav.addEventListener("click", () => {
  connectNav.classList.toggle("clicked");
  connectNavOpen.classList.toggle("clicked");
  if (connectNav.classList.contains("clicked")) {
    productNav.classList.remove("clicked");
    productNavOpen.classList.remove("clicked");
    companyNav.classList.remove("clicked");
    companyNavOpen.classList.remove("clicked");
  }
});

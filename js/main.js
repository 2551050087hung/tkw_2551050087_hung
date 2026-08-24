import { initNav, initHeaderOnScroll, initToTop } from "./nav.js";
import { initTheme } from "./theme.js";
import { initFaq } from "./faq.js";
import { initPricing } from "./pricing.js";
import { initSlider } from "./slider.js";
import { initReveal } from "./reveal.js";
import { initForm } from "./form.js";
import { initApp } from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHeaderOnScroll();
  initToTop();
  initTheme();
  initFaq();
  initPricing();
  initSlider();
  initReveal();
  initForm();
  initApp();
});

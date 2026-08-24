export function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
}

export function initHeaderOnScroll() {
  const header = document.querySelector("header");
  const sentinel = document.getElementById("nav-sentinel");
  if (!header || !sentinel) return;

  const observer = new IntersectionObserver(([entry]) => {
    header.classList.toggle("shadow-lg", !entry.isIntersecting);
  });
  observer.observe(sentinel);
}

export function initToTop() {
  const btn = document.getElementById("to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("hidden", window.scrollY < 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

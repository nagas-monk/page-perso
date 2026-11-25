const header = document.querySelector("header");
const compactScrollThreshold = 80;

function updateHeader() {
  header.classList.toggle("is-compact", window.scrollY > compactScrollThreshold);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector("[data-map-toggle]");
  const clip = document.querySelector(".contact__image-clip");

  if (!toggleBtn || !clip) return;

  toggleBtn.addEventListener("click", () => {
    const isVisible = clip.classList.toggle("is-overlay-visible");
    toggleBtn.setAttribute("aria-pressed", String(isVisible));
  });

  // initial aria state
  toggleBtn.setAttribute("aria-pressed", "false");
});
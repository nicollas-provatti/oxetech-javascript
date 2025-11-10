const toggles = document.querySelectorAll(".faq-card__toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".faq-card__item");
    const answer = item.querySelector(".faq-card__answer");
    const isOpen = answer.classList.contains("show");
  });
});
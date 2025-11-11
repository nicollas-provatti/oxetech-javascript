const toggles = document.querySelectorAll(".faq-card__toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".faq-card__item");
    const answer = item.querySelector(".faq-card__answer");
    const isOpen = answer.classList.contains("show");

    document.querySelectorAll(".faq-card__answer.show").forEach((openAnswer) => {
      openAnswer.classList.remove("show");
      const openToggle = openAnswer
        .closest(".faq-card__item")
        .querySelector(".faq-card__toggle img");
      openToggle.src = "./assets/images/icon-plus.svg";
    });

    if (!isOpen) {
      answer.classList.add("show");
      toggle.querySelector("img").src = "./assets/images/icon-minus.svg";
    }
  });
});
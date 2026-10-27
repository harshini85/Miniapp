// FAQ open and close, by R Manmohan
(function () {
  const items = document.querySelectorAll(".faq-item");

  // Only run on the FAQ page
  if (items.length === 0) return;

  function closeAll() {
    items.forEach((item) => {
      item.classList.remove("open");
      const answer = item.querySelector(".faq-answer");
      const question = item.querySelector(".faq-question");
      if (answer) answer.hidden = true;
      if (question) question.setAttribute("aria-expanded", "false");
    });
  }

  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      closeAll();

      if (!wasOpen) {
        item.classList.add("open");
        answer.hidden = false;
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
})();

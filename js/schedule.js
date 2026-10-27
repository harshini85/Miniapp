// Day 1 / Day 2 tabs, by Bavathaarini NS
(function () {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  // Only run on the schedule page
  if (buttons.length === 0 || panels.length === 0) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const day = button.dataset.day;

      buttons.forEach((other) => other.classList.remove("active"));
      button.classList.add("active");

      panels.forEach((panel) => {
        panel.hidden = panel.id !== "day" + day;
      });
    });
  });
})();

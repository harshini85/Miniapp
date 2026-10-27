// Event cards and filters, by Nirmal Kumar Vandhana Shree
(function () {
  const grid = document.querySelector("#eventsGrid");

  // Only run on the events page
  if (!grid) return;

  const events = [
    { title: "24-Hour Hackathon", category: "technical", icon: "💻", time: "Day 1 · 10:00 AM", team: "Team of 3–4", description: "Build a working prototype that solves a real campus or social problem." },
    { title: "Code Sprint", category: "technical", icon: "⚡", time: "Day 1 · 2:00 PM", team: "Individual", description: "Solve logic and coding problems against the clock." },
    { title: "Debug Hunt", category: "technical", icon: "🐞", time: "Day 2 · 10:00 AM", team: "Team of 2", description: "Find and fix hidden bugs in real programs before time runs out." },
    { title: "Web Design Battle", category: "technical", icon: "🎨", time: "Day 2 · 11:30 AM", team: "Individual", description: "Design a beautiful landing page on a surprise theme." },
    { title: "Tech Quiz", category: "non-technical", icon: "❓", time: "Day 1 · 4:00 PM", team: "Team of 2", description: "Rapid-fire questions on technology, startups and computing history." },
    { title: "Pitch Perfect", category: "non-technical", icon: "🎤", time: "Day 2 · 2:00 PM", team: "Team of 3", description: "Present a startup idea to a panel in just 3 minutes." },
    { title: "Meme Contest", category: "non-technical", icon: "😂", time: "Day 2 · 3:30 PM", team: "Individual", description: "Create the funniest original meme about life as a coder." },
    { title: "Git & GitHub Workshop", category: "workshop", icon: "🐙", time: "Day 1 · 11:00 AM", team: "Open to all", description: "Hands-on session on branches, pull requests and teamwork." },
    { title: "Intro to AI Workshop", category: "workshop", icon: "🤖", time: "Day 2 · 9:30 AM", team: "Open to all", description: "Learn how AI tools work and build a tiny project with one." }
  ];

  function categoryLabel(category) {
    if (category === "technical") return "Technical";
    if (category === "non-technical") return "Non-Technical";
    return "Workshop";
  }

  function showEvents(filter) {
    grid.innerHTML = "";

    events.forEach((event) => {
      if (filter !== "all" && event.category !== filter) return;

      const card = document.createElement("div");
      card.className = "card";

      const icon = document.createElement("div");
      icon.className = "card-icon";
      icon.textContent = event.icon;

      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = categoryLabel(event.category);

      const title = document.createElement("h3");
      title.textContent = event.title;
      title.style.marginTop = "10px";

      const description = document.createElement("p");
      description.className = "text-muted";
      description.textContent = event.description;

      const meta = document.createElement("div");
      meta.className = "event-meta";

      const time = document.createElement("span");
      time.textContent = "🕒 " + event.time;

      const team = document.createElement("span");
      team.textContent = "👥 " + event.team;

      meta.appendChild(time);
      meta.appendChild(team);

      card.appendChild(icon);
      card.appendChild(badge);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((other) => other.classList.remove("active"));
      button.classList.add("active");
      showEvents(button.dataset.filter);
    });
  });

  showEvents("all");
})();

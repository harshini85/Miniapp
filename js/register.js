// Registration form checks, by Natasha Amalie
(function () {
  const form = document.querySelector("#registerForm");
  const message = document.querySelector("#formMessage");
  const countEl = document.querySelector("#registerCount");

  // Only run on the register page
  if (!form || !message) return;

  function getCount() {
    try {
      return Number(localStorage.getItem("hackfest-registrations")) || 0;
    } catch (error) {
      return 0;
    }
  }

  function saveCount(count) {
    try {
      localStorage.setItem("hackfest-registrations", String(count));
    } catch (error) {
      // Storage blocked: the count just won't be remembered
    }
  }

  function showCount() {
    if (countEl) countEl.textContent = getCount();
  }

  function showMessage(text, type) {
    message.textContent = text;
    message.className = "form-message " + type;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#fullName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const department = document.querySelector("#department").value;
    const year = document.querySelector("#year").value;
    const eventChoice = document.querySelector("#eventChoice").value;
    const agreed = document.querySelector("#agree").checked;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9][0-9]{9}$/;

    if (name.length < 3) {
      showMessage("Please enter your full name (at least 3 letters).", "error");
      return;
    }
    if (!emailPattern.test(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }
    if (!phonePattern.test(phone)) {
      showMessage("Please enter a valid 10-digit mobile number.", "error");
      return;
    }
    if (department === "" || year === "" || eventChoice === "") {
      showMessage("Please choose your department, year and event.", "error");
      return;
    }
    if (!agreed) {
      showMessage("Please agree to the code of conduct.", "error");
      return;
    }

    const newCount = getCount() + 1;
    saveCount(newCount);
    showCount();

    showMessage("🎉 Thanks " + name + "! You are registered for " + eventChoice + ".", "success");
    form.reset();
  });

  showCount();
})();
Student 18: Amirthaa M
File name: contact.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact | HackFest 2026</title>
  <link rel="stylesheet" href="css/base.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <script src="js/theme.js" defer></script>
  <script src="js/nav.js" defer></script>
</head>
<body>
  <header class="site-header">
    <div class="container nav">
      <a href="index.html" class="logo">⚡ HackFest<span>2026</span></a>
      <nav id="navLinks" class="nav-links">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="events.html">Events</a>
        <a href="schedule.html">Schedule</a>
        <a href="speakers.html">Speakers</a>
        <a href="sponsors.html">Sponsors</a>
        <a href="faq.html">FAQ</a>
        <a href="team.html">Team</a>
        <a href="contact.html">Contact</a>
        <a href="register.html" class="nav-cta">Register</a>
      </nav>
      <div class="nav-actions">
        <button id="themeToggle" class="icon-btn" aria-label="Toggle dark mode">🌙</button>
        <button id="menuToggle" class="icon-btn menu-toggle" aria-label="Open menu">☰</button>
      </div>
    </div>
  </header>

  <main>
    <section class="page-hero">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Questions about HackFest? We're happy to help.</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-3">
        <div class="card text-center">
          <div class="card-icon">📍</div>
          <h3>Venue</h3>
          <p class="text-muted">Main Auditorium, Department of CSE</p>
        </div>
        <div class="card text-center">
          <div class="card-icon">✉️</div>
          <h3>Email</h3>
          <p><a href="mailto:hackfest@example.com">hackfest@example.com</a></p>
        </div>
        <div class="card text-center">
          <div class="card-icon">🕘</div>
          <h3>Help Desk</h3>
          <p class="text-muted">Open 9 AM to 6 PM on both event days</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="card text-center">
          <h2>Have a quick question?</h2>
          <p class="text-muted">Most answers are already on our FAQ page.</p>
          <div class="hero-actions">
            <a href="faq.html" class="btn">Read the FAQ</a>
            <a href="mailto:hackfest@example.com" class="btn btn-outline">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>⚡ HackFest 2026 · Department of CSE</p>
      <p class="credit">Contact page built by Amirthaa M</p>
    </div>
  </footer>
</body>
</html>

// Countdown to HackFest, by Joshika R
(function () {
  const daysEl = document.querySelector("#days");
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");
  const messageEl = document.querySelector("#countdownMessage");

  // Only run on the page that has the countdown
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const eventDate = new Date("2026-12-12T09:00:00+05:30");
  let timer = null;

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function updateCountdown() {
    const difference = eventDate.getTime() - Date.now();

    if (difference <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      if (messageEl) messageEl.textContent = "🎉 HackFest is live now!";
      if (timer) clearInterval(timer);
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
})();
Student 07: Dill Anto Jason C
File name: about.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About | HackFest 2026</title>
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
        <h1>About HackFest</h1>
        <p>A student-run tech fest that celebrates building, learning and teamwork.</p>
      </div>
    </section>

    <section class="section">
      <div class="container grid grid-2">
        <div class="card">
          <h2>Our Story</h2>
          <p>HackFest began as a small coding meet-up in the CSE department and has grown into a two-day fest where students from many colleges come together to build, compete and learn.</p>
          <p>This year's theme is <strong class="highlight">Tech for Campus Life</strong>: using technology to solve everyday problems that students face.</p>
        </div>
        <div class="card">
          <h2>What to Expect</h2>
          <ul class="check-list">
            <li>✅ A 24-hour hackathon with mentors</li>
            <li>✅ Coding contests and a debug hunt</li>
            <li>✅ Hands-on workshops on Git and AI</li>
            <li>✅ Fun non-technical events</li>
            <li>✅ Certificates for every participant</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Our Goals</h2>
          <p>Why we organise HackFest every year</p>
        </div>
        <div class="grid grid-3">
          <div class="card">
            <div class="card-icon">🎓</div>
            <h3>Learn by Doing</h3>
            <p class="text-muted">Students learn faster by building real projects than by reading alone.</p>
          </div>
          <div class="card">
            <div class="card-icon">💡</div>
            <h3>Encourage Ideas</h3>
            <p class="text-muted">Every idea is welcome, from simple apps to bold startup plans.</p>
          </div>
          <div class="card">
            <div class="card-icon">🌱</div>
            <h3>Grow a Community</h3>
            <p class="text-muted">Connect freshers with seniors, mentors and fellow builders.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="card text-center">
          <h2>📍 Venue and Dates</h2>
          <p class="text-muted">Main Auditorium, Department of CSE · December 12–13, 2026</p>
          <a href="register.html" class="btn">Register Now</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>⚡ HackFest 2026 · Department of CSE</p>
      <p class="credit">About page built by Dill Anto Jason C</p>
    </div>
  </footer>
</body>
</html>

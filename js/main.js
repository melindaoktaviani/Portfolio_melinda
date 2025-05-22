// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const body = document.body;

  // Cek tema yang disimpan di localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  // Event listener untuk tombol toggle
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      localStorage.setItem("theme", "light");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  });

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validasi
    if (!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()) {
      status.textContent = "Please fill all fields.";
      return;
    }

    status.textContent = "Sending...";

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    // fetch Api
    try {
      const response = await fetch("https://formspree.io/f/manoakgy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        status.textContent = "Message sent successfully!";
        form.reset();
      } else {
        status.textContent = "Failed to send message.";
      }
    } catch (err) {
      status.textContent = "Failed to send message.";
    }
  });
});

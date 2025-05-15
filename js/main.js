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
  const body = document.body;

  // Cek tema yang disimpan di localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "Light Mode";
  }

  // Event listener untuk tombol toggle
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Simpan preferensi tema ke localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "Dark Mode";
    }
  });
});

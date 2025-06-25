document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, once: true });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Activate clicked button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      projectItems.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

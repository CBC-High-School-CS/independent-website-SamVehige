document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll(".panel");

    panels.forEach(panel => {
        panel.addEventListener("click", function () {
            // Remove 'active' class from all panels
            panels.forEach(p => p.classList.remove("active"));

            // Toggle 'active' class on the clicked panel
            this.classList.toggle("active");
        });
    });
});

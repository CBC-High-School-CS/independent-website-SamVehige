document.addEventListener("DOMContentLoaded", function () {
  const lightboxes = document.querySelectorAll(".lightbox");

  // Close lightbox when clicking outside the image
  lightboxes.forEach(lb => {
      lb.addEventListener("click", function () {
          this.style.animation = "fadeOut 0.3s ease-out forwards";
          setTimeout(() => {
              this.style.display = "none";
              this.style.animation = ""; 
          }, 300);
      });
  });

  // Prevent lightbox close when clicking on the image itself
  document.querySelectorAll(".lightbox img").forEach(img => {
      img.addEventListener("click", function (e) {
          e.stopPropagation();
      });
  });

  // Open lightbox with fade-in animation
  const links = document.querySelectorAll("a[href^='#img']");
  links.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          const lightbox = document.querySelector(this.getAttribute("href"));
          if (lightbox) {
              lightbox.style.display = "flex";
              lightbox.style.animation = "fadeIn 0.3s ease-in";
          }
      });
  });
});
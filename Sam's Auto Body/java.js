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



// Rotating Sponsorship
const promoImages = [
  {
      src: "Photos/K&N_Add_1.jpg",
      href: "https://www.knfilters.com",
      alt: "K&N Performance Filters"
  },
  {
      src: "Photos/bosch_auto_parts.webp",
      href: "https://www.boschautoparts.com/",
      alt: "Bosch Auto Parts"
  },
  {
      src: "Photos/optima_batteries.jpg",
      href: "https://www.optimabatteries.com/",
      alt: "Optima Batteries"
  },
  {
      src: "Photos/RainX_wipers.webp",
      href: "https://www.rainx.com/blade-size-finder/",
      alt: "RainX Wiper Blades"
  },
  {
      src: "Photos/valvoline.jpg",
      href: "https://www.valvoline.com/",
      alt: "Valvoline Oil Change Services"
  }
];

let currentPromo = 0;
setInterval(() => {
  currentPromo = (currentPromo + 1) % promoImages.length;
  const promo = promoImages[currentPromo];
  document.getElementById("promo-img").src = promo.src;
  document.getElementById("promo-img").alt = promo.alt;
  document.getElementById("promo-link").href = promo.href;
}, 5000); // changes every 5 seconds

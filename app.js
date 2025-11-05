(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const downloadBtn = document.getElementById("downloadBtn");

    

    // Función para descargar el CV
    downloadBtn.addEventListener("click", function() {
        // Simplemente redireccionamos a la URL del archivo CV para que se descargue
        window.location.href = "https://docs.google.com/document/d/e/2PACX-1vRLLURuinvPr-Kk9EP11N5US-Q0I8b36NsaV7Gf40-WpxChmDRGe1HbvaZt8PuY8A/pub";
    });
});

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });})


    window.addEventListener("load", () => {
  const hash = window.location.hash;

  if (hash) {
    const sectionId = hash.replace("#", "");
    const targetSection = document.getElementById(sectionId);
    const controls = document.querySelectorAll(".control");

    // Quitar 'active' de todas las secciones y botones
    document.querySelectorAll(".container").forEach(section => {
      section.classList.remove("active");
    });
    controls.forEach(btn => btn.classList.remove("active-btn"));

    // Activar la sección y botón correctos
    if (targetSection) {
      targetSection.classList.add("active");
      const activeBtn = document.querySelector(`[data-id="${sectionId}"]`);
      if (activeBtn) activeBtn.classList.add("active-btn");
    }
  }
});
window.addEventListener("load", () => {
  const hash = window.location.hash;

  if (hash) {
    const sectionId = hash.replace("#", "");
    const targetSection = document.getElementById(sectionId);
    const controls = document.querySelectorAll(".control");

    document.querySelectorAll(".container").forEach(section => {
      section.classList.remove("active");
    });
    controls.forEach(btn => btn.classList.remove("active-btn"));

    
    if (targetSection) {
      targetSection.classList.add("active");
      const activeBtn = document.querySelector(`[data-id="${sectionId}"]`);
      if (activeBtn) activeBtn.classList.add("active-btn");
    }
  }
});

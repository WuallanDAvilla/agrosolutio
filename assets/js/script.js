document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("mainHeader");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  const animatedElements = document.querySelectorAll(".animated");
  const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);
  animatedElements.forEach((element) => appearOnScroll.observe(element));

  const modal = document.getElementById("contactModal");
  const openButtons = document.querySelectorAll(".contact-modal-trigger");
  const closeButton = modal.querySelector(".close-button");

  const openModal = () => {
    modal.style.display = "flex";
  };
  const closeModal = () => {
    modal.style.display = "none";
  };

  openButtons.forEach((btn) => {
    btn.onclick = openModal;
  });

  closeButton.onclick = closeModal;

  window.onclick = (event) => {
    if (event.target == modal) {
      closeModal();
    }
  };
});

// ...existing code...

// Abrir o modal ao clicar no botão "Fale Conosco"
document.querySelectorAll('.contact-modal-trigger').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.getElementById('contactModal').style.display = 'block';
    });
});

// Fechar o modal ao clicar no botão de fechar (×)
document.querySelectorAll('.close-button').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.getElementById('contactModal').style.display = 'none';
    });
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// ...existing code...
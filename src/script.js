document.getElementById('waitlist-form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.classList.add('sent');
  });


  // Scroll suave e controlado para os links do menu (#dores, #como-funciona, etc)
function smoothScrollTo(target, duration) {
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY;
  const startTime = performance.now();

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easing suave (easeInOutQuad)
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    window.scrollTo(0, startY + (targetY - startY) * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      smoothScrollTo(target, 900); // 900 = duração em milissegundos
    }
  });
});
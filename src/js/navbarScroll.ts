export function navbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 10;

    if (scrolled) {
      navbar.classList.add('bg-black/30', 'backdrop-blur-sm',);
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar.classList.remove('bg-white/40', 'backdrop-blur-sm', 'border-b', 'border-amber-100');
      navbar.classList.add('bg-transparent', 'border-transparent');
    }
  });
}

navbarScroll();

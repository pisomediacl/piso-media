document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navItems = document.querySelectorAll('.nav-item');

  // Alternar el menú al hacer clic en la hamburguesa
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Cerrar el menú automáticamente al hacer clic en una opción
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Carga y renderizado forzado de las portadas de Instagram
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  } else {
    window.addEventListener('load', () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    });
  }
});

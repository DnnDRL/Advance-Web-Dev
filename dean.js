function toggleMenu() {
    const menu = document.getElementById('menu-dropdown');
    menu.classList.toggle('show');
  }

  window.onclick = function(e) {
    if (!e.target.matches('.menu-toggle')) {
      const dropdown = document.getElementById('menu-dropdown');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }
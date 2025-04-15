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
  };
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }
  
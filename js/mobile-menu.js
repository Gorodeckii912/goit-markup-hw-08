(() => {
    const refs = {
      openMenuBtn: document.querySelector(".btn-head-menu"),
      closeMenuBtn: document.querySelector(".BTN-head"),
      Menu: document.querySelector(".mobile-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.Menu.classList.toggle("is-hidden");
    }
  })();
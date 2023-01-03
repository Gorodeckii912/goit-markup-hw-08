(() => {
    const menuBtnRef = document.querySelector("[data-head-open]");
    const mobileMenuRef = document.querySelector("[data-head]");
  
    menuBtnRef.addEventListener("click", () => {
        const expanded =
          menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
        menuBtnRef.classList.toggle("is-open1");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
    
        mobileMenuRef.classList.toggle("is-open1");
      });
    })();
document.addEventListener("DOMContentLoaded", () => {
  //Nav - open/close
  (() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
          toggle.classList.toggle("show");
        });
      }
    };
    const links = document.querySelector(".nav-links");
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const el = link.getAttribute("href").replace("#", "");
        document.getElementById(el).scrollIntoView();
      });
    });
    showMenu("btn-menu", "nav-menu");
  })();

  //project section
  (() => {
    const btnServicesContact = document.querySelector(".start-project-btn");
    btnServicesContact.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView();
    });
  })();

  //footer section
  (() => {
    const date = new Date().getFullYear();
    document.querySelector("#footer-date").textContent = date;
  })();
});

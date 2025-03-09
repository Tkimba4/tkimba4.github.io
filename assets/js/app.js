document.addEventListener("DOMContentLoaded", () => {
  //Nav - open/close
  (() => {
    const btnMenu = document.querySelector("#navMenu button");
    const links = document.querySelector(".nav-links");
    btnMenu.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("show");
      links.classList.toggle("show");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const el = link.getAttribute("href").replace('#', "");
        document.getElementById(el).scrollIntoView();
      });
    });
  })();

  //project section
  (()=>{
    const btnServicesContact = document.querySelector('.start-project-btn');
    btnServicesContact.addEventListener('click', ()=>{document.getElementById('contact').scrollIntoView()})
  })();

  //footer section
  (()=>{
    const date = new Date().getFullYear();
    document.querySelector('#footer-date').textContent = date;
  })();
});


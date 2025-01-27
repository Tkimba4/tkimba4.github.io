document.addEventListener("DOMContentLoaded", () => {
  //header - scrollBT
  //   const btnScrollDown = document.getElementById("btn-scrollDown");
  //   btnScrollDown.addEventListener("click", (e) => {
  //     document.getElementById("about").scrollIntoView();
  //   });

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
    // console.log("salut tout le monde");
  })();

  //About - Change view
  (() => {
    const btnsView = document.querySelectorAll(".view-menu button");
    const views = document.querySelectorAll(".view");
    btnsView.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const btnView = e.currentTarget;
        const parent = btnView.parentElement;
        parent.querySelectorAll("button").forEach((btnActive) => {
          btnActive.classList.remove("active");
          btnView.classList.add("active");
          const att = btnView.getAttribute("data-setView");
          views.forEach((view) => {
            view.classList.remove("active");
          });
          document
            .querySelector(`.view[data-view=${att}]`)
            .classList.add("active");
        });
      });
    });
  })();

  //show/hidden btn-to-up
  //   (() => {
  //     const btnToUp = document.querySelector(".btn-to-up button");
  //     btnToUp.addEventListener("click", () => {
  //       window.scrollTo(0, 0);
  //     });
  //     window.addEventListener("scroll", (e) => {
  //       if (scrollY > 300) {
  //         btnToUp.style.display = "grid";
  //       } else {
  //         btnToUp.style.display = "";
  //       }
  //     });
  //   })();
});

(() => {
  const reveals = document.querySelectorAll(`[data-reveal]`);
  const observerReveals = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const att = element.getAttribute("data-reveal");
          element.style.opacity = 1;
          element.classList.add(`reveal-type-${att}`);
          observerReveals.unobserve(element);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );
  reveals.forEach((reveal) => {
    reveal.style.opacity = 0;
    observerReveals.observe(reveal);
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  var scrollTopBtns = Array.prototype.slice.call(
    document.querySelectorAll(".js-scroll-top-btn")
  );

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 80) {
      document.body.classList.add("show-scroll-top");
    } else {
      document.body.classList.remove("show-scroll-top");
    }
  });

  scrollTopBtns.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: 0,
          ease: "easeOut",
          autoKill: true,
        },
      });
    });
  });
});

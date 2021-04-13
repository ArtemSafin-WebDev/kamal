document.addEventListener("DOMContentLoaded", function () {
  
  var header = document.querySelector("header");

  if (header) {
    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function () {
        gsap.set(header, {
          zIndex: 70,
          backgroundColor: "#fff",
        });
        ScrollTrigger.create({
          trigger: header,
          start: "top top",
          endTrigger: "html",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
        });
      },
    });
  }
});

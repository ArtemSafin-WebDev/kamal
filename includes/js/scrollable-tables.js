document.addEventListener("DOMContentLoaded", function () {
  console.log("Scrollable tables");

  function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  var tables = Array.prototype.slice.call(
    document.querySelectorAll(".page table")
  );

  tables.forEach(function (table) {
    var scrollWrapper = document.createElement("div");
    scrollWrapper.classList.add("page-table-scroll-wrapper");
    var simpleWrapper = document.createElement("div");
    simpleWrapper.classList.add("page-table-wrapper");

    wrap(table, simpleWrapper);
    wrap(simpleWrapper, scrollWrapper);

    if (window.DetectIt.primaryInput === 'touch') return;

    var hammertime = new Hammer(scrollWrapper);

    var startX = 0;
    hammertime.on("panstart", function (event) {
      startX = scrollWrapper.scrollLeft;
    });
    hammertime.on("panmove", function (event) {
        scrollWrapper.scrollLeft = Math.floor(startX - event.deltaX);
    });
  });
});

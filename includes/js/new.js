document.addEventListener("DOMContentLoaded", () => {
  function initializeCartItem(item) {
    const input = item.querySelector(".js-quantity-input");
    const plus = item.querySelector(".js-quantity-plus");
    const minus = item.querySelector(".js-quantity-minus");

    const handleBtns = () => {
      if (!input.hasAttribute("data-zero-allowed") && input.value <= 1) {
        minus.setAttribute("disabled", "");
      } else if (input.hasAttribute("data-zero-allowed") && input.value < 1) {
        minus.setAttribute("disabled", "");
      } else {
        minus.removeAttribute("disabled");
      }
    };

    handleBtns();

    plus.addEventListener("click", (event) => {
      event.preventDefault();
      input.value = ++input.value;
      const quantityChangeEvent = new CustomEvent("quantitychange", {
        detail: input.value,
      });
      input.dispatchEvent(quantityChangeEvent);
      handleBtns();
    });
    minus.addEventListener("click", (event) => {
      event.preventDefault();
      if (input.value != 0) {
        input.value = --input.value;
      }

      const quantityChangeEvent = new CustomEvent("quantitychange", {
        detail: input.value,
      });
      input.dispatchEvent(quantityChangeEvent);
      handleBtns();
    });

    input.addEventListener("quantityreset", () => {
      plus.removeAttribute("disabled");
      handleBtns();
    });
  }

  function quantity() {
    const elements = Array.from(document.querySelectorAll(".js-quantity"));

    elements.forEach((element) => {
      initializeCartItem(element);
    });
  }

  quantity();
});

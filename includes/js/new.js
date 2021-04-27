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

  function countdown() {
    const elements = Array.from(document.querySelectorAll(".js-countdown"));

    elements.forEach((element) => {
      const dateString = element.getAttribute("data-countdown");

      var countDownDate = new Date(dateString).getTime();

      // Update the count down every 1 second
      var x = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        element.innerHTML = `
          <div class="my-translation__countdown-element">
            <div class="my-translation__countdown-element-value">${days}</div>
            <div class="my-translation__countdown-element-key">дней</div>
          </div>
          <span class="my-translation__countdown-divider"> : </span>
          <div class="my-translation__countdown-element">
            <div class="my-translation__countdown-element-value">${hours}</div>
            <div class="my-translation__countdown-element-key">часов</div>
          </div>
          <span class="my-translation__countdown-divider"> : </span>
          <div class="my-translation__countdown-element">
            <div class="my-translation__countdown-element-value">${minutes}</div>
            <div class="my-translation__countdown-element-key">минут</div>
          </div>
          <span class="my-translation__countdown-divider my-translation__countdown-divider--pale"> : </span>
          <div class="my-translation__countdown-element my-translation__countdown-element--pale">
            <div class="my-translation__countdown-element-value my-translation__countdown-element-value--pale">${seconds}</div>
            <div class="my-translation__countdown-element-key">секунд</div>
          </div>
        `;

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          element.innerHTML = "Трансляция готова к показу";
        }
      }, 1000);
    });
  }

  quantity();
  countdown();

  var reminderCross = document.querySelector(".reminder .cross");

  if (reminderCross) {
    reminderCross.addEventListener("click", function (event) {
      event.preventDefault();
      var reminder = document.querySelector(".reminder");
      sessionStorage.setItem("reminder", "none");
      if (reminder) {
        reminder.style.display = "none";
      }
    });
  }

  if (sessionStorage.getItem("reminder") === "none") {
    var reminder = document.querySelector(".reminder");
    if (reminder) {
      reminder.style.display = "none";
    }
  }

 
});

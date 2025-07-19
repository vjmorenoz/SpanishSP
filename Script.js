document.addEventListener("DOMContentLoaded", function () {
  paypal
    .Buttons({
      style: {
        label: "donate",
        layout: "vertical",
        color: "gold",
        shape: "rect",
        tagline: false,
        height: 40,
      },
      createOrder: function (data, actions) {
        const amount =
          document.getElementById("donation-amount").value || "5.00";
        return actions.order.create({
          purchase_units: [{ amount: { value: amount } }],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          alert("¡Thank you so much, " + details.payer.name.given_name + "!");
        });
      },
    })
    .render("#paypal-button-container");
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

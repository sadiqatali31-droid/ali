const form = document.getElementById("helpForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  message.textContent = "Thank you! Your demo registration is ready. This sample does not send your details anywhere.";
  form.reset();
});

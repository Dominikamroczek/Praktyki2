document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const nameInput = form.querySelector("input[name='name']");
  const contactInput = form.querySelector("input[name='contact']");
  const packageSelect = form.querySelector("select[name='package']");
  const messageTextarea = form.querySelector("textarea[name='message']");
  const consentCheckbox = form.querySelector(".checkbox-row input[type='checkbox']");

  const showError = (field, message) => {

    const old = field.parentElement.querySelector(".field-error");
    if (old) old.remove();

    if (!message) return;

    const span = document.createElement("span");
    span.className = "field-error";
    span.textContent = message;
    field.parentElement.appendChild(span);
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s()]{6,}$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput.value.trim()) {
      isValid = false;
      showError(nameInput, "Podaj swoje imię.");
    } else {
      showError(nameInput, "");
    }

    const contactValue = contactInput.value.trim();
    if (!contactValue) {
      isValid = false;
      showError(contactInput, "Podaj e‑mail lub numer telefonu.");
    } else if (!emailRegex.test(contactValue) && !phoneRegex.test(contactValue)) {
      isValid = false;
      showError(contactInput, "Podaj poprawny e‑mail lub numer telefonu.");
    } else {
      showError(contactInput, "");
    }

    /*
    if (!packageSelect.value) {
      isValid = false;
      showError(packageSelect, "Wybierz pakiet.");
    } else {
      showError(packageSelect, "");
    }
    */

    if (messageTextarea.value.trim().length < 5) {
      isValid = false;
      showError(messageTextarea, "Napisz kilka słów w wiadomości.");
    } else {
      showError(messageTextarea, "");
    }

    if (!consentCheckbox.checked) {
      isValid = false;
      alert("Zaznacz zgodę na przetwarzanie danych, aby wysłać formularz.");
    }

    if (!isValid) return;

    alert("Dziękujemy! Formularz został wysłany (demo).");
    form.reset();
  });
});

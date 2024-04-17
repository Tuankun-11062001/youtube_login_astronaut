const formEl = document.querySelector(".content_middle .form");
const inputElements = formEl.querySelectorAll("input");
const inputEmailElement = formEl.querySelector("#email");
const buttonSubmit = document.querySelector(".submit_btn");
const messageElement = document.querySelector(".message");
const checkbox = document.querySelector(".agree_btn input");

let messageMissingField = false;

buttonSubmit.addEventListener("click", () => {
  inputElements.forEach((item) =>
    item.value === ""
      ? (messageMissingField = true)
      : (messageMissingField = false)
  );

  if (messageMissingField) {
    messageElement.classList.add("error");
    messageElement.textContent = "Missing Field";
    return;
  }

  if (!inputEmailElement.value.includes("@gmail.com")) {
    messageElement.classList.add("error");
    messageElement.textContent = "Email Incorrect";
    return;
  }

  if (!checkbox.checked) {
    messageElement.classList.add("error");
    messageElement.textContent =
      " You need to check agree all terms and Privacy Policy.";
    return;
  }

  messageElement.classList.add("success");
  messageElement.textContent = "Sign up Successfuly";
});

const generateBtn = document.querySelector(".btn");
const passkeyInput = document.querySelector(".input");
const copyIcon = document.querySelector(".fa-copy");

const alertContainer = document.querySelector(".alert-container");

generateBtn.addEventListener("click", () => {
  createPasskey();
});

copyIcon.addEventListener("click", () => {
  copyPasskey();
  if (passkeyInput.value) {
    alertContainer.classList.remove("active");
    setTimeout(() => {
      alertContainer.classList.add("active");
    }, 2000);
  }
});

const copyPasskey = () => {
  passkeyInput.select();  // selects all text inside the input field
  passkeyInput.setSelectionRange(0, 9999);   // selects text range from index 0 to 9999. Useful for mobile compatibility.
  navigator.clipboard.writeText(passkeyInput.value);  // copies the input value to the clipboard.
};

const createPasskey = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?:{}[]0123456789";
  const passkeyLength = 8;
  let passkey = "";
  for (let i = 0; i < passkeyLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    passkey += chars.substring(randomNumber, randomNumber + 1);
  }
  passkeyInput.value = passkey;
  alertContainer.innerText = passkey + " copied!";
};

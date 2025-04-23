const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  const trimmName = inputEl.value.trim();
  if (trimmName === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = trimmName;
  }
});

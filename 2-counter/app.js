const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const value = document.getElementById("value");

decrease.addEventListener("click", (e) => {
  e.preventDefault();
  let curr = Number(value.textContent);
  value.textContent = --curr;
  if (curr < 0) value.style.color = "red";
});
reset.addEventListener("click", (e) => {
  e.preventDefault();
  value.textContent = 0;
  value.style.color = "#222";
});
increase.addEventListener("click", (e) => {
  e.preventDefault();
  let curr = Number(value.textContent);
  value.textContent = ++curr;
  if (curr > 0) value.style.color = "green";
});

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const nextColor = getRandomHex();
  color.textContent = nextColor;
  document.body.style.backgroundColor = nextColor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
const getRandomHex = () => {
  let ret = "#";
  for (let index = 0; index < 6; index++) {
    ret += hex[getRandomNumber()];
  }
  return ret;
};

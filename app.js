const adviceDiv = document.querySelector(".quote__item");
const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");

const fetchAdvice = async () => {
  try {
    const url = "https://api.adviceslip.com/advice";
    const res = await fetch(url);
    const data = await res.json();
    const { advice } = data.slip;
    adviceDiv.textContent = ` ${advice}`;
    return data;
  }catch(err) {
    console.error(err);
  }
}

hamburger.addEventListener("click", () => dropdown.classList.toggle("active"));
window.addEventListener("load", fetchAdvice);

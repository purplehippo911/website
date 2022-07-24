const adviceDiv = document.querySelector(".quote__item");
     
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

window.addEventListener("load", fetchAdvice);

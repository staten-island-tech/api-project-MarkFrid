const URL = "https://api.chess.com/pub/leaderboards";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.live_blitz[0].name);
    run(data);
  } catch (error) {
    console.log(error);
  }
}

const DOMSelectors = {
  container: document.querySelector(".container"),
  daily: document.querySelector(".daily"),
  daily960: document.querySelector(".daily960"),
  live_rapid: document.querySelector(".live_rapid"),
  live_blitz: document.querySelector(".live_blitz"),
  live_bullet: document.querySelector(".live_bullet"),
};
function run(data) {
  DOMSelectors.live_blitz.addEventListener("click", () => {
    console.log(data.live_blitz[0].name);
  });
}
getData(URL);

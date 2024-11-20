const URL = "https://api.chess.com/pub/leaderboards";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.live_blitz[0].name);
    run(data);
    displayCards(data);
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
    for (let i = 0; i < 50; i++) {
      console.log(data.live_blitz[i].name);
    }
  });
}
getData(URL);

function displayCards(data) {
  DOMSelectors.container.innerHTML = "";

  data.forEach((card) => {
    idCounter += 1;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="card-${idCounter}">
        <h2 class="card-heading" id="heading-${idCounter}">${card.name}</h2>
        <h3 class="card-subheading" id="subheading-${idCounter}">user: ${
        card.username
      }</h3>
        <h3 class="card-rating">Price: $${card.rating.toFixed(2)}</h3>
        ${
          card.imageUrl
            ? `<img class="card-img" id="img-${idCounter}" src="${card.imageUrl}" alt="${card.altText}">`
            : ""
        }
      </div>`
    );
  });
}

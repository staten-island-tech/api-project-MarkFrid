/* import "./style.css";
//api!!!!
async function getData() {
  //fetch returns promise
  try {
    const response = await fetch("https://api.chess.com/pub/leaderboards");
    //gaurd clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textcontent = data.name;
    }
  } catch (error) {
    console.log(error);
    alert("mb dont know where pokemon");
  }
}

getData();
 */

const URL = "https://api.chess.com/pub/leaderboards";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data /*.live_blitz.player_id*/);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

// GET all monsters from API at https://mhw-db.com/
fetch("https://mhw-db.com/monsters")
  .then((response) => response.json())
  .then((monsters) => {
    //For every monster in the monsters-list make list in HTML
    monsters.map((monster) => {
      makeHtmlList(monster);
    });
  });

function makeHtmlList(monster) {
  let monsterName = "<h1>" + monster.name + "</h1>";
  let monsterType = "<p>" + monster.type + "</p>";
  let monsterDescription = "<p>" + monster.description + "</p>";
  let monsterCard =
    "<div class='monster-card'>" +
    monsterName +
    monsterType +
    monsterDescription +
    "</div>";

  let monsterList = document.getElementById("monster-list");
  monsterList.innerHTML += monsterCard;
}

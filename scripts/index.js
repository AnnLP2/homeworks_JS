"use strict";

(function() {
  function addPlayerToLevelSet(...players) {
    const playersWeakSet = new WeakSet();
    for (const player of players) {
      playersWeakSet.add(player);
    }
    return playersWeakSet;
  }

  const player1 = { id: 1, name: "Иван", level: 10 };
  const player2 = { id: 2, name: "Иван", level: 10 };
  const player3 = { id: 3, name: "Иван", level: 10 };
  const player4 = { id: 4, name: "Иван", level: 10 };
  const player5 = { id: 5, name: "Иван", level: 10 };

  console.log(addPlayerToLevelSet(player1, player2, player3, player4, player5));
})();

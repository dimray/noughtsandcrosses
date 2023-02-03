const gameboard = (function () {

  const plays = []

  return { plays };

})();

const selection = document.querySelector(".grid-container");
selection.addEventListener("click", function (e) {
  e.target.innerText = "X";
});


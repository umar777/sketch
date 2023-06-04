let val = 16;

const mainContainer = document.createElement("div");
document.body.appendChild(mainContainer);

// mainContainer.style.width = "960px";
// mainContainer.style.height = "960px";
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.justifyContent = "center";
mainContainer.style.alignItems = "center";

const btn = document.querySelector("button");
btn.addEventListener("click", function (e) {
  val = parseInt(prompt("Only type values between 1 to 100"));
  mainContainer.innerHTML = "";
  sketch(val);
});

function sketch(val) {
  for (let i = 0; i < val; i++) {
    const cellContainer = document.createElement("div");
    cellContainer.style.display = "flex";
    // cellContainer.style.justifyContent = "center";
    // cellContainer.style.alignItems = "center";
    for (let j = 0; j < val; j++) {
      const cell = document.createElement("div");
      cell.style.width = "30px";
      cell.style.height = "30px";
      cell.style.border = "1px solid black";
      cell.addEventListener("mouseover", function (e) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        cell.style.backgroundColor = "#" + randomColor;
      });
      cellContainer.appendChild(cell);
    }
    mainContainer.appendChild(cellContainer);
  }
}

sketch(val);

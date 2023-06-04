for (let i = 0; i < 16; i++) {
  const cellContainer = document.createElement("div");
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.style.width = "30px";
    cell.style.height = "30px";
    cell.style.border = "1px solid black";
    cellContainer.appendChild(cell);
  }
  cellContainer.style.display = "flex";
  cellContainer.style.justifyContent = "center";
  cellContainer.style.alignItems = "center";
  document.body.appendChild(cellContainer);
}

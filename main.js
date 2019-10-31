function generatePattern () {
  let patternContainer = document.getElementById('patternContainer');

  rows = generateRows();

  patternContainer.innerHTML = rows;
};

function clearGrid() {
  let patternContainer = document.getElementById('patternContainer');
  patternContainer.innerHTML = '';
};


function generateRows () {
  let rowsNumber =  parseInt(document.getElementById('rowsInput').value);
  let cols = generateCols();

  let rows = '';

  for (i = 0; i < rowsNumber; i++) {
    const singleRow = '<div class="row">' + cols + '</div>';
    rows += singleRow;
  };

  return rows;
};

function generateCols () {
  let colsNumber = parseInt(document.getElementById('colsInput').value);
  let cols = '';

  for (i = 0; i < colsNumber; i++) {
    const randomColor = getRandomColor();
    cols += `<div class="col" style="color:${randomColor}">X</div>`;
  };

  return cols;
};

function getRandomColor () {
  const colorPalette = document.getElementById('colorPaletteSelect').value.split(',');
  const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  return randomColor;
}
function generatePattern () {
  let rowsNumber = 0;
  let colsNumber = 0;
  let colorPalette = [];

  rowsNumber = parseInt(document.getElementById('rowsInput').value);
  colsNumber = parseInt(document.getElementById('colsInput').value);
  colorPalette = document.getElementById('colorPaletteSelect').value.split(',');

};

function clearGrid() {
  console.log('clearGrid');
};


let box = document.getElementById('container');

function makeRows(rows, cols) {
    box.style.setProperty('--grid-rows', rows);
    box.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      box.appendChild(cell).className = "etchitem";
    };
  };
  
  makeRows(16, 16);






let box = document.getElementById('container');

var clrbutton = document.createElement("BUTTON");
clrbutton.className = 'btn';
clrbutton.innerHTML = "Clear";
document.body.appendChild(clrbutton);
clrbutton.addEventListener('click', function(){
    console.log(clrbutton);
    document.querySelectorAll('.etchitem').forEach(item => {
      item.style.backgroundColor = 'rgba(246, 230, 247, 0.76)';
  })
})

var userNum = document.createElement("INPUT");
userNum.setAttribute("type", "text");
userNum.setAttribute("value", "Enter a number 1-100.");
document.body.appendChild(userNum);
var submit = document.createElement("INPUT");
submit.setAttribute("type", "submit");
document.body.appendChild(submit)

document.body.appendChild(submit);

function makeRows(rows) {
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    box.appendChild(cell).className = "etchitem";
  };
};


makeRows(32);


document.querySelectorAll('.etchitem').forEach(item => {
  item.addEventListener('mouseover', function() {
    console.log(item);
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    item.style.backgroundColor = randomColor;
  })
})



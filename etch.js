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

let blackbtn = document.createElement("BUTTON");
blackbtn.className = 'blackbtn';
blackbtn.innerHTML = 'Black';
document.body.appendChild(blackbtn);
blackbtn.addEventListener('click', function(){
  console.log('Black button!');
  clearTable()
  changeColor('black');
})

let rainbtn = document.createElement("BUTTON");
rainbtn.className = 'Rainbow';
rainbtn.innerHTML = 'Rainbow';
document.body.appendChild(rainbtn);
rainbtn.addEventListener('click', function(){
  console.log('Rainbow button!')
  var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  clearTable()
  changeColor(randomColor)
})

let gradient = document.createElement("BUTTON");
gradient.innerHTML = 'Gradient';
gradient.className = 'gradient';
document.body.appendChild(gradient);
gradient.addEventListener('click', function(){
  console.log('Gradient button!')
})

var userNum = document.createElement("INPUT");
userNum.className = 'userNum'
userNum.setAttribute("type", "text");
userNum.setAttribute("value", "");
userNum.setAttribute("placeholder", "Enter a number 1-30");

document.body.appendChild(userNum);

var submit = document.createElement("INPUT");
submit.className = 'submit'
submit.setAttribute("type", "submit");
document.body.appendChild(submit);
submit.addEventListener('click', function(){
  console.log('clicky submit');
  var newTable = document.querySelector('.userNum').value;
  console.log(newTable);
  setTable(newTable);
});

function clearTable(){
  document.querySelectorAll('.etchitem').forEach(item => {
  item.style.backgroundColor = 'rgba(246, 230, 247, 0.76)';
  })
}

function makeRows(rows) {
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    box.appendChild(cell).className = "etchitem";
  };
};

function setTable(newTable) {
      document.querySelectorAll('.etchitem').forEach(item => {
      item.style.backgroundColor = 'rgba(246, 230, 247, 0.76)';
    })
    makeRows(newTable);
}

function changeColor(btn) {
  document.querySelectorAll('.etchitem').forEach(item => {
    item.addEventListener('mouseover', function() {
      console.log(item);
      item.style.backgroundColor = btn;
    })
  })
}


makeRows(32);


document.querySelectorAll('.etchitem').forEach(item => {
  item.addEventListener('mouseover', function() {
    console.log(item);
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    item.style.backgroundColor = randomColor;
  })
})



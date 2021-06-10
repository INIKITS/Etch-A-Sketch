let box = document.getElementById('container');

var clrbutton = document.createElement("BUTTON");
clrbutton.className = 'clrbtn';
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
rainbtn.className = 'rainbtn';
rainbtn.innerHTML = 'Rainbow';
document.body.appendChild(rainbtn);
rainbtn.addEventListener('click', function(){
  console.log('Rainbow button!')
  clearTable()
  changeColor('rainbow')
})

let gradient = document.createElement("BUTTON");
gradient.className = 'gradientbtn';
gradient.innerHTML = 'Gradient';
document.body.appendChild(gradient);
gradient.addEventListener('click', function(){
  console.log('Gradient button!')
  clearTable()
  changeColor('gradient')
})

var userNum = document.createElement("INPUT");
userNum.className = 'usernum'
userNum.setAttribute("type", "number");
userNum.setAttribute("min", 1)
userNum.setAttribute("max", 30)
userNum.setAttribute("value", "");
userNum.setAttribute("placeholder", "Enter a number between 1 and 30");


document.body.appendChild(userNum);


// input bar for making new grid size //
var submit = document.createElement("INPUT");
submit.className = 'submit'
submit.setAttribute("type", "submit");
document.body.appendChild(submit);
submit.addEventListener('click', function(){
  console.log('clicky submit');
  var newTable = document.querySelector('.usernum').value; 
  console.log(newTable);

  // handle exception for invalid input // 
  if (newTable <= 0 || newTable > 30){ 
    alert('Invalid input, please choose a number from 1 to 30');
    newTable = 30;
  }
  
  clearTable();
  makeRows(newTable);
  document.querySelector('.usernum').value ='';
});

function clearTable(){
  document.querySelectorAll('.etchitem').forEach(item => {
  item.style.backgroundColor = 'rgba(246, 230, 247, 0.76)';
  })
}

// Grid size setup//
function makeRows(rows) {
  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    box.appendChild(cell).className = "etchitem";
  };
};

function changeColor(btn) {
  document.querySelectorAll('.etchitem').forEach(item => {
    var rgbvalue = 160;
    clrbutton.addEventListener('click', function(){
      rgbvalue = 160;
    })
    item.addEventListener('mouseover', function() {
      console.log(item);
      switch (btn){
        case 'black':
          console.log('black')
          item.style.backgroundColor = 'black';
          break;
        case 'rainbow':
          console.log('rainbow')
          var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
          item.style.backgroundColor = randomColor;
          break;
        case 'gradient': 
          console.log('gradient')
          item.style.backgroundColor = "rgb(" + rgbvalue + " " + rgbvalue + " " + rgbvalue +")";
          rgbvalue = rgbvalue - 16;
          break;
        default: 
          console.log('default')
          item.style.backgroundColor = 'black';
      }
    })
  })
}

makeRows(32);

// default rainbow cursor color //
document.querySelectorAll('.etchitem').forEach(item => {
  item.addEventListener('mouseover', function() {
    console.log(item);
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    item.style.backgroundColor = randomColor;
  })
})



var myImg = document.querySelector('img');
myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/Gooose.png'){
        myImg.setAttribute ('src','images/bread.png');
    }else{
        myImg.setAttribute ('src', 'images/Gooose.png');
    }
}
/*
document.querySelector('img').onclick = function(){
    alert('Ouch! Stop poking me!');
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wellcome to the club, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Wellcome to the club', ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
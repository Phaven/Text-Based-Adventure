var morale = 50;
var inventory = [];

document.getElementById('s1').style.display= 'block';
document.getElementById('morale_count').innerHTML=morale;

document.getElementById('s1c1').addEventListener("click", function(){
document.getElementById('s2').style.display= 'block';
inventory.push('Key');
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s1c2').style.display= 'none';
});

document.getElementById('s1c2').addEventListener("click", function(){
document.getElementById('s3').style.display= 'block';
document.getElementById('s1c1').style.display= 'none';
});

document.getElementById('s2c1').addEventListener("click", function(){
document.getElementById('s5').style.display= 'block';
document.getElementById('s2c2').style.display= 'none';
document.getElementById('loss').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
});

document.getElementById('s2c2').addEventListener("click", function(){
inventory.pop('Key');
inventory.push('Flashlight');
morale=75;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s4').style.display= 'block';
document.getElementById('s2c1').style.display= 'none';
});

document.getElementById('s3c1').addEventListener("click", function(){
document.getElementById('s6').style.display= 'block';
inventory.push('Blue Key');
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s3c2').style.display= 'none';
});

document.getElementById('s3c2').addEventListener("click", function(){
document.getElementById('s7').style.display= 'block';
document.getElementById('s3c1').style.display= 'none';
});

document.getElementById('s7c1').addEventListener("click", function(){
document.getElementById('s8').style.display= 'block';
inventory.push('Key');
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s7c2').style.display= 'none';
});

document.getElementById('s7c2').addEventListener("click", function(){
document.getElementById('s9').style.display= 'block';
inventory.push('Blue Key');
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s7c1').style.display= 'none';
});

document.getElementById('s8c1').addEventListener("click", function(){
document.getElementById('s11').style.display= 'block';
document.getElementById('s8c2').style.display= 'none';
document.getElementById('loss').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
});

document.getElementById('s8c2').addEventListener("click", function(){
document.getElementById('s10').style.display= 'block';
inventory.pop('Key');
inventory.push('Flashlight');
morale=75;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s8c1').style.display= 'none';
});

document.getElementById('s9c1').addEventListener("click", function(){
document.getElementById('s12').style.display= 'block';
inventory.push('Key');
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s9c2').style.display= 'none';
});

document.getElementById('s9c2').addEventListener("click", function(){
document.getElementById('doors').style.display= 'block';
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s9c1').style.display= 'none';
});

document.getElementById('s12c1').addEventListener("click", function(){
document.getElementById('s14').style.display= 'block';
document.getElementById('s12c2').style.display= 'none';
document.getElementById('loss').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
});

document.getElementById('s12c2').addEventListener("click", function(){
document.getElementById('s13').style.display= 'block';
inventory.push('Key');
inventory.pop('Key');
inventory.push('Flashlight');
morale=75;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s12c1').style.display= 'none';
});

document.getElementById('s6c1').addEventListener("click", function(){
document.getElementById('s12').style.display= 'block';
document.getElementById('s6c2').style.display= 'none';
});

document.getElementById('s6c2').addEventListener("click", function(){
document.getElementById('doors').style.display= 'block';
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s6c1').style.display= 'none';
});

document.getElementById('s4c1').addEventListener("click", function(){
if(inventory.indexOf('Blue Key') >=0) {
  document.getElementById('leftdoor').style.display= 'block';
  inventory.push('Flashlight');
  morale=80;
  document.getElementById('morale_count').innerHTML=morale;
  document.getElementById('inv_box').innerHTML=inventory;
  document.getElementById('s4c2').style.display= 'none';
}

else {
document.getElementById('mBKey').style.display= 'block';
inventory.push('Flashlight');
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s4c2').style.display= 'none';
}
});

document.getElementById('s10c1').addEventListener("click", function(){
if(inventory.indexOf('Blue Key') >=0) {
  document.getElementById('leftdoor').style.display= 'block';
  inventory.push('Flashlight');
  morale=80;
  document.getElementById('morale_count').innerHTML=morale;
  document.getElementById('inv_box').innerHTML=inventory;
  document.getElementById('s10c2').style.display= 'none';
}

else {
  document.getElementById('mBKey').style.display= 'block';
  inventory.push('Flashlight');
  document.getElementById('inv_box').innerHTML=inventory;
  document.getElementById('s10c2').style.display= 'none';
}
});

document.getElementById('s13c1').addEventListener("click", function(){
if(inventory.indexOf('Blue Key') >=0) {
  document.getElementById('leftdoor').style.display= 'block';
  inventory.push('Flashlight');
  morale=80;
  document.getElementById('morale_count').innerHTML=morale;
  document.getElementById('inv_box').innerHTML=inventory;
  document.getElementById('s13c2').style.display= 'none';
}
else{
  document.getElementById('mBKey').style.display= 'block';
  inventory.push('Flashlight');
  document.getElementById('inv_box').innerHTML=inventory;
  document.getElementById('s13c2').style.display= 'none';
}
});

document.getElementById('s4c2').addEventListener("click", function(){
  if(inventory.indexOf('Blue Key') >=0) {
document.getElementById('rightdoor').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('s4c1').style.display= 'none';
document.getElementById('loss').style.display= 'block';
}

else{
  document.getElementById('mBKey').style.display= 'block';
  document.getElementById('s4c1').style.display= 'none';
}
});

document.getElementById('s10c2').addEventListener("click", function(){
  if(inventory.indexOf('Blue Key') >=0) {
document.getElementById('rightdoor').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('s10c1').style.display= 'none';
document.getElementById('loss').style.display= 'block';
}
else{
  document.getElementById('mBKey').style.display= 'block';
  document.getElementById('s10c1').style.display= 'none';
}
});

document.getElementById('s13c2').addEventListener("click", function(){
  if(inventory.indexOf('Blue Key') >=0) {
document.getElementById('rightdoor').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('s13c1').style.display= 'none';
document.getElementById('loss').style.display= 'block';
}
else{
  document.getElementById('mBKey').style.display= 'block';
  document.getElementById('s13c1').style.display= 'none';
}
});

document.getElementById('blueSwitch').addEventListener("click", function(){
document.getElementById('mBKey1').style.display= 'block';
document.getElementById('redSwitch').style.display= 'none';
});

document.getElementById('b2R').addEventListener("click", function(){
document.getElementById('blue2Red').style.display= 'block';
});

document.getElementById('redSwitch').addEventListener("click", function(){
document.getElementById('mBKey2').style.display= 'block';
document.getElementById('blueSwitch').style.display= 'none';
});

document.getElementById('r2D').addEventListener("click", function(){
document.getElementById('doors').style.display= 'block';
});

document.getElementById('r2DFB').addEventListener("click", function(){
document.getElementById('doors').style.display= 'block';
});


document.getElementById('doorsC1').addEventListener("click", function(){
document.getElementById('leftdoor').style.display= 'block';
inventory.pop('Blue Key');
morale=90;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('inv_box').innerHTML=inventory;
document.getElementById('s13c2').style.display= 'none';
});

document.getElementById('doorsC2').addEventListener("click", function(){
document.getElementById('rightdoor').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('doorsC1').style.display= 'none';
document.getElementById('loss').style.display= 'block';
});

document.getElementById('ldoor1').addEventListener("click", function(){
document.getElementById('leftstatue').style.display= 'block';
morale=0;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('ldoor2').style.display= 'none';
document.getElementById('loss').style.display= 'block';
});

document.getElementById('ldoor2').addEventListener("click", function(){
document.getElementById('rightstatue').style.display= 'block';
morale=100;
document.getElementById('morale_count').innerHTML=morale;
document.getElementById('ldoor1').style.display= 'none';
document.getElementById('win').style.display= 'block';
});

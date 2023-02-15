let value = 0;
document.getElementById('btn-blue').addEventListener('click', function(){
  value = value + 1;
  document.getElementById('counter').innerText = value;
})
document.getElementById('btn-green').addEventListener('click', function(){
  value = value - 1;
  document.getElementById('counter').innerText = value;
})
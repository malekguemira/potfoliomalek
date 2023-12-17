// JavaScript pour changer la variable CSS
function changeColor() {
    var colorInputValue = document.getElementById('primary').value;
    document.documentElement.style.setProperty('--primary', colorInputValue);
  }
  function changeColor1() {
    var colorInputValue = document.getElementById('secondary').value;
    document.documentElement.style.setProperty('--secondary', colorInputValue);
  }
  function changeColor2() {
    var colorInputValue = document.getElementById('third').value;
    document.documentElement.style.setProperty('--third', colorInputValue);
  }
  function changeColor3() {
    var colorInputValue = document.getElementById('fourth').value;
    document.documentElement.style.setProperty('--fourth', colorInputValue);
  }
 
  
function showPopup() {
    var popup = document.getElementById('theme');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

  
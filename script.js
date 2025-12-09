function colourChanger(){
let colourPicker = document.getElementById('color-Picker');
let colourName = document.getElementById('colorName');
let colourBox = document.getElementById('colorBox');

let selectedcolour = colourPicker.value;
colourName.textContent = selectedcolour ;
colourBox.style.backgroundColor = selectedcolour ;

}

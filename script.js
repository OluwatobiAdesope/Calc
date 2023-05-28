// display =====>>>>>
var display = document.getElementById("display")



// All Clear =====>>>>>
const ALL_CLEAR = () => {

  display.value = ' '

}



// Delete =====>>>>>
const DELETE = () => {

  display.value = display.value.toString().slice(0, -1)

}



// Equal To Function =====>>>>>
const EQUAL = () => {

  display.value = eval(display.value)

}



// Bitwise AND, OR, NOT =====>>>>>

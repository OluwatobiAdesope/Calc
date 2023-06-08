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

const CUBEROOT=()=>{
  display.value=display.value ** (1/3)
}
const SQUAREROOT=()=>{
  display.value=display.value ** (1/2)
}



// Bitwise AND, OR, NOT =====>>>>>

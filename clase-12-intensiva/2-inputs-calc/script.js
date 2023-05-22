
let numberOne = document.getElementById("input-01");
let numberTwo = document.getElementById("input-02");
const buttonSumar = document.getElementById("sumar");

buttonSumar.addEventListener('click', () => {
  console.log(sumar());
})

function sumar () {
    
  return (Number(numberOne.value) + Number(numberTwo.value));

}







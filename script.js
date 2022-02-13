const generatePinBtn = document.querySelector(".generate-btn");

function generateRandomPin() {
  let pin = Math.floor(Math.random() * 10000);
  let pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return generateRandomPin();
  }
}

generatePinBtn.addEventListener("click", function () {
  const randomPin = generateRandomPin();
  const randomNumberDisplayed = document.querySelector("#random-number-display");
  randomNumberDisplayed.value = randomPin;
});



const calcBody = document.querySelector(".numbers-tab");
let inputDisplay = document.querySelector('.input-display');

calcBody.addEventListener("click", function (e) {
    let previousNum = document.querySelector('.input-display').value;
    let num = e.target.innerText;

    if(num.length == 1){
       if(num == "C"){
        inputDisplay.value = "";
        
       }
       else{
        inputDisplay.value = previousNum + num ;
       }
        
       


    } 

})

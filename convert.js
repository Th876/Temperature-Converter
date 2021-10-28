const fahrenheitInput = document.getElementById("fahrenheit"); //create fahrenheit variable & link to HTML ID
const celsiusInput = document.getElementById("celsius");  //create celsius variable & link to HTML ID

celsiusInput.oninput = () => { //let input for celsius convert to fahrenheit immediately with oninput attribute 
    let output = (parseFloat(celsiusInput.value) * 9) /5 +32; //convert celsius input to fahrenheit and reserve decimals
    fahrenheitInput.value = parseFloat(output.toFixed(2)); //convert value entered to two decimal places
};

fahrenheitInput.oninput = () => { //let input for fahrenheit convert to celsius immediately with oninput attribute 
    let output = (parseFloat(fahrenheitInput.value) - 32) * 5 /9; //convert fahrenheit input to celsius and reserve decimals
    celsiusInput.value = parseFloat(output.toFixed(2)); //convert value entered to two decimal places
};

const fahrenheitInput = document.getElementById("fahrenheit"); //create fahrenheit variable & link to HTML ID
const celsiusInput = document.getElementById("celsius");  //create celsius variable & link to HTML ID
const inputs = document.getElementsByClassName("inputs__input");  //create inputs variable & link to HTML class name

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) { //add listener for input
        let value = parseFloat(e.target.value); //convert value into a float
       
        switch (e.target.name) { //create switch statements for the numbers entered under both degree headings
            case "fahrenheit":
                celsiusInput.value = (value-32) / 1.8;
                break;
            case "celsius":
                fahrenheitInput.value = (value * 1.8) + 32; 
                break;
            default:
                break;
        }
    });
}
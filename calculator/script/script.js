function sum() {
    let number1 = parseInt(document.querySelector('#one').value); 
    let number2 = parseInt(document.querySelector('#two').value);
    
    let sum = number1 + number2;
    document.querySelector('#answer').value = sum;
}
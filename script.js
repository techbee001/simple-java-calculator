let operator= prompt("choose operator -,+,*,/")
let operand1 = prompt("Enter your first number")
let operand2 = prompt("Enter your second number")

if(operator == '*'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else if(operator == '+'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else if(operator == '-'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else if(operator == '/'){
    alert(`Answer: ${operand1} * ${operand2} = ${operand1 * operand2}` );
} else {
    alert('Invalid operator!!!')
}
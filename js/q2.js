//Sum of series using a function

//get start number and end number
let startNumber = Number(prompt("Enter the start number: "));
let endNumber = Number(prompt("Enter the end number: "));


function sumFunc(num1,num2){
    let sum=0;

    for(let i=num1; i<=num2; i++){
        if(i % 3 !==0 && i % 5 !==0 ){
            sum = sum+i;
        }
    }
    return sum;
}

//insert heading
const hElement = document.createElement("h2");
hElement.textContent = "Narasimha's Question 2 Solution";
document.getElementById("output").appendChild(hElement);

// check positive numbers
if(startNumber > endNumber) {
    const p1Element = document.createElement("p");
    p1Element.textContent = `Ending numbermust be greater than starting number!, you entered ${startNumber} and ${endNumber}:click to refresh`;
    p1Element.style.fontWeight = "red";
    document.getElementById("output").appendChild(p1Element);
    
}
if(startNumber < 0 || endNumber <0) {
    const p2Element = document.createElement("p");
    p2Element.textContent = `You must enter positive integers!, you entered ${startNumber} and ${endNumber}:click to refresh`;
    p2Element.style.fontWeight = "red";
    document.getElementById("output").appendChild(p2Element);
}

total = sumFunc(startNumber,endNumber);
console.log(`The sum of numbers not divisible by 3 or 5 starting at ${startNumber} and ending at ${endNumber} is ${total} `);



//div element
document.getElementById("output").style.backgroundColor = "LightBlue";



const pElement = document.createElement("p");
pElement.textContent = `The sum of numbers not divisible by 3 or 5 starting at "${startNumber}" and ending at "${endNumber}" is ${total}`;
document.getElementById("output").appendChild(pElement);



function validateNumber(validate){
    let count = 0;
    let sumDigits = 0;
    let flag = 0;
    while(count < validate.length){
        if(parseInt(validate[count]) >= 0 || parseInt(validate[count]) <= 0){
            flag = 1;
        }else return flag = 0;
        count++;
    }
    return flag;
}
function sumOfDigits(sum){
    let count = 0;
    let sumDigits = 0;
    while(count < sum.length){
        sumDigits += sum[count];
        count++; 
    }
    return sumDigits;
}
let numbers = [];
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");
let num4 = +prompt("Enter fourth number");
let num5 = +prompt("Enter fifth number");
numbers.push(num1, num2, num3, num4, num5);
console.log(numbers);
if(validateNumber(numbers) == 1) console.log(sumOfDigits(numbers));
else alert("Invalid array of numbers");
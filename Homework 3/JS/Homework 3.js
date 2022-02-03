// Part 1
var year = +prompt("Enter the year you were born");
switch((year - 4) % 12){
    case 0:
        console.log("Your Chinese zodiac sign is Rat!");
        break;
    case 1:
        console.log("Your Chinese zodiac sign is Ox!");
        break;
    case 2:
        console.log("Your Chinese zodiac sign is Tiger!");
        break;
    case 3:
        console.log("Your Chinese zodiac sign is Rabbit!");
        break;
    case 4:
        console.log("Your Chinese zodiac sign is Dragon!");
        break;
    case 5:
        console.log("Your Chinese zodiac sign is Snake!");
        break;
    case 6:
        console.log("Your Chinese zodiac sign is Horse!");
        break;
    case 7:
        console.log("Your Chinese zodiac sign is Goat!");
        break;
    case 8:
        console.log("Your Chinese zodiac sign is Monkey!");
        break;
    case 9:
        console.log("Your Chinese zodiac sign is Rooster!");
        break;
    case 10:
        console.log("Your Chinese zodiac sign is Dog!");
        break;
    case 11:
        console.log("Your Chinese zodiac sign is Pig!");
        break;
    default:
        console.log("Invalid year!")
}

console.log("\n")
// Part 2
function isObject(x){
    if('object' == typeof(x)){
        console.log("Object : True");
    }else console.log("Object : False");
}
function isBoolean(x){
    if('boolean' == typeof(x)){
        console.log("Boolean : True");
    }else console.log("Boolean : False");
}
function isNumber(x){
    if(parseInt(x) >= 0 || parseInt(x) <= 0){
        console.log("Number : True");
    }else console.log("Number : False");
}
 function isString(x){
    if(parseInt(x) >= 0 || parseInt(x) <= 0){
        console.log("String : False");
    }else if('string' == typeof(x)){
        console.log("String : True");
    }else console.log("String : False");
}
 function isUndefined(x){
    if('undefined' == typeof(x)){
        console.log("Undefined : True");
    }else console.log("Undefined : False");
}
var variable = prompt("Enter a parameter");
console.log(`Information about ${variable}`);
isObject(variable);
isBoolean(variable);
isNumber(variable);
isString(variable);
isUndefined(variable);

console.log("\n")
// Part 3
function Dog(x){
    console.log("Your dog's age is " + parseInt(x / 7))
}
var dogYear = +prompt("Enter your age");
Dog(dogYear);

console.log("\n")
// Part 4
function team(x, y){
    if(x<10) x = "0" + x;
    if(y<10) y = "0" + y;
    console.log(`${x} boys & ${y} girls`);
}
var boys = +prompt("Enter the amount of boys");
var girls = +prompt("Enter the amount of girls")
team(boys, girls);

console.log("\n")
// Part 5
function calculateAge(x , y){
    var x = y - x;
    return x;
}
var birthYear = +prompt("Enter the year you were born in");
var currentYear = new Date().getFullYear();
var YourAge = calculateAge(birthYear, currentYear);
console.log(`Your age is ${YourAge}`);
var birthYear = +prompt("Enter the year you were born in");
var currentYear = new Date().getFullYear();
var YourAge = calculateAge(birthYear, currentYear);
console.log(`Your age is ${YourAge}`);
var birthYear = +prompt("Enter the year you were born in");
var currentYear = new Date().getFullYear();
var YourAge = calculateAge(birthYear, currentYear);
console.log(`Your age is ${YourAge}`);

console.log("\n")
// Part 6
function ATM(p1, p2){
    var accBalance = p1 - p2; 
    return accBalance;
}
var money = 1000;
var amount = +prompt(`Balance: ${money}$\nEnter the amount you want to withdraw`);
if(ATM(money, amount) >= 0 ){
    alert(`Successfuly withdrawn ${amount}$!\nBalance: ${ATM(money, amount)}$`)
}else alert("Not enough money");
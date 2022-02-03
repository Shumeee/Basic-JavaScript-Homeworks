// Part 1
var firstname = prompt("Enter your first name");
var lastname = prompt("Enter your last name");
console.log(firstname);
console.log(lastname);
alert(`Greetings ${firstname} ${lastname}!`);

// Part 2
var year = +prompt("Enter the year you were born");
if((year - 4) % 12 == 0){
    alert("Your Chinese zodiac sign is Rat!")
}else if((year - 4) % 12 == 1){
    alert("Your Chinese zodiac sign is Ox!")
}else if((year - 4) % 12 == 2){
    alert("Your Chinese zodiac sign is Tiger!")
}else if((year - 4) % 12 == 3){
    alert("Your Chinese zodiac sign is Rabbit!")
}else if((year - 4) % 12 == 4){
    alert("Your Chinese zodiac sign is Dragon!")
}else if((year - 4) % 12 == 5){
    alert("Your Chinese zodiac sign is Snake!")
}else if((year - 4) % 12 == 6){
    alert("Your Chinese zodiac sign is Horse!")
}else if((year - 4) % 12 == 7){
    alert("Your Chinese zodiac sign is Goat!")
}else if((year - 4) % 12 == 8){
    alert("Your Chinese zodiac sign is Monkey!")
}else if((year - 4) % 12 == 9){
    alert("Your Chinese zodiac sign is Rooster!")
}else if((year - 4) % 12 == 10){
    alert("Your Chinese zodiac sign is Dog!")
}else if((year - 4) % 12 == 11){
    alert("Your Chinese zodiac sign is Pig!")
}

// Part 3
var num1 = +prompt("Enter the first number");
var num2 = +prompt("Enter the second number");
var num3 = +prompt("Enter the third number");
var num4 = +prompt("Enter the fourth number");
var num5 = +prompt("Enter the fifth number");
var max = num1;
if(max < num2){
    max = num2;
}if(max < num3){
    max = num3;
}if(max < num4){
    max = num4;
}if(max < num5){
    max = num5;
}
alert(`The maximum number from the numbers ${num1}  ${num2}  ${num3}  ${num4}  ${num5} is  ${max}`);

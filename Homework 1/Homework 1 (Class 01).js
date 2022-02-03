// Part 1
var bool = true;
var num = 25;
var str = "David";
// Bool
console.log("Value : " + bool)
console.log("Type : " + typeof(bool))
// Number
console.log("Value : " + num)
console.log("Type : " + typeof(num))
// String
console.log("Value : " + str)
console.log("Type : " + typeof(str))
console.log("\n")

// Part 2
var pi = 3.14;
var r = prompt("Declare the radius: ");
var area = pi * r*2;

console.log("The area of the circle is : " + area)
console.log("\n")

// Part 3
var price = prompt("Enter the price : ");
var tax = prompt("Enter the tax : ");
var taxRate = (tax / 100) * 30 * price;
var sum = parseInt(price) * 30 + parseInt(taxRate);

console.log("30 phones for the price of " + price + "$" + " and tax of " + tax + "%" + " is " + sum)
function weightInChickens(weight){
    weight *= 2;
    return weight;
}
let weight = +prompt("Enter your weight");
if(weight > 0){
    let text = document.getElementById("text");
    text.innerHTML += `You weigh ${weightInChickens(weight)} chickens!`;
}
else alert("Invalid weight");


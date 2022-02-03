let recipeName = document.getElementById("recipe");
let ingredients = document.getElementById("ingredients");
recipeName.innerHTML = `${prompt("Enter the name of the recipe")}`;
let count = +prompt("Enter the amount of ingredients");
let array = [];
if (count > 0){
    for(i=0; i < count; i++){
        array[i] = prompt("Enter ingredient name");
        ingredients.innerHTML += `<li>${array[i]}</li>`;
    }
}
else alert("Invalid number of ingredients!");

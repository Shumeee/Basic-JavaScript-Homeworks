let animalName = document.getElementById("name");
let type = document.getElementById("type");
let age = document.getElementById("age");
let list = document.getElementById("list");
let button = document.getElementById("button");
let array = [], count = 1, n = 0;

function Animal(name, type, age){
    this.animalName = name;
    this.animalType = type;
    this.animalAge = age;
    this.printAnimal = function(){
        list.innerHTML += `<h3>Animal #${count}:</h3>`;
        list.innerHTML += `<li>${array[n]}</li>`;
        count++; // Animal counter
        n++; // Animal in Array counter 
    }
}

button.addEventListener("click", function(){
    let firstAnimal = new Animal(animalName.value, type.value, age.value);
    for(let i=n; i<count; i++){
        array[i] = `Name: ${animalName.value} Type: ${type.value} Age: ${age.value}`;
    }
    firstAnimal.printAnimal();
});
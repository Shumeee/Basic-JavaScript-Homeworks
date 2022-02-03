let carModel = document.getElementById("model");
let carColor = document.getElementById("color");
let carYear = document.getElementById("year");
let carFuel = document.getElementById("fuel");
let carDistance = document.getElementById("distance");
let button = document.getElementById("button");
button.addEventListener("click", function(){
    let car = {
        model : carModel.value,
        color : carColor.value,
        year : carYear.value,
        fuel : carFuel.value,
        fuelConsumption : carDistance.value,
        distance : function(){
            alert(`With ${this.fuel}l of fuel you can travel ${parseInt(this.fuel / this.fuelConsumption)}km`);
        }
    }
    car.distance();
})

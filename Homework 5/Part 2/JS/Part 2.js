function combineNames(arr1, arr2){
    let count = 1;
    let arr3 = [];
    for(let i = 0; i < arr1.length; i++){
        console.log(arr1[i], arr2[i]);
        arr3[i] = count + "." + " " + arr1[i] + " " + arr2[i];
        count++;
    }
    return arr3;
}
let firstNames = [];
let lastNames = [];
let count = +prompt("Enter the ammount of names you want to add");
if(count >= 0){
    for(let i = 0; i < count; i++){
        firstNames[i] = prompt("Enter first names");
    }
    for(let i = 0; i < count; i++){
        lastNames[i] = prompt("Enter last names");
    }
    console.log(combineNames(firstNames, lastNames));
}else alert("ERROR: Incorrect value")

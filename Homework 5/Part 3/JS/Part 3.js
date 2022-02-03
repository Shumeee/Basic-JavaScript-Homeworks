function findNumber(number, array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == number) count++;
    }
    return count;
}
let number = +prompt("Enter your lucky number");
let array = [];
let j = 0;
for(let i = 1; i <= 3; i++){
    while(1){
        array[j] = +prompt(`Enter numbers in array number ${i}. Type "s" to stop`);
        if(array[j] >= 0 || array[j] <= 0) j++;
        else{
            let counter = findNumber(number, array);
            let poped = array.pop();
            console.log(`There are ${counter} occurrences of number ${number} in the array ${array}`);
            j = 0;
            break;
        }
    }
}

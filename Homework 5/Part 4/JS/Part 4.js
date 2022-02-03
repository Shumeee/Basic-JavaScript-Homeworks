function findNumber(array, type){
    let array2 = [];
    let count = 0;
    if(type == 'odd'){
        for(let i = 0; i < array.length; i++){
            if(array[i]%2 != 0){
                array2[count] = array[i];
                count++;
            }
        }
    }else{
        for(let i = 0; i < array.length; i++){
            if(array[i]%2 == 0 && array[i] != 0){
                array2[count] = array[i];
                count++;
            }
        }
    }
    return array2;
}
let array = [];
let j = 0;
while(1){
    array[j] = +prompt("Enter numbers in the array. Type 's' to stop");
    if(array[j] >= 0 || array[j] <= 0){
        j++;
    }else break;
}
let type = prompt("Type 'even' to get the even numbers or 'odd' to get the odd numbers");
if(type == 'even' || type == 'odd'){
    let poped = array.pop();
    let dummy = findNumber(array, type);
    console.log(`${type} numbers in the array ${array} are: ${dummy}`);
}else alert("Incorrect type");

function sumMaxMin(arrayNum){
    let min = arrayNum[0];
    let max = arrayNum[0];
    for(let i=0; i < arrayNum.length; i++){
        if(min > arrayNum[i]) min = arrayNum[i];
        else if(max < arrayNum[i]) max = arrayNum[i];
    }
    console.log(`Max: ${max}, Min: ${min}, Sum: ${max + min}`);
}
let arrayNumbers = [];
while (1){
    let varNum = +prompt("Enter numbers. Type 's' to stop");
    if(parseInt(varNum) >= 0 || parseInt(varNum) <= 0 ){
        arrayNumbers.push(parseInt(varNum));
    }else break;
}
console.log(arrayNumbers);
sumMaxMin(arrayNumbers);
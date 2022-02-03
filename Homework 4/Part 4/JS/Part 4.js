let oneToTwenty = [];
let output = "";
for(var i=1; i<=20; i++){
    oneToTwenty[i] = i;
    if(i%2 != 0) output += oneToTwenty[i] + " ";
    else output += oneToTwenty[i] + "\n";
}
console.log(output);
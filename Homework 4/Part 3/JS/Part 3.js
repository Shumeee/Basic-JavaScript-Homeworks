function makeSentence(sentence){
    let Sentence = sentence[0];
    for(j = 1; j < sentence.length; j++){
        Sentence = Sentence + " " + sentence[j];
    }
   console.log(Sentence);
}
let arraySentence = [];
let numOfElements = +prompt("Enter the ammount of elements you want to add in the array");
if(numOfElements >= 0 || numOfElements <= 0){
    for(i = 0; i < numOfElements; i++){
        arraySentence[i] = prompt("Add something to the array");
    }
    makeSentence(arraySentence);
}else alert("Invalid number for elements");
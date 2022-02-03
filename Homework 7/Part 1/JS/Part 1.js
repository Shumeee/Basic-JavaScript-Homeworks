let p = document.getElementsByTagName("p");
let myButton = document.getElementById("button");
let dogName = document.getElementById("dogName");
let dogKind = document.getElementById("dogKind");
let dogSentence = document.getElementById("dogSentence");
myButton.addEventListener("click", function(){
    let animal = {
        name : dogName.value,
        kind : dogKind.value,
        talk : dogSentence.value,
        speak : function(){
            p[0].innerHTML = `${this.kind} says: "${this.talk}"`;
        }
    };
    animal.speak();
});

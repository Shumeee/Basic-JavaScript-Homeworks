let myTitle = document.getElementById("myTitle");
myTitle.innerText = "I changed this title";

let paragraph = document.getElementsByClassName("paragraph");
paragraph[0].innerText = "I also changed this paragraph";
paragraph[1].innerText = "I also changed the second paragraph";

let txt = document.getElementsByTagName("text");
txt[0].innerText = "This text class is changed";

let h1 = document.getElementsByTagName("h1");
h1[1].innerText = "I am changing the h1 tag here";

let h3 = document.getElementsByTagName("h3");
h3[0].innerText = "The h3 tag here changed as well";
console.log(h3);


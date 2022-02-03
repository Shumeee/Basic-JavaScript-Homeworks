function tellStory(x){
    let sentence = `This is ${x[0]}. ${x[0]} is a nice person. Today they are ${x[1]}. They are ${x[2]} all day. The end.`;
    console.log(sentence);
}
let nameArray = prompt("Enter name");
let moodArray = prompt("Enter mood");
let activityArray = prompt("Enter activity");
let array = [];
array.push(nameArray, moodArray, activityArray);
tellStory(array);
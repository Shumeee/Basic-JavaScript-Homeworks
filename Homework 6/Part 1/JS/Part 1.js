let array = [1, 2, 3, 4, 5];
let list = document.getElementById("list");
let text = document.getElementById("text");
let sum = 0;
for(let count of array){
    sum += count;
    list.innerHTML += `<li>${count}</li>`;
}
for(let count of array){
    document.write(`${count}`);
    if(count < array.length) document.write(` + `);
    else document.write(` = ${sum}`);
}

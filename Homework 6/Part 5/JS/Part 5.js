let numRows = +prompt("Enter the number of rows");
let numCols = +prompt("Enter the number of collums");
let table = document.getElementById("table");
// tableF(numRows, numCols, body);
for(let i=1; i<=numRows; i++){ 
    let trr = document.createElement("tr");
    for(let j=1; j<=numCols; j++){ 
        trr.innerHTML += `<td>Row ${i} Column ${j}</td>`;  
    }
    table.appendChild(trr);
}

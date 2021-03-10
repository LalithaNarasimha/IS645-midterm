//q3

function printTable(num){
    const table = document.createElement("table");
    table.border = 1;
		table.style.borderColor = "black";
		table.style.textAlign = "center";
    for(let i =0;i<num+1;i++){
      const tableRow = document.createElement("tr");
			for(let j =0; j<num+1; j++){
      	let data = "";
    		const tableData = document.createElement("td");
    		if(i == 0 && j == 0) {
            		tableData.textContent = null;
        }
        else if(i == 0 && j != 0){
        		tableData.textContent = j;
            tableData.style.backgroundColor = "yellow";
        }else if(i != 0 && j == 0){
        		tableData.textContent = i;
            tableData.style.backgroundColor = "yellow";
        }
        else {
        				if(j == 1){
                     tableData.textContent = i;
                     if(i == 1){
                     		tableData.style.backgroundColor = "yellow";
                     }
                }
                else{
                     tableData.textContent = i*j;
                     if(i == j) {
                     	tableData.style.backgroundColor = "yellow";
                     }
                }
        }
        tableData.border = 1;
        tableData.width = '25px';
      	tableRow.appendChild(tableData);
      }
      table.appendChild(tableRow);
    }
    document.getElementById("output").appendChild(table);
}

let number = parseInt(prompt("Enter a valid number"));
printTable(number);
console.log("Data Collections!!")

//My previous code:
let cell1 = ("ID")
let cell2 = ("Name")
let cell3 = ("Ocupation")
let cell4 = ("Age")

console.log(cell1, cell2, cell3, cell4);
let row1 = ("\n42, Bruce, Knight, 41")
let row2 = ("\n57, Bob, Fry Cook, 19")
let row3 = ("\n63, Blaine, Quiz Master, 58")
let row4 = ("\n98, Bill, Doctor’s Assistant, 26")
console.log(row1, row2, row3, row4)

//Refractured Code
let csvStr = ["ID, Name, Occupation, Age\n42, Bruce, Knight, 41\n57, Bob, Fry Cook, 19\n63, Blaine, Quiz Master, 58\n98, Bill,Doctor's Assistant, 26"]
let table = csvStr.join(",");

console.log(table);

/////////
let numColumns = ["ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"]



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
let table = csvStr.join();

console.log(table);

///////
// }
// Part 2 Expanding Functionality

const numColumns = ['ID', 'Name', 'Occupation', 'Age',]
numColumns.length = 4
console.log(numColumns);


//BELOW ARE ALL OF MY ATTEMPTS AND THEN A SECOND POSSIBLE SOLUTION TO PART 2

// const numColumns1 = ['42', 'Bruce', 'Knight', '41']
// numColumns1.length = 4
// console.log(numColumns1);
// const numColumns2 = ['57', 'Bob', 'Fry Cook', '19']
// numColumns2.length = 4
// console.log(numColumns2);
// const numColumns3 = ['63', 'Blaine', 'Quiz Master', '58']
// numColumns3.length = 4
// console.log(numColumns3);
// const numColumns4 = ['98', 'Bill', 'Doctor\'s Assistant', '26']
// numColumns4.length = 4
// console.log(numColumns4);
// // let array = [numColumns + numColumns1+ numColumns2 ];
// // let csv = array.split(", ");
// // console.log(csv[0]);
// // let allcolumns = numColumns3 + numColumns4
// // for (let i = 0; i < allcolumns; i++) {
// 	console.log(allcolumns[i]);
// }
// let allcolumns = [
//     ["ID", "Name", "Occupation", "Age"],
//     ["42", "Bruce", "Knight", "41"],
//     ["57", "Bob", "Fry Cook", "19"],
//     ["63", "Blaine", "Quiz Master", "58"],
//     ["98", "Bill", "Doctor’s Assistant", "26"]
// ];
// console.log (allcolumns)


//     const ID = ["42", "57", "63", "98"]
//     const Name = ["Bruce", "Bob", "Blaine", "Bill"]
//     const Occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctor's Assistant"]
//     const Age = ["41","19","58","26"]

//     const allcolumns1 = []

//     ID.forEach((n, i) => {
//         allcolumns1.push(
//         {
//           IDs: n,
//           Names: Name[i],
//           Job: Occupation[i]
//           Ages: Age[i]
//         }
//       )
//     })

//     console.log(allcolumns1);




const str = ['ID', 'Name', 'Occupation', 'Age']
const Name = ["Bruce", "Bob", "Blaine", "Bill"]
const Occupation = ["Knight", "Fry Cook", "Quiz Master", "Doctor's Assistant"]
const Age = ["41", "19", "58", "26"]
let all = str.concat(Name, Occupation, Age); 

let numOfCols = 0;
let currentRow = 1

const rowArr = []

for (let i = 0; i < all.length; i++) {

    if (all[i] === '*') {
        currentRow++
        continue
    }

    if (all[i] === ',') {
        continue; // this allows us to skip the iteration and not be able to reach the push statement below 
    }
//  lines = all.split()

    rowArr.push(all[i])
    numOfCols++
}

console.log(rowArr, numOfCols)

//Part 3 //I can not figure how to get this result without hard coding.  I tried spliting the above formulas into differnt rows but I can not.
let array = 
[["ID", "Name", "Occupation", "Age"], 
["42", "Bruce", "Knight", "41"], 
["57", "Bob", "Fry Cook", "19"], 
["63", "Blaine", "Quiz Master", "58"], 
["98", "Bill", "Doctor’s Assistant", "26"]]

//Part 4 I can not figure how to get this result.

// const obj = {array}
// console.log (obj.keys)

// Input array
let arr = [["ID", "Name", "Occupation", "Age"], 
["42", "Bruce", "Knight", "41"], 
["57", "Bob", "Fry Cook", "19"], 
["63", "Blaine", "Quiz Master", "58"], 
["98", "Bill", "Doctor’s Assistant", "26"]]
let obj = Object.fromEntries(arr);
console.log(obj);

//Hard coded 
objects1 = {}
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];
console.log(objects1)
//Part 5



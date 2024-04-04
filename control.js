//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
const array =(numbers)=>{
    let newArray= [];
    let number1 = numbers.slice(0,4)
    let number2 = numbers.slice(-2)
    for(let num of number1){
        const multiplyByItself =num*num;
        newArray.push(multiplyByItself)
    }
    for(let num of number2){
        const added = num+10
        newArray.push(added)
    }
    return newArray;
}
console.log(array([2,3,4,5,6,7,8,9]))

//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
const arrNums = [1,2,3,4,5,6,7,8,9]
   let i=0;
   while(i< arrNums.length){
    if (arrNums[i]===arrNums[3])
           {break;}

       console.log(arrNums[i]);
   i++;}

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function Fruits(array) {
 for (let i = 0; i < array.length; i++) {
 if (i === 1) {
 continue; }
 console.log(array[i]); } }
let fruits = ['apple','plum','banana','strawberries','kiwi'];
Fruits(fruits);

// Question 4: Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrayWords(array)
{ for (let i = 0; i < array.length; i++) {
    console.log(array[i]); } }
    arrayWords(["Hannah","Konemi","Pempho","Tina"]);

//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
function reverseMyString(str){
let reversedString = "";
let i = str.length - 1;
    while (i >= 0)
    { reversedString += str[i]; i--; }
     return reversedString; };

console.log(reverseMyString("My name is Hannah"));
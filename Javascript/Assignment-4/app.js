// Question Start
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
//  Answer Start 
// var array=[[],[]];

// Question Start
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1
//  Answer Start 

// var array=[[0,1,2,3],[1,0,1,2],[2,1,1,0]];

// console.log(array);

// Question Start
// 3. Write a program to print numeric counting from 1 to 10.
//  Answer Start 

// for(var i=1;i<=10;i++){
//     console.log(i)
// }

// Question Start
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

//  Answer Start 
// var Table=+prompt("Enter a Number to show its multiplication table");
// var Lenght=+prompt("Enter Lenght multiplication table");
// console.log(`Multiplication table of ${Table} Lenght ${Lenght}`)
// for(var i=1; i<=Lenght;i++){
//     console.log(`${Table} X ${i} = ${Table*i}`);
// }

// Question Start
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

//  Answer Start
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i=0; i<fruits.length;i++){
//     document.write(`${fruits[i]} <br>`)
   

// }
// document.write("<br>");
// for(var i=0; i<fruits.length;i++){
    
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`);

// }

// Question Start
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//  Answer Start
// a.  

// var arry=[];
// for(var i=1; i<=15; i++){
//  arry.push(i)
   
// }
// document.write(arry);
// var array =[];
// for(i=10;i>=1;i--){
//     array.push(i)
    
// }
// document.write(array)

// var even=[];
// for(i=0;i<=20;i++){
   
//    if(i%2==0){
//     even.push(i);
// }
    
// }
// document.write(even);
// var odd=[];
// for(var i=0; i<=20;i++){
//     if(i%2!==0){
//         odd.push(i);
//     }
// }
// document.write(odd);

// var series=[];
// for(i=2; i<=20;i+=2){
    
//     series.push(`${i}K`);
// }
// document.write(series);

// Question Start
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

//  Answer Start
// var arry= ["cake","Apple pie","cookie","chips","patties"];
// var a= prompt ("helo munim bakery's what do you want to search?");
// var flag=false;
// for(var i=0; i<arry.length; i++){
//   if(a==="cake"||a==="Apple pie"||a==="cookie"||a==="chips"||a==="patties")
//   {
//     flag=true;
//   }
// }
// if(flag){
//   console.log(`${a} is available at ${arry.indexOf(a)} index in our bakery`)
// }
// else{
//   console.log(`sorry ${a} is not available in our bakery `)
// }


// Question Start
// 8. Write a program to identify the largest number in the
// given array.
// var arry = ["24","53", "78", "91", "12"];
// var num=arry[0];
// for(i=0; i<arry.length;i++){
//     if(num<arry[i]){
// num=arry[i];
//     }
// }
// document.write(`Array items:${arry} <br> The Largest number is ${num}`);
//  Answer Start

// Question Start
// 9. Write a program to identify the smallest number in the
// given array.

// var arry = ["24","53", "78", "91", "12"];
// var num=arry[0];
// for(i=0; i<arry.length;i++){
//     if(num>arry[i]){
// num=arry[i];
//     }
// }
// document.write(`Array items:${arry} <br> The Smallest number is ${num}`);
//  Answer Start
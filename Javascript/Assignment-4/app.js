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

// Question Start
    // 10. Write a program to print multiples of 5 ranging 1 to 
// 100.


//  Answer Start
// var arry=[];
// for (i=1; i<=100;i++){
//   if (i%5===0){
//     arry.push(i)
//   ;
// }}
// console.log(arry)

//</////////////////////////............=>> STRING METHODS  Chapter 21 to cahpter 25

// Question Start

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

//  Answer Start
// var firstName=prompt ("Enter first name");
// var lastName=prompt("Enter last Name");
//console.log(firstName+lastName)
//console.log(firstName.concat(lastName));
// console.log(firstName+=lastName)

// Question Start
// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
//  Answer Start
// var a=prompt("Enter Input");
// document.write("My favirote Phone is: "+a);
// document.write("<br>Length Of String: "+a.length);

// Question Start
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
//  Answer Start
// var a="Pnakistani";
// document.write("String: "+a +"<br>");
// document.write("Index Of 'n': "+a.indexOf("n") +"<br>");


// Question Start
// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
//  Answer Start

// var a="Hello World";
// document.write("String : " +a+"<br> Last Index of '1': "+a.lastIndexOf("l") );

// Question Start
// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
//  Answer Start
// var a="Pakistani";
// document.write("String :"+a+ "<br> Character of Index 3:"+a.charAt());

// Question Start
// 6. Repeat Q1 using string concat() method.

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
//  Answer Start
// var user1=prompt("Enter First Name");
// var user2=prompt("Enter Last Name");
// document.write(user1.concat(user2));

// Question Start
// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
//  Answer Start

// var a="Hyderabad";
// document.writeln("City:"+a+"<br> After replacement:");

// for(var i=0; i<a.length;i++){
// if(a.slice(i ,i+5)==="Hyder"){
//     a=a.slice(0,i)+"Islam"+a.slice(i+5)
// }

// }
// document.write(a);

// Question Start
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// answer 
// var a="Ali and Sami are best friends. They play cricket and football together";
// for(i=0;i<a.length;i++){
//     if(a.slice(i,i+3)==="and"){
//         a=a.slice(0,i)+"&"+a.slice(i+3);
//     }
// }
// document.write(a);

// Question Start
// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.
// answer 
// var num=472;
// console.log(`Value : ${num}`)
// console.log("Type "+ typeof(num.toString()))
// console.log(`Value : ${num}`)
// console.log("Type "+ typeof(num))

// Question Start
// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.
// answer 
// var a=prompt("Enter Input");
// console.log("USer Input "+a);
// console.log("UPPER Input "+a.toUpperCase());

// Question Start
// 11. Write a program that takes user input. Convert and 
// show the input in title case.
// answer 
// var a=prompt("Enter Input");
// document.write("User Input "+a+"<br>");
// a=a[0].toUpperCase() +a.slice(1);
// document.write(a);

// var a=prompt("Enter Input");
// document.write("User Input "+a+"<br>");
// splice(1) ka meaning hy baki ka sb lylo 
// a=a[0].toUpperCase()+a.slice(1);
// document.write("Tittle Case "+a);

// Question Start
// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// answer 
// var num=35.36;
// console.log("Number : " + num);
// var a=num.toString().replaceAll(".","")
// console.log("Result : " + a);

// Question Start
// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

// answer 
// var a=prompt("Input User");
// var flag=false;
// for(var i=0; i<a.length; i++){
//     if(a[i]==="!"|| a[i]==="@" ||a[i]==="," ||a[i]==="."){
       
// flag=true;
//     }
   
// }
// if(flag){
//     document.write("Invalid ");
// }
// else{
//     console.log(a);
// }

// Question Start
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example

// answer 
// var arry= ["cake","Apple pie","cookie","chips","patties"];
// var a= prompt ("helo munim bakery's what do you want to search?");
// a=a.toLowerCase();
// var flag=false;

// for(var i=0; i<arry.length; i++){
//     // var currentItem=arry[i];
    
//   if(a===arry[i])
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
// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// answer 
// var user=prompt("Enter Password");

// Question Start
// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// answer 
// var university ="University of Karachi";
// var universityarry=university.split("");
// for(var i=0; i<universityarry.length;i++){
//     console.log(universityarry[i]);
// }

// var university ="University of Karachi";
// var arryuni=university.split("")
// console.log(arryuni);
// for(var i=0; i<arryuni.length; i++){
//     console.log(arryuni[i]);
// }
// console.log(university);


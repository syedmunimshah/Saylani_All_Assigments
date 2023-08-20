// // <----(Chapter 6 to 9)---->


// // <----(Qno 01)---->
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// // <----(Answer 01)---->
// var a=prompt("Enter a Number?");
// document.write("Result: <br>");
// document.write("The Value of a is:"+ a);
// document.write("<br> ........................................<br> ");
// var b=++a;
// document.write("<br>The Value of a++ is:"+ b);
// document.write("<br>Now The Value of a++ is:"+ a);
// a=++a;
// document.write("<br><br><br>The Value of a++ is:"+ b);
// document.write("<br>Now The Value of a is:"+a);


// a=--a;
// document.write("<br><br><br>The Value of a-- is:"+ a);
// document.write("<br>Now The Value of a is:"+a);

// document.write("<br><br><br>The Value of a-- is:"+ a);
// a=--a;
// document.write("<br>Now The Value of a is:"+a);


// // <----(Qno 02)---->

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// // <----(Answer 02)---->

// document.write("a is "+a);
// document.write("<br> b is "+b);
// document.write("<br> result is "+result);


// // <----(Qno 03)---->
// 3. Write a program that takes input a name from user &
// greet the user.
// // <----(Answer 03)---->
// var a =prompt("Welcome Your Name Here Please?");
// document.write("Welcome " + a + " To The Page ")

// // <----(Qno 05)---->
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// // <----(Answer 05)---->

// var num = prompt("Enter Number", "0") 
// var num = parseInt(num) || 5;
// document.write('<table border="1" cellspacing="0">');
// for (i = 1; i <=10; i++) {
//   document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
// }






// // <----(Qno 06)---->

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)



// // <----(Answer 06)-->--



//  var subject1 = prompt("Enter the name of the first subject:");
//  var subject2 = prompt("Enter the name of the second subject:");
//  var subject3 = prompt("Enter the name of the third subject:");


//  var totalMarks = 100;
//  var totalMarks1=100*3;


//  var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));


//  var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
//  var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));


//  var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
//  var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
//  var eachPercentage1=(obtainedMarks1/totalMarks)*100 +"%";
//  var eachPercentage2=(obtainedMarks2/totalMarks)*100 +"%";
//  var eachPercentage3=(obtainedMarks3/totalMarks)*100 +"%";


//  document.write("<table border='0'>");
//  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentege</th></tr>");
//  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 +"</td><td>"+ eachPercentage1  +"</td></tr>");
//  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>"+ eachPercentage2  +"</td></tr>");
//  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 +"</td><td>"+ eachPercentage3  +"</td></tr>");
//  document.write("<tr><th>" +"        "+ "</th><th>" + totalMarks1 + "</th><th>" + totalObtainedMarks +"</th><th>"+ percentage.toFixed(2) + "%</th></tr>");

//  document.write("</table>");





// <----(Chapter 9 to 11)---->
// <----(Qno 01)---->
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// // <----(Answer 01)-->--
// var city = prompt('Enter your city')
// if(city === 'Karachi'){
//     alert('“Welcome to city of lights”')

// }

// <----(Qno 02)---->

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// // <----(Answer 02)-->--
// var gender = prompt('Enter your gender')
// if(gender === 'male'){
//     alert('Good Morning Sir')
// }else("Good Morning ma'am")

// <----(Qno 03)---->

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// // <----(Answer 03)-->--


// var color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");

// Converting input to lowercase for case-insensitive comparison
// color = color.toLowerCase();



// if (color === "red") {
//     document.write("<p>STOP! The road signal is RED.</p>");
// } else if (color === "yellow") {
//     document.write("<p>CAUTION! The road signal is YELLOW.</p>");
// } else if (color === "green") {
//     document.write("<p>GO! The road signal is GREEN.</p>");
// } else {
//     document.write("<p>Invalid input. Please enter a valid color.</p>");
// }



// / <----(Qno 04)---->

// Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”
// // <----(Answer 04)-->--

// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// // Checking if the remaining fuel is less than 0.25 litres
// if (remainingFuel < 0.25) {
//     document.write("<p>Please refill the fuel in your car.</p>");
// } else {
//     document.write("<p>You have enough fuel in your car.</p>");
// }

// / <----(Qno 05)---->

// // // <----(Answer 05)-->--
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// / <----(Qno 07)---->
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// // // <----(Answer 07)-->--
// Store a secret number (ranging from 1 to 10)
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if user's guess is correct or close
// if (userGuess === secretNumber) {
//     document.write("<p>Bingo! Correct answer.</p>");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     document.write("<p>Close enough to the correct answer.</p>");
// } else {
//     document.write("<p>Sorry, your guess is not correct.</p>");
// }


// / <----(Qno 08)---->

// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

// // // <----(Answer 08)-->--

// var a=prompt("Give number");

// if(a%3==0)
// {document.write("Yes divided By 3")

// }
// else{
//     document.write("No divided By 3")
// }

// / <----(Qno 09)---->
// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// // // <----(Answer 09)-->--

// var InputUser=prompt("Give me Input ? even number or an odd number");

// if(InputUser%2==0){
//     document.write("Even Numer");
// }
// else if(InputUser%2==1){
//     document.write("Odd Numer");
// }
// else{
//     document.write("Give Me Even number or an Edd number");
// }

// / <----(Qno 10)---->
// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// // // <----(Answer 10)-->--
// var T=prompt("Give Me Temperature");

// if(T>40){
//     document.write("<p>It is too hot outside</p>")

// }
// else if(T>30){
//     document.write("<p>The Weather today is Normal.</p>")
// }
// else if(T>20){
//     document.write("<p>Today’s Weather is cool.</p>")
// }
// else if(T>10){
//     document.write("OMG! Today’s weather is so Cool</p>")
// }
// else{
    
//     document.write("Incorrect </p>")
// }



// // <----(Chapter 12 to 13)---->



// / <----(Qno 1)---->
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// // // <----(Answer 1)-->--
// var a=prompt("Give Me character (number or string)");

// if(a>="0" && a<="9"){
//     document.write("It is number");
// }
// else if(a>="A" && a<='Z'){
//     document.write("It is uppercase letter");

// }
// else if(a>='a' && a<='z'){
//     document.write("It is lower case letter");
// }
// else{
//     document.write("Invalid");
// }


// / <----(Qno 2)---->
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// // // // <----(Answer 2)-->--
// var num1=prompt("Give Me integer Number1");
// var num2=prompt("Give Me integer Number2");
// if(num1>num2){
//     document.write("integer Number1 is larger");
// }
// else if(num2>num1){
//     document.write("integer Number2 is larger");
// }
// else{
//     document.write("Two integers are equal");
// }

// / <----(Qno 3)---->
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// // // // <----(Answer 3)-->--
// var num1=+prompt("Give Me integer Number1");
// if(num1>'0'){
//     document.write("Positive");
// }
// else if(num1<'0'){
//     document.write("Negative");
// }
// else {
//     document.write("Zero");
// }

// / <----(Qno 4)---->

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

    
// // // // <----(Answer 4)-->--
// var character=prompt("Give Me character").toLowerCase();

// if(character.length===1 && character==='a'|| character==='e'||character==='i'||character==='o'||character==='u'){
//     document.write("Vowel");

// }
// else{
//     document.write(" Not Vowel");
// }

// / <----(Qno 5)---->
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// // // // <----(Answer 5)-->--

// var correctPassword="correctPassword";
// var UserPassword=prompt("Give Me Password");

// if(correctPassword===UserPassword){
//     document.write("Correct! The password you entered matches the original password");
// }
// else{
//     document.write("Incorrect password! The password you entered Not matches the original password");
// }

// / <----(Qno 6)---->
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// // // // <----(Answer 6)-->--


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// / <----(Qno 7)---->

// // // // <----(Answer 7)-->--

// var date=moment("20111031", "YYYYMMDD").fromNow();
// console.log(date);

// Assignment # 26-30 start 

// question 
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Answer 
// var a=prompt("Enter Number","Positive Number")
// console.log(a);
// console.log(Math.round(a))
// console.log(Math.ceil(a))
// console.log(Math.floor(a))

// question 
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Answer 
// var a=prompt("Enter Number","Negative Number")
// console.log(a);
// console.log(Math.round(a))
// console.log(Math.ceil(a))
// console.log(Math.floor(a))

// question 
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Answer 

// var a=-4;
// console.log(Math.abs(a))
// var b=5;
// console.log(Math.abs(b))

// question 
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// Answer 
// var random=Math.floor(Math.random()*2);
// console.log(random)
// if(random == "0"){
//     console.log("random Device is : 4")
// }else{
//     console.log("random Device is : 6")
// }


// question 
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Answer 
// var random=Math.ceil(Math.random()*2);
// console.log(random)
// if(random == "1"){
//     console.log(random)
//         console.log("random Coin Value is : Head")
//     }else{
//         console.log(random)
//         console.log("random Coin Value is : Tail")
//     }


// question 
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// Answer 

// for(var i=1; i<=100;i++){
    // var random=Math.floor(Math.random()*100+1);
// console.log(random)
// }

// question 
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// Answer 

// var a=+prompt("Enter Weight Your","Weight dalo");
// var a=prompt("Enter Weight Your","Weight dalo");
// console.log(a);
// var a=parseFloat(prompt("Enter Weight Your","Weight dalo"));
// console.log(a);

// question 
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// Answer 
// var user=prompt("Enter Number","1 to 10");
// var random=Math.ceil(Math.random()*10);
// if(user==random){
//     console.log("congratulate")

// }
// else{
//     console.log("NOt Match")
// }
// console.log(random)

// Assignment # 26-30 end 

// Assignment # 31-35 start

// question 
// 1. Write a program that displays current date and time in 
// your browser.


// Answer 
// console.log(new Date());
// console.log(moment().format());

// question 
// 2. Write a program that alerts the current month in words. 
// For example December.
// Answer 
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d=new Date();
// console.log(month[d.getMonth()]);
// console.log(moment().format("MMMM"));

// question 
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
// Answer 

// console.log(moment().format("MMM"));
// question 
// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
// Answer 
// alert("Its Fun Day"),(console.log(moment().format("dddd")))

// question 
// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
// Answer 
// var d=moment().format("D")
// if(d<16){
//     console.log("First fifteen days of the month");

// }
// else{
//     console.log("Last days of the month");
// }
// console.log(d)
// var a=new Date().getDate();
// if(a<16){
//         console.log("First fifteen days of the month");
    
//     }
//     else{
//         console.log("Last days of the month");
//     }
// console.log(a);
// Assignment # 31-35 end

//<---------------- Assignment # 13-15/////----------->

// Question 1 
// 1. Declare an empty array using JS literal notation to store
// student names in future.

// Answer 1
// var a=[];

// 3. Declare and initialize a strings array.
// Answer 3
// var a=[""];

// 4. Declare and initialize a numbers array.
// Answer 4
// var a=[1,2,3,4,5];

// 5. Declare and initialize a boolean array.
// Answer 5
// var a=[true,false];

// 6. Declare and initialize a mixed array.
// Answer 6
// var a=["Ali",1,true];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// Answer 7
// var a = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("<h4> Qualifications: </h4>");
// document.write("<ol><h1><li>" + a[0] + "</li></h1> <li><h1>" + a[1] + "</h1></li> <li><h1>" + a[2] + "</h1></li> <li><h1>" + a[3] + "</h1></li> <li><h1>" + a[4] + "</h1></li> <li><h1>" + a[5] + "</h1></li><li><h1>" + a[6] + "</h1></li> <li><h1>" + a[7] + "</h1></li></ol>");


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// Answer 8

// var a =["Michal","John","Tony"];
// var b=[320,230,480,];
// var markEach=500;


// var d=b[0]/markEach*100+"%";
// var c=b[1]/markEach*100+"%";
// var e=b[2]/markEach*100+"%";

// document.write("Score of "+a[0]+" is"+b[0]+".Percentange: " +d +"</br>");
// document.write("Score of "+a[1]+" is"+b[1]+".Percentange: " +c +"</br>");
// document.write("Score of "+a[2]+" is"+b[2]+".Percentange: " +e +"</br>");



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// Answer 9
// var color=["red","blue","green"];
// document.write("<h2>Actual ARRAY: "+color+"</h2></br>");
// var colorAddStart=prompt("Enter what color he/she wants to add to the beginning?");
// var colorAddStart1=prompt("Enter what color he/she wants to add to the beginning?");
// { 
// color.unshift(colorAddStart,colorAddStart1);
// or 
// color.splice(0,0,colorAddStart,colorAddStart1);
// document.write(color);
// }
// var colorAddEnd=prompt("Enter what color he/she wants to add to the end?");
// color.push(colorAddEnd);
// document.write(color);
// color.shift();
// document.write(color);
// color.pop();
// document.write(color);

// var colorIndex=prompt("Enter which index he/she wants to add a color?");
// var colorName=prompt("Enter which index he/she wants to add a color name?");
// color.splice(colorIndex,1,colorName);
// document.write(color);

// var colorIndexDelete=prompt("Enter which index he/she wants to Delete a color?");
// var colorDeleteRange=prompt("Enter how many colors he/she wants to delete");
// color.splice(colorIndexDelete,colorDeleteRange);
// document.write(color);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
//  Answer 
// var a=[320,230,480,120];
// document.write("Scores of Student : 320,230,480,120 <br>");
// a.sort();
// document.write("Ordered Scores of Student :" +a);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// Answer 
// document.write("<h3>Cities List:<br>");
// var CityName=["KARACHI","LAHORE","ISLAMABAD","QUETTA","PESHAWAR"];
// document.write(""+CityName+"</h3><br>");
// document.write("<h2>Selected Cities List:</h2><br>");
// var a=CityName.slice(2,4);
// document.write(a);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// Answer 
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: " +arr + "<br> <br> string:<br>");
// var b= arr.join(" ");
// document.write(b);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Answer 
// var arry=[];
// document.write("Device:<br>")
// var a=arry.push("Keyboard");
// var r=arry.push("mouse");
// var t=arry.push("printer");
// var y=arry.push("monitor");
// document.write(arry);

// var a=arry.shift();
// document.write("<br><br>Out:<br>"+a+"<br>");
// var b=arry.shift();
// document.write("Out:<br>"+b+"<br>");
// var c=arry.shift();
// document.write("Out:<br>"+c+"<br>");
// var e=arry.shift();
// document.write("Out:<br>"+e+"<br>");


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// Answer 
// var arry=[];
// document.write("Device:<br>")
// var a=arry.unshift("monitor");
// var b=arry.unshift("printer");
// var c=arry.unshift("mouse");
// var d=arry.unshift("Keyboard");
// document.write(arry+"<br>");

// var e=arry.pop();
// document.write("<br>Out:<br>"+e+"<br>");
// var f=arry.pop();
// document.write("Out:<br>"+f+"<br>");
// var g=arry.pop();
// document.write("Out:<br>"+g+"<br>");
// var g=arry.pop();
// document.write("Out:<br>"+g+"<br>");


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// Answer 
var arry=[];
var a=arry.unshift("Sony & Haier");
var b=arry.unshift("Nokia");
var c=arry.unshift("Motorola");
var d=arry.unshift("Samsung");
var e=arry.unshift("Apple");
// document.write(arry);
document.write("<select> <option disabled selected> Select Option </option> <option> " +arry[0] + "</option> <option>"+arry[1] +"</option><option>"+arry[2]+"</option> <option>"+arry[3]+"</option> <option>"+arry[4]+"</option> </select>")



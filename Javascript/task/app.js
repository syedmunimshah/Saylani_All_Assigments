// palindromes Start 
// var a =prompt("Enter palindromes");
// var word="";
// for(var i=a.length-1; i>=0;  i--){
//     word +=a[i];
// }
// if(a==word)
// {
// document.write(`palindromes`);
// }
// else{
//     document.write(`Not palindromes`);
// }
// palindromes end

// Flag use 
// var arr=["karachi","queta","Islamabad","peshawar","london"];
// flag=false;
// for(var i=0; i<arr.length; i++){
//     if(arr[i]=="Islamabad"){
//         flag=true;
//     }
// }
// if(flag){
//     console.log(`mil gaya`)
// }
// else{
//     console.log(`NHi gaya`)
// }

// { 12345 7} mising number find 

// hint {z index mai num 1 add horaha hy or print a[i+1] mai next ko print karaha hy. or a[i] mai jo z index ki value mai hy number wo chal raha hy tw 2 ka difference araha hy.}
// var num=[1,2,3,4,6,8];

// for(var i=0; i<num.length; i++){
//   if(num[i+1]- num[i]===2){
//     console.log(num[i]+1);
//   }
// }

// Even And Odd Numbers Add to Region start

// var num=[1,2,3,4,5,6,7,8,9,10];
// var Even=[];
// var Odd=[];
// for( var i=0;i<num.length;i++){
// if(num[i]%2===0){
//     Even.push(num[i]);

// }
// else{
//     Odd.push(num[i]);
// }}
// console.log(Even);
// console.log(Odd);



// given numbers 1 to 100 .Then print Divided by 3. and print divided by 5. and print both divided by multiply 3 and 5 ?
// for (var i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//         console.log("ALi Shah==> Divided By '15' " + i);
//     }
//     else if (i % 5 === 0) {
//         console.log("Shah==> Divided By '5' " + i);
//     }
//     else if (i % 3 === 0) {
//         console.log("ALi==> Divided By '3' " + i);
//     }
//     else {
//         console.log(i);
//     }

// }

// Find the number Minimum and maximum in series start 

// var num=[2,3,4,50,6,0,8,9,10,2,20];
// document.write("Minimum :: ===>    "+num);
// var min=num[0];

// // document.write(`<br>min ${min} <br>`);
// for(var i=0; i<num.length; i++){
//     if(num[i]<min){
//         min=num[i];
//     }

// }
// document.write( "<br>Answer: " +min +"<br>")

// var num=[2,3,4,50,6,0,8,9,10,2,20];
// document.write("Maximum :: ===>    "+num);
// var max=num[0];

// // document.write(`<br>Max ${max} <br>`);
// for(var i=0; i<num.length; i++){
//     if(num[i]>max){
//         max=num[i];
//     }

// }
// document.write("<br> Answer: " +max);



// Find the number Minimum and maximum in series end


// var Name="abdul";
// var CapName= Name.slice(0,1).toLocaleUpperCase();
// var Res=CapName + Name.slice(1);
// document.write(Res);

// var a= "i am good boy";
// for(var i=0; i<a.length; i++){
//   if(a.slice(i,i+4) ==="good"){
//     a=a.slice(0,i)+"bad" + a.slice(i+4);
//   }

// }
// console.log(a);





// Method start 21 to 30
//  chapter 21 start 
//  var sentence ="hello Ali This is your first code";
//  var check=sentence.toUpperCase();
//  console.log(check);
//  console.log(check=sentence.toUpperCase());
// //  new string bana diya hy replace ni kiya 
//  console.log(sentence);

//  var sentence ="heLlo Ali This is your first code";
//  var check=sentence.toLowerCase();
//  console.log(check=sentence.toLowerCase());
//  console.log(check);
// //   new string bana diya hy replace ni kiya 
//  console.log(sentence);
// //  chapter 21 end


//  chapter 22 start 

// var sentence ="hello Ali This is your first code";
// var SliceCopy=sentence.slice(6,9);
// console.log(SliceCopy=sentence.slice(6,9));
// jo copy hota hy wo hi return hoga (phely mai jo target karae ho, jaha tk karna ho target)
// console.log(SliceCopy);
// console.log(sentence);

//  chapter 22 end

//  chapter 23 start 

// var sentence ="hello Ali This is your first code";
// // var res=sentence.indexOf("Ali");
// return index number and agr ni find karta tw -1 return kardyga 
// // var res=sentence.indexOf("Alii"); 
// console.log(res);


//  chapter 23 End 

//  chapter 25 start 

// var sentence ="hello Ali This is your first code";
// var res= sentence.replace("hello","Hey");
// //  return new string 
// console.log(sentence);
// console.log(res);

// var sentence ="hello Ali This is hello your first hello code";
// var res= sentence.replaceAll("hello","Hey");
// //  return new string 
// console.log(sentence);
// console.log(res);


//  chapter 25 End 

//  chapter 26 start 

// The Math.round() method rounds a number to the nearest integer. 2.49 will be rounded down (2),
//  and 2.5 will be rounded up (3).
//  //The return value of each call to Math.round() is the rounded integer value.

// float ko int mai kartaa hy 4.49 sy tk ho tw 4 return karta hy and 4.5 or 4.9 py ho tw 5 kardyga /
// let a = Math.round(2.60);
// let b = Math.round(2.50);
// let c = Math.round(2.49);
// let d = Math.round(-2.60);
// let e = Math.round(-2.50);
// let f = Math.round(-2.49);

// var scoreAvg = Math.ceil(2.000001);
// console.log(scoreAvg)

// output is 3 

// var scoreAvg = Math.floor(2.999999);
// console.log(scoreAvg)
// output is 2 

//  chapter 26 End 

//  chapter 27 start 

// console.log(Math.random()*10);

// var a="25";
// console.log(typeof(a)) string 
// console.log(typeof(Number(a))) Number 
// console.log(typeof(a)) string 
// new string bana raha hy orignal ko change ni karta 

//  chapter 27 End 
// Method end 21 to 30

// Head And Tail Game Start

// var player1=prompt("Enter Player 1");
// var player2=prompt("Enter Player 2");
// var randomNumber=Math.floor(Math.random()*2);
// if(randomNumber===0){
//     console.log(player1+"Heads Win");
// }
// else{console.log(player2+"Tail Win");}

// (1000*60*60*24) =86400000
// var TodayDate=new Date();
// var userDate=new Date("11 March 2024");

// var diff=userDate.getTime()-TodayDate.getTime();
// var day=diff/(1000*60*60*24)
// var month=diff/(1000*60*60*24*30)

// var year =userDate.getFullYear()-TodayDate.getFullYear();
// console.log(Math.round(day) + "Days");
// console.log(Math.round(month) + "Month");
// console.log(Math.round(year) + "Year");

// Head And Tail Game End

// x! Factorial

// function fac(num){
//     var a=1;
// for (var i=num;i>0;i--){
//    a=i*a;
// }
//     return (a);
// }
// var num=+prompt("Enter Number ");
// console.log(fac(num));


// var arry = ['ghous',"ali" ,'ghous',"ghous", "ghous","ali"];

// var arry = ['ali','ali','ali','ali',"ali","ali","ghous"]
// for (var i = 0; i < arry.length; i++) {
//     // console.log(arry , i + 1)
//     // debugger
//     for (var j = i; j < arry.length; j++) {
//         // console.log(j)
//         console.log(arry[i] === arry[j]);
//         if (arry[i] === arry[j]) {
//             arry.splice(j,1)
//         }
//     }

// }
// console.log(arry)
// var arry = ['ali', 'ali', 'ghous'];

// for (var i = 0; i < arry.length; i++) {
//   for (var j = i + 1; j < arry.length; j++) {
//     if (arry[i] === arry[j]) {
//       for (var k = j; k < arry.length - 1; k++) {
//         arry[k] = arry[k + 1];
//       }
//       arry.pop();
//       j--;
//     }
//   }
// }

// console.log(arry);


function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "https://as2.ftcdn.net/v2/jpg/00/77/99/99/1000_F_77999958_tZYT7xWlSJewLgsMYY3CrAWvYITlWYTF.jpg";
    } else {
      image.src = "https://e7.pngegg.com/pngimages/922/441/png-clipart-creative-bulb-lightbulb-energy-saving-lamps-thumbnail.png";
    }
  }
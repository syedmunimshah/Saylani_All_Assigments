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

var a= "i am good boy";
for (var i=0; i<a.length; i++){
 if(a.slice(i,i+3)==="boy" ){
    a=a.slice(0,i)+ "Girl" +a.slice(i+3);
 }

}
console.log(a);







// Method start 21 to 30

// Method end 21 to 30



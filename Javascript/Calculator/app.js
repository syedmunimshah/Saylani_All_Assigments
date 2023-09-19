function storeData(v){
    var textValue=document.getElementById("Input_text");
   var oldValue=textValue.value;
   var findLength=oldValue.length;
   var lastval=oldValue[findLength-1];
   console.log(lastval)
   var oprsyn=["/","*","+","-","."];
   if(oprsyn.includes(v)){
    if(oprsyn.includes(lastval)){
var removeLast=oldValue.slice(0,-1);
textValue.value=removeLast+v;
console.log(removeLast)

    }
    else{
        textValue.value=oldValue+v;
    }
   }
   else{
    textValue.value=oldValue+v;
   }
    
    
}
function equal(){
    var textValue=document.getElementById("Input_text");
    var oldValue=eval(textValue.value);
    textValue.value=oldValue;
}
function cls(){
    document.getElementById("Input_text").value="";
}
function del (){
    var textValue= document.getElementById("Input_text");
    textValue.value=textValue.value.slice(0,textValue.value.length-1)

}
function percentage (){
    var textValue = document.getElementById("Input_text");
    var oldValue = "";
    var currentValue = parseFloat(textValue.value);
    if (!isNaN(currentValue)) {
        var result = (currentValue / 100).toString();
        textValue.value = result;
        // Update the oldValue variable
        oldValue = result;
    }

}



// function cal(num1, num2, sign) {
//     if(sign==="+"){
//         return num1 + num2;

//     }
//     else if(sign==="-"){
//         return num1 - num2;
//     }
//     else if(sign==="*"){
//         return num1 * num2;
//     }
//     else if(sign==="/"){
//         return num1 / num2;
//     }
//     else{
//         return `Wrong Input ${sign} Your Input `;
//     }


// }

// var num1=Number(prompt("Enter Number 1"));
// var num2=Number(prompt("Enter Number 2"));
// var sign=prompt("Enter Number sign","+ - * /");
// console.log(cal(num1, num2, sign));
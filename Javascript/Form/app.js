// var form=document.getElementById("form");
// form.addEventListener("Submit",function(event){
//     event.preventDefault()
//    var  FName=document.getElementById("FName").value;
// console.log(FName);
// })
function submit() {
    // e.preventDefault()
    var FName = document.getElementById("FName").value;

    var LName = document.getElementById("LName").value;
    var Number = document.getElementById("Number").value;
    var Email = document.getElementById("Email").value;
    var Date = document.getElementById("Date").value;
    var TextArea = document.getElementById("TextArea").value;
    var Select = document.getElementById("Select").value;
    var gender = document.getElementsByName("gender");

    for (var i = 0; i < gender.length; i++) {
        if(gender[i].checked){
            console.log(gender[i].value);

        }
        
    }
    
}

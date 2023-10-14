
function submit() {

    // document.getElementById("displayBox").style.display="inline"

    var FName = document.getElementById("FName").value;
    var LName = document.getElementById("LName").value;
    var Number = document.getElementById("Number").value;
    var Email = document.getElementById("Email").value;
    var Date = document.getElementById("Date").value;
    var TextArea = document.getElementById("TextArea").value;
    var Select = document.getElementById("Select").value;
    var gender = document.getElementsByName("gender");

    var flag = false;
    if (FName === "") {
        document.getElementById("FV").style.color = "rgb(126, 84, 255)";
        document.getElementById("FV").innerHTML = "<h6>*First Name is Required*</h6>";
        flag = true;
    }
    if (LName === "") {
        document.getElementById("FL").style.color = "rgb(126, 84, 255)";
        document.getElementById("FL").innerHTML = "<h6>*Last Name is Required*</h6>";
        flag = true;
    }

    if (Number === "") {
        document.getElementById("FN").style.color = "rgb(126, 84, 255)";
        document.getElementById("FN").innerHTML = "<h6>*Number is Required*</h6>";
        flag = true;
    }
    if (Email === "") {
        document.getElementById("FE").style.color = "rgb(126, 84, 255)";
        document.getElementById("FE").innerHTML = "<h6>*Email is Required*</h6>";
        flag = true;
    }

    if (Select === "Select City") {
        document.getElementById("FS").style.color = "rgb(126, 84, 255)";
        document.getElementById("FS").innerHTML = "<h6>*Select is Required*</h6>";
        flag = true;
    }

    if (Date === "") {
        document.getElementById("FD").style.color = "rgb(126, 84, 255)";
        document.getElementById("FD").innerHTML = "<h6>*Date is Required*</h6>";
        flag = true;
    }
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            flag = false;
            break;
        }
    }

    if (TextArea === "") {
        document.getElementById("FT").style.color = "rgb(126, 84, 255)";
        document.getElementById("FT").innerHTML = "<h6>*Commect is Required*</h6>";
        flag = true;
    } 
    if (!flag) {
        var Gender = document.getElementById("Gender");
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                Gender.innerHTML = "Gender : " + gender[i].value;
            }
        }

        var FName = document.getElementById("FName").value;

        var LName = document.getElementById("LName").value;
        var Number = document.getElementById("Number").value;
        var Email = document.getElementById("Email").value;
        var Date = document.getElementById("Date").value;
        var TextArea = document.getElementById("TextArea").value;
        var Select = document.getElementById("Select").value;
        var gender = document.getElementsByName("gender");

        var Gender = document.getElementById("Gender");
        for (var i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                // console.log(gender[i].value);

                Gender.innerHTML = `Gender : ${gender[i].value}`;

            }

        }


        var FistName = document.getElementById("FistName");
        FistName.innerHTML = `First Name : ${FName}`;

        var LastName = document.getElementById("LastName");
        LastName.textContent = `Last Name : ${LName}`;
        var Numbers = document.getElementById("Numbers");
        Numbers.innerHTML = `Number : ${Number}`;
        var Emails = document.getElementById("Emails");
        Emails.innerHTML = `Email : ${Email}`;
        var City = document.getElementById("City");
        City.innerHTML = `City : ${Select}`;
        var Dates = document.getElementById("Dates");
        Dates.innerHTML = `Date : ${Date}`;
        var Dates = document.getElementById("Dates");
        Dates.innerHTML = `Date : ${Date}`;

        var Commects = document.getElementById("Commects");
        Commects.innerHTML = `Commect : ${TextArea}`;

        document.getElementById("FName").value = "";
        document.getElementById("LName").value = "";
        document.getElementById("Number").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Date").value = "";
        document.getElementById("TextArea").value = "";
        var Select = document.getElementById("Select");
        Select.selectedIndex = 0;
        var gender = document.getElementsByName("gender");
        for (var i = 0; i < gender.length; i++) {
            gender[i].checked = false;
        }


        document.getElementById("FV").innerHTML = "";
        document.getElementById("FL").innerHTML = "";
        document.getElementById("FN").innerHTML = "";
        document.getElementById("FE").innerHTML = "";
        document.getElementById("FS").innerHTML = "";
        document.getElementById("FD").innerHTML = "";
        document.getElementById("FG").innerHTML = "";
        document.getElementById("FT").innerHTML = "";

    }
    
}

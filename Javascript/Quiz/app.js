var questions =
    [
        {
            question: 'What does HTML stand for?',
            option1: 'Hyperlinks and Text Markup Language',
            option2: 'Hypertext Markup Language',
            option3: 'Home Tool Markup Language',
            correctOption: "Hypertext Markup Language"
        },
        {
            question: 'Who is making the Web standards?',
            option1: 'Google',
            option2: 'The World Wide Web Consortium',
            option3: 'Microsoft',
            correctOption: "The World Wide Web Consortium"
        },
        {
            question: 'Choose the correct HTML element for the largest heading:',
            option1: '<heading>',
            option2: '<h6>',
            option3: '<h1>',
            correctOption: "<h1>"
        },
        {
            question: 'What is the correct HTML element for inserting a line break?',
            option1: '<linebreak>',
            option2: '<br>',
            option3: '<break>',
            correctOption: "<br>"
        },
        {
            question: 'What is the correct HTML for adding a background color?',
            option1: '<body bg="yellow">',
            option2: '<background>yellow</background>',
            option3: '<body style="background-color:yellow;">',
            correctOption: '<body style="background-color:yellow;">'
        },
        {
            question: 'Choose the correct HTML element to define important text:',
            option1: '<strong>',
            option2: '<b>',
            option3: '<i>',
            correctOption: '<strong>'
        }


    ];







var question = document.getElementById("question");

var a = document.getElementById("a");
var option_1 = document.getElementById("option_1");

var b = document.getElementById("b");
var option_2 = document.getElementById("option_2");

var c = document.getElementById("c");
var option_3 = document.getElementById("option_3");

var submit = document.getElementById("submit");

var index = 0;
var Score = 0;
var min=1;
var sec=59;

var timer=document.getElementById('timer')
var interval=setInterval(function(){
timer.innerHTML=`${min}: ${sec}`
sec--
if(sec<0){
    min--
    sec=59;
    if(min<0){
        min=1
        sec=59;
        nextQuestion()
    }
}
},1000)



function nextQuestion() {


    var inputName = document.getElementsByName("answer")
    for (var i = 0; i < inputName.length; i++) {
        if (inputName[i].checked) {
            var SelectInput = inputName[i].value;
            var SelectQues = questions[index - 1]["question"]
            var SelectAns = questions[index - 1][`option${SelectInput}`]
            var correctOption = questions[index - 1][`correctOption`]
            if (SelectAns == correctOption) {
                Score++
            }
            console.log(SelectAns)
        }


       
        inputName[i].checked = false;

        // console.log(inputName[i])
    }

    submit.disabled = true;
    // console.log(inputName)

    if (index > questions.length - 1) {
        console.log('Your Percentege is'+((Score / questions.length)*100).toFixed(2));
        // console.log("khtam code");
    }
    else {

        question.innerText = `${questions[index].question}`
        option_1.innerText = `${questions[index].option1}`
        option_2.innerText = `${questions[index].option2}`
        option_3.innerText = `${questions[index].option3}`
        index++
    }

}
nextQuestion()

function clicked() {

    submit.disabled = false;
}
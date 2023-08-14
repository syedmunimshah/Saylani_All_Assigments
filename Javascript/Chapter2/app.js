// // <----(Chapter 6 to 9)---->
// // <----(Qno 01)---->
// document.write('Result:')
// var a='The value of a is:';
// var x='the value of a is:';

// var b=10;
// document.write ('</br>')
// var c =a+' '+b;
// document.write (c)
// document.write ('</br>')
// document.write ('.........................................');

// document.write ('</br>');
// document.write ('</br>');
// var b= ++b;
// var d = "The value of ++a is:";
// document.write(d+' '+b);
// document.write ('</br>');
// document.write('Now'+' '+ x +' '+ b );
// document.write ('</br>');
// document.write ('</br>');

// document.write ('</br>');
// document.write ('</br>');
// var d = "The value of a++ is:";
// document.write(d+' '+b);
// document.write ('</br>');
// var y = 12;
// var b = y++
// document.write('Now'+' '+ x+' '+ b );
// document.write ('</br>');
// document.write ('</br>');

// document.write ('</br>');
// document.write ('</br>');
// var b=--b;
// var d = "The value of --a is:";
// document.write(d+' '+b);
// document.write ('</br>');
// document.write('Now'+' '+ x +' '+ b );
// document.write ('</br>');
// document.write ('</br>');

// document.write ('</br>');
// document.write ('</br>');
// var b=b--;
// var d = "The value of a-- is:";
// document.write(d+' '+b);
// document.write ('</br>');
// var b = 10
// document.write('Now'+' '+ x +' '+ b );


// // <----(Chapter 6 to 9)---->
// // <----(Qno 02)---->
// var a = 2 , b= 1;
// var result = --a - --b + ++b +b--;
// // --a;

// // --a - --b;

// // --a - --b + ++b;

// // --a - --b + ++b + b--; 

// document.write('a is'+' '+a);
// document.write ('</br>');
// document.write('b is'+' '+b);
// document.write ('</br>');
// document.write('result is'+' '+result);

// // <----(Chapter 6 to 9)---->
// // <----(Qno 03)---->
// var a = prompt('Enter your name');
// alert('Welcome '+ a + ' to the Page');

// // <----(Chapter 6 to 9)---->
// // <----(Qno 05)---->

// function generateTable() {
//     const numberInput = document.getElementById('numberInput');
//     const tableContainer = document.getElementById('tableContainer');
//     tableContainer.innerHTML = ''; // Clear previous content

//     let number = numberInput.value ? parseInt(numberInput.value) : 5;

//     let tableHTML = '<table>';
//     for (let i = 1; i <= 10; i++) {
//         tableHTML += '<tr><td>' + number + ' x ' + i + '</td><td>=</td><td>' + (number * i) + '</td></tr>';
//     }
//     tableHTML += '</table>';

//     tableContainer.innerHTML = tableHTML;
// }

// // Display default table on page load
// generateTable();

// // <----(Chapter 6 to 9)---->
// // <----(Qno 06)---->

// function calculateAndDisplay() {
//     const subject1Marks = parseFloat(document.getElementById('subject1').value);
//     const subject2Marks = parseFloat(document.getElementById('subject2').value);
//     const subject3Marks = parseFloat(document.getElementById('subject3').value);

//     const totalMarksPerSubject = 100;

//     const totalMarks = subject1Marks + subject2Marks + subject3Marks;
//     const percentage = (totalMarks / (totalMarksPerSubject * 3)) * 100;

//     const resultContainer = document.getElementById('resultContainer');
//     resultContainer.innerHTML = `
//         <table border="1" align="center">
//             <tr>
//                 <th>Subject</th>
//                 <th>Obtained Marks</th>
//                 <th>Total Marks</th>
//             </tr>
//             <tr align="center">
//                 <td>English</td>
//                 <td>${subject1Marks}</td>
//                 <td>${totalMarksPerSubject}</td>
//             </tr>
//             <tr align="center">
//                 <td>Maths</td>
//                 <td>${subject2Marks}</td>
//                 <td>${totalMarksPerSubject}</td>
//             </tr>
//             <tr align="center">
//                 <td>Urdu</td>
//                 <td>${subject3Marks}</td>
//                 <td>${totalMarksPerSubject}</td>
//             </tr>
//         </table>
//         <p>Total Marks: ${totalMarks}</p>
//         <p>Percentage: ${percentage.toFixed(2)}%</p>
//     `;
// }

// // <----(Chapter 9 to 11)---->
// // <----(Qno 01)---->

// var city = prompt('Enter your city')
// if(city === 'Karachi'){
//     alert('“Welcome to city of lights”')
// }

// // <----(Qno 02)---->

var gender = prompt('Enter your gender')
if(gender === 'male'){
    alert('Good Morning Sir')
}else("Good Morning ma'am")

// // <----(Qno 03)---->
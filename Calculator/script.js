let input = document.getElementById("inputbox"); // Get all input
let buttons = document.querySelectorAll('button');

let string = ""; // For storing the value
let arr = Array.from(buttons); // All buttons are put in array
let resultDisplayed = false; // Flag to check if result was displayed

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let result = eval(string);
                input.value = result;
                string = result.toString();
                resultDisplayed = true;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            if (resultDisplayed) {
                string = "";
                resultDisplayed = false;
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});









// let input=document.getElementById("inputbox"); //get all input
// let buttons=document.querySelectorAll('button');

// let string= ""; //for storing the value
// let arr=Array.from(buttons); //all buttons are put in array
// arr.forEach(button =>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML =='='){
//             string.eval(string);
//             input.value=string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string="";
//             input.value=string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//            string=string.substring(0,string.length-1);
//            input.value=string;
//         }else{
//             string += e.target.innerHTML;
//             input.value=string;
//         }
//      }
//     )
// })

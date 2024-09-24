let string = "";
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
let enter= document.querySelector('input');
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        if(buttonText == '=') {
            string = eval(string);
            enter.value = string;
        } else if(buttonText == 'AC') {
            string = "";
            enter.value = string;
        } else if(buttonText == 'DEL') {
            string = string.slice(0,string.length-1);
            enter.value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            enter.value = string;
        }
    })
})
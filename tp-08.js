
//example 1
/*
const myButon = document.querySelector('#myButton')
const myCount = document.querySelector('#counter')

let count = 0;
myCount.innerHTML = count //c'est pour afficher 0 dans l'input


pour afficher dans input il faut: value au lieu de innerhtml
nomdinput.value = count


myButon.addEventListener('click', () =>
{
    count++;
    myCount.innerHTML = count;
    
});

*/





//example 2

const myButon = document.querySelector('#myButton')
const myCount = document.querySelector('#counter')


let count = 0;



//cette function est pour afficher 0 dans l'input
function showCounter()
    {
    myCount.innerHTML = count;
    }


myButon.addEventListener('click', () =>
{
    count++;
    showCounter()
    
});

showCounter()





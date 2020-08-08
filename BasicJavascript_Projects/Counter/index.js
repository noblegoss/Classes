let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', countPlus);
lowerCount.addEventListener('click', countMinus);


function countPlus(){
    count++
    counter.innerHTML = count;
    if(counter.innerHTML > '0'){
        counter.style.color = 'aqua'
    } else if (counter.innerHTML === '0'){
        counter.style.color = 'black'
    }
}

function countMinus(){
    count--
    counter.innerHTML = count;
    if(counter.innerHTML < '0'){
        counter.style.color = 'yellow'
    } else if (counter.innerHTML === '0'){
        counter.style.color = 'black'
    }
}
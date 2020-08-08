const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
let slide = document.querySelector('.images');

let counter = 0;

prev.addEventListener('click', decrement);
next.addEventListener('click', increment);

function increment(){
    slide.animate([{opacity:'0.1'}, {opacity:'1.0'}],
    {duration:100, fill:'forwards'});

    if(counter === 8){
        counter = -1;
    }
    slide.style.backgroundImage = `url(img/img-${counter}.jpg)`;
    counter++
}


function decrement(){
    slide.animate([{opacity:'0.1'}, {opacity:'1.0'}],
    {duration:100, fill:'forwards'});

    if(counter === 0){
        counter = 8;
    }
    slide.style.backgroundImage = `url(img/img-${counter}.jpg)`;
    counter--
}


const counter = document.querySelector('#counter');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.btn-reset');
const save = document.querySelector('.btn-save');
const qty = document.querySelector('.number');

let count = 0;
increaseBtn.addEventListener('click', ()=> {

    count++;
    counter.innerHTML = count;
} );

decreaseBtn.addEventListener('click', () => {

    if(count >= 1){
        count--;
        counter.innerHTML = count;
    }
    else {
    counter.innerHTML = 0;
    }
    
});
 
resetBtn.addEventListener('click', ()=> {
    count = 0;
    counter.innerHTML = count;

});

// save.addEventListener('click', () => {
//     const number = document.querySelector('.number');
//     const num = document.createElement('div');
//     num.setAttribute('class', 'num');
//     num.innerHTML = count;
//     number.appendChild(num);
// });


save.addEventListener('click', () => {
    qty.innerHTML = count;
})



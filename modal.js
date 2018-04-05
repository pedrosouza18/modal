let btn = document.querySelector('button');
let a = document.querySelector('#close');
let bg = document.querySelector('#bg');
let box = document.querySelector('.box');

btn.addEventListener("click", () => {
    bg.style.display = 'block';
    box.style.visibility = 'visible';
    box.style.opacity = '1';  
    btn.style.display = 'none';  
});

a.addEventListener("click", () => {
    bg.style.display = 'none';
    box.style.visibility = 'hidden';
    box.style.opacity = '0';  
    btn.style.display = 'block';  
})
// Your code goes here

//click 
const body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor='rebeccapurple';
    console.log('body changed');
})


const head = document.querySelectorAll('h2');

head[0].addEventListener('click', (event) => {
    head[0].style.color = 'white';
    console.log('head changed');
    event.stopPropagation();
})




//mouseover
document.querySelectorAll('a').forEach(navi => {
    navi.addEventListener('mouseover', () => {
        navi.style.color='aqua'
    })
})

console.log('hey listen');

//mouseenter
document.querySelectorAll('.img-content').forEach(pix => {
    pix.addEventListener('mouseenter', () => {
        pix.style.transform = 'scale(1.5)';
        pix.style.transform = 'all 0.3s';
    })
})

console.log('eek a mouse');

//mouseleave
document.querySelectorAll('.img-content').forEach(pix => {
    pix.addEventListener('mouseleave', () => {
        pix.style.transform = 'scale(1)';
        pix.style.transform = 'all 0.3s'
    })
})

console.log('its gone');

//dbl click
const frizz = document.querySelector('h1');

frizz.addEventListener('dblclick', () => {
    frizz.textContent = 'Magic School Bus'
})

console.log('time for a field trip');

//resize
const newBus = document.querySelectorAll('img');

window.addEventListener('resize', () => {
    newBus[0].src ='img/frizz.jfif';
    newBus[0].alt = 'with the frizz? no way!'
})

console.log('with the frizz? no way!');

//wheel

const text = document.querySelectorAll('p');

text[0].addEventListener('wheel', () => {
    text[0].textContent = 'Take chances, make mistakes, get messy!';
    text[0].style.color = 'white';
})

console.log('frizz is at the wheel');

//drag

text[1].addEventListener('drag', () => {
    text[1].textContent = 'At Phoebes old school, we never took field trips';
    text[1].style.color = 'white';
})

console.log('at my old school...');

//copy 

text[2].addEventListener('copy', () => {
    text[2].textContent = 'As I always say: make mistakes, make mistakes, make mistakes! Its the best way to learn something';
    text[2].style.color = 'white';
})

console.log('words of wisdom');

//contextmenu

text[9].addEventListener('contextmenu', () => {
    text[9].textContent = "All quotes are from The Magic School Bus"
})

console.log('thats all folks');
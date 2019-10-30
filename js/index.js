// Your code goes here

//click 
const body = document.querySelector('body');

body.addEventListener('click', () => {
    body.style.backgroundColor='rebeccapurple';
})

console.log('body changed');

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
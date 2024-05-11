const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('openBtn');
const element = document.getElementById('mobile');

openBtn.addEventListener('click',function(){
    element.style.left = '0px';
})

closeBtn.addEventListener('click',function(){
    element.style.left = '-300px';
})
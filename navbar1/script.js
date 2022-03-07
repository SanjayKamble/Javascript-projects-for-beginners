const label = document.querySelector('#icon');
const ul = document.querySelector('.ull');


label.addEventListener('click',()=>{

    if (ul.style.display != 'block') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
    
});


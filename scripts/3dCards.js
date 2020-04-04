let card1 = document.querySelectorAll('.card1');
let container1 = document.querySelector('.container1');
card1.forEach((card)=> {
    card.addEventListener('click', function(){
        container1.classList.toggle('container_origin');
    })
})
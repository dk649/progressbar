window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


const progress = document.getElementById('progress');
const prev =document.getElementById('prev');
const next =document.getElementById('next');
const circles =document.querySelectorAll('.circle');


let currentActive = 1;

next.addEventListener('click', (event) => {

    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();

    console.log(currentActive);
});


prev.addEventListener('click', (event) => {

    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update();
    
});

function update() {

    circles.forEach((circle, index) => {
        if(index < currentActive){

            circle.classList.add('active');
        } else {

            circle.classList.remove('active');
        }


    }); 

    const actives = document.querySelectorAll('.active');
    let percentage = ((actives.length -1) / (circles.length -1)) * 100;
    progress.style.width = percentage + '%';
    // console.log(percentage);

    if(currentActive === 1){
        prev.disabled = true;
    } else if(currentActive === circles.length){
        next.disabled = true;
    } else {

        prev.disabled = false;
        next.disabled = false;
 
    }


} // end of update function
    

});

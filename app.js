let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'brown') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'aqua') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blueviolet') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'chartreuse') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'darkcyan') {
            body.style.backgroundColor = e.target.id;
        } if (e.target.id === 'deeppink') {
            body.style.backgroundColor = e.target.id;
        }
         if (e.target.id === 'bisque') {
            body.style.backgroundColor = e.target.id;
        }
    })

});
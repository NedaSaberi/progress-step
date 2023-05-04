let steps = document.querySelectorAll('.step');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let pre = document.getElementById('pre');
let nex = document.getElementById('nex');


nex.addEventListener('click', function(){
    for(let step of steps){
        if(step.classList.contains("four")){
            check();
            break;
        }else if (! step.nextElementSibling.classList.contains('active')){
            step.nextElementSibling.classList.add("active");
            check();
            break;
        }
    }
})
pre.addEventListener('click', function(){
    
    for(let i=steps.length-1; i > 0; i--){
        if(steps[i].classList.contains('four') && steps[i].classList.contains('active')){
            four.classList.remove("active");
            nex.classList.remove('disable');
            break;
        }else if(steps[i].classList.contains('two')){
            steps[i].classList.remove("active");
            pre.classList.add("disable");
            break;
        }else if(steps[i].classList.contains("active")){
            steps[i].classList.remove('active');
            break;
        }
    }
})

function check() {
  if (!two.classList.contains("active")) {
    pre.classList.add("disable");
  }else{
    pre.classList.remove('disable');
  }
  if (four.classList.contains("active")) {
    nex.classList.add("disable");
  }else{
    nex.classList.remove('disable');
  }
}

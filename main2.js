let steps = document.querySelectorAll('.step');
let prev = document.getElementById("prev");
let next = document.getElementById('next');
let proBar = document.getElementById("progress-bar");
let currentProgress = 0;

next.addEventListener('click', () =>{
    currentProgress++;
    updateProgress();
})
prev.addEventListener('click', () =>{
    currentProgress-- ;
    updateProgress();
})

function updateProgress(){
    for(let [idx, step] of steps.entries()){
        if (currentProgress <= 0) {
            currentProgress = 0;
            prev.disabled = true;
        }else{
            prev.disabled = false;
        }

        if (currentProgress >= steps.length) {
            currentProgress = steps.length;
            next.disabled = true;
        }else{
            next.disabled = false;
        }

        if (idx <= currentProgress) {
          step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    }

    proBar.style.width = ((currentProgress / (steps.length - 1)) * 100) + "%";
}
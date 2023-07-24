
const myButtons = document.getElementById("myTimer");
const Time = document.getElementById("result");
const controlButtons = document.querySelector('.control')
 
let mySeconds = 29;
const myTimer =() => {
   Time.textContent = mySeconds;
   mySeconds--
}

function addingOrRemovingSeconds(){
    myButtons.addEventListener('click', e=> {
        e.preventDefault();
        if(e.target.id === 'minus'){
            mySeconds -= 1
        }
        if(e.target.id ==='adding'){
            mySeconds += 1
        }
        Time.textContent = mySeconds;
    })  
}

function resetTime(){
    controlButtons.addEventListener('click', e=> {
        if(e.target.id === "reset") {
            mySeconds = 0;
            Time.textContent = mySeconds;        
        }
   })
}

var interval;
controlButtons.addEventListener('click', e=> {
    
      if(e.target.id === "starts") {
        interval = setInterval(myTimer, 1000);
        e.target.textContent = 'STOP'
        e.target.setAttribute('id', '')
        e.target.setAttribute('class', 'stop')
        return interval;
    }
    
    if(e.target.className === 'stop' || mySeconds == 0){
        e.target.textContent = 'START'
        e.target.setAttribute('id', 'starts')
        e.target.setAttribute('class', '')
        clearInterval(interval)
        addingOrRemovingSeconds();
        resetTime()
    }
})
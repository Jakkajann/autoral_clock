const timer = document.querySelector("#time");
const time = new Date().toLocaleTimeString('pt-BR');
timer.innerHTML = time;


let interval = setInterval(() => {
    const time = new Date().toLocaleTimeString('pt-BR');
    timer.innerHTML = time;
}, 1000);


function reset() {
    const time = new Date().toLocaleTimeString('pt-BR');
    timer.innerHTML = time;
    
    interval = setInterval(() => {
        const time = new Date().toLocaleTimeString('pt-BR');
        timer.innerHTML = time;
    }, 1000);
    timer.classList.remove("text-danger");
}

function stop() {
    clearInterval(interval);
    timer.classList.add("text-danger");
}
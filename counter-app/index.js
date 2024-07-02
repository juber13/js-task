let count = 0;
let inputValue = 0;


function increment() {
    if (inputValue > 0) count += inputValue
    else count++;
    document.getElementById("counter").textContent = count;
}

function decrement() {
    if (inputValue > 0) count -= inputValue;
    else count--;
    document.getElementById("counter").textContent = count;
}

document.getElementById('number-input').addEventListener('input', (e) => {
    inputValue = parseInt(e.target.value);
})


document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);

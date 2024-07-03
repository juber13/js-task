
const workoutInput = document.getElementById('workout');
const timeInput = document.getElementById('time');
const addBtn = document.getElementById('add');




let workoutLogs = [];

addBtn.addEventListener('click', () => {
    if (!timeInput.value && !workoutInput.value) {
        alert("All fields are required");
        return;
    }
    workoutLogs.push({ time: timeInput.value, workout: workoutInput.value });
    timeInput.value = "";
    workoutInput.value = "";
    renderHtml(workoutLogs);
})

function renderHtml(data) {

    let output = data.map((item, index) => {
        return `<div class="log">
                <div class="text">
                  ${item.time} - ${item.workout}
                </div>
                <div class="btn">
                    <button id="delete" data-index=${index}>Delete</button>
                </div>
                </div>
                `
    }).join("");

    document.querySelector('.logs').innerHTML = output;
    const deleteButton = document.querySelector('#delete');
    if (deleteButton) {
        deleteButton.addEventListener('click', (e) => {
            const target = parseInt(e.target.dataset.index);
            workoutLogs.splice(target, 1);
            console.log(workoutLogs)
            renderHtml(workoutLogs);
        })
    }
}


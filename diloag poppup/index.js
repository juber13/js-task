


document.getElementById('open').addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('active');
})

document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('active');
})
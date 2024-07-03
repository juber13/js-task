
const allDarkModeCheckboxButton =  document.querySelector('.allDark');
const boxCheckboxButton =  document.querySelector('.box-dark');


allDarkModeCheckboxButton.addEventListener('change' , (e) => {
    document.body.classList.toggle('main-dark')
    document.querySelector('.box').classList.remove('main-dark');
    boxCheckboxButton.checked = false;
})

boxCheckboxButton.addEventListener('change' , () => {
    document.querySelector('.box').classList.toggle('main-dark');
})
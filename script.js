const IncreaseBtn = document.querySelector('#increase')
const DecreaseBtn = document.querySelector('#decrease')
const counter = document.querySelector('#count')
const resetBtn = document.querySelector('#reset')
const Error = document.querySelector('#error')
const multiPly = document.querySelector('#multiply')
const errorBtn = document.querySelector('#errorbtn')
const alertError = document.querySelector('#alertdiv')
const select = document.querySelector('#select')


IncreaseBtn.addEventListener('click', () => {
    if(parseInt(counter.innerText) < 10){
        counter.innerHTML = parseInt(counter.innerText) + 1 ;
    } else {
        alertError.style.display = 'block'
        Error.innerHTML = 'number must be less than 10'
    }
})

DecreaseBtn.addEventListener('click', (event) => {
    if (parseInt(counter.innerText) > 0){
        counter.innerHTML = parseInt(counter.innerText) - 1;
    }else{
        alertError.style.display = 'block';
        Error.innerHTML = 'number must be more than 0'
    }
})

multiPly.addEventListener('click', () => {
    counter.innerHTML = parseInt(counter.innerText) * `${select.value}`

})

errorBtn.addEventListener('click', (event) => {
    alertError.style.display = 'none'
})


resetBtn.addEventListener('click', (event) => {
    counter.innerHTML = 0
})









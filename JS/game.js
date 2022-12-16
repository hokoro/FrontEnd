const locationform = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#result')

locationform.addEventListener('submit',(e) =>{
    e.preventDefault()
    const location = search.value
    message.textContent = location

})
const scriptURL = 'https://script.google.com/macros/s/AKfycbyMaNZqARdAozNcLjZMGI8r0VxPAMKZjVpsXlTIQ5h6h3l_7ZTsMXZZBnY8G6NUicoa/exec'
const form = document.forms['contact-form']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    msg.innerHTML = "Message sent successfully!"
    setTimeout(function(){
    msg.innerHTML = ""
    },4000)
    form.reset()
  })
  .catch(error => console.error('Error!', error.message))
})
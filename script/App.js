const emailAddress = document.querySelector('.formField');
const submit = document.querySelector('.submitForm')

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.assign("https://www.google.com");
    db.collection('contact-form').doc().set({
        email:emailAddress.value
    }).then(()=>{
    emailAddress.reset()
    })
})


// console.log(item);
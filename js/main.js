document.addEventListener('DOMContentLoaded', function(){
    const inputMail = document.querySelector('.form__input')
    const inputBtn  = document.querySelector('.form__btn')
    const errorInfo = document.querySelector('.error-info')
    

    const isValidMail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(inputMail.value)){
            inputMail.classList.remove('error-border')
            errorInfo.classList.remove('active')
            inputBtn.classList.remove('active')

        }else{
            inputMail.classList.add('error-border')
            errorInfo.classList.add('active')
            inputBtn.classList.add('active')
        }
    }

    inputBtn.addEventListener('click', isValidMail)
})
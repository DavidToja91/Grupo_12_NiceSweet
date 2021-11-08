function qs (element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let $form = qs('#form')
    let $email = qs('#email')
    let $emailErrors = qs('#emailErrors')
    let $password = qs('#password')
    let $passErrors = qs('#passErrors')
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let $terms = qs('#check')
    let $termsErrors = qs('#termsErrors')

    $form.addEventListener('submit', function(e){
        e.preventDefault()
    })

    $email.addEventListener('blur', function(){
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio'
                $email.classList.add('is-invalid')
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido'
                $email.classList.add('is-invalid')
                break;    
            default:
                $email.classList.remove("is-invalid");
                $email.classList.add('is-valid')
                $emailErrors.innerHTML = ""
                break;
        }
    $password.addEventListener('blur', function(){
        switch (true) {
            case !$password.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio'
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($password.value):
                $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $password.classList.add('is-invalid')
                break;    
            default:
                $password.classList.remove("is-invalid");
                $password.classList.add('is-valid')
                $passErrors.innerHTML = ""
                break;
        }
     $terms.addEventListener('click', function(){
            $terms.value = 'on'
            $terms.classList.toggle('is-valid')
            $terms.classList.remove('is-invalid')
            $termsErrors.innerHTML = ''
        })
    })
            

   

    })







})
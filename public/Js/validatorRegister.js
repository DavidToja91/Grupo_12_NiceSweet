function qs(element){
    return document.querySelector(element)
}


window.addEventListener('load',function(){
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputLastname = qs('#lastname'),
    $lastnameErrors = qs('#lastnameErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExDNI = /^[0-9]{7,8}$/,
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputName.addEventListener('blur', function(){
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputName.classList.add('is-invalid')
            break;
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'Ingresa un nombre valido'
                $inputName.classList.add('is-invalid')
                break;
            case $inputName.value.trim().length <= 2:
                    $nameErrors.innerHTML = 'El nombre debe tener más de 2 caracteres'
                    $inputName.classList.add('is-invalid')
                break;
            default:
                $inputName.classList.remove('is-invalid')
                $inputName.classList.add('is-valid')
                $nameErrors.innerHTML = ""
            break;
        }
    })


    $inputLastname.addEventListener('blur', function(){
        console.log($inputLastname.value.trim())
        switch (true) {
            case !$inputLastname.value.trim():
                $lastnameErrors.innerHTML = 'El campo Apellido es obligatorio'
                $inputLastname.classList.add('is-invalid')
            break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = 'Ingresa un Apellido valido'
                $inputLastname.classList.add('is-invalid')
                break;
            case $inputLastname.value.trim().length <= 2:
                    $lastnameErrors.innerHTML = 'El Apellido debe tener más de 2 caracteres'
                    $inputLastname.classList.add('is-invalid')
                break;
            default:
                $inputLastname.classList.remove('is-invalid')
                $inputLastname.classList.add('is-valid')
                $lastnameErrors.innerHTML = ""
            break;
        }
    })
})
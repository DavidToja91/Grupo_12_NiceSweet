function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let $name =qs('#name'),
    $nameErrors =qs('#nameErrors'),
    $lastName =qs('#lastName'),
    $lastnameErrors =qs('#lastNameErrors'),
    $phoneNumber =qs('#phoneNumber'),
    $phoneNumberErrors =qs('#phoneNumberErrors'),
    $btn =qs('#btn'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/

      //Name
      $name.addEventListener('blur', function(){
        console.log($name.value.trim())
        switch (true) {
            case !$name.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $name.classList.add('is-invalid')
            break;
            case !regExAlpha.test($name.value):
                $nameErrors.innerHTML = 'Ingresa un nombre valido'
                $name.classList.add('is-invalid')
                break;
            case $name.value.trim().length <= 2:
                    $nameErrors.innerHTML = 'El nombre debe tener más de 2 caracteres'
                    $name.classList.add('is-invalid')
                break;
            default:
                $name.classList.remove('is-invalid')
                $name.classList.add('is-valid')
                $nameErrors.innerHTML = ""
            break;
        }
} )
    //Last name
    $lastName.addEventListener('blur', function(){
        console.log($lastName.value.trim())
        switch (true) {
            case !$lastName.value.trim():
                $lastnameErrors.innerHTML = 'El campo Apellido es obligatorio'
                $lastName.classList.add('is-invalid')
            break;
            case !regExAlpha.test($inputLastname.value):
                $lastnameErrors.innerHTML = 'Ingresa un Apellido valido'
                $lastName.classList.add('is-invalid')
                break;
            case $lastName.value.trim().length <= 1:
                    $lastnameErrors.innerHTML = 'El Apellido debe tener más de un caracter'
                    $lastName.classList.add('is-invalid')
                break;
            default:
                $lastName.classList.remove('is-invalid')
                $lastName.classList.add('is-valid')
                $lastnameErrors.innerHTML = ""
            break;
        }
    })

        //PhoneNumber
        $phoneNumber.addEventListener('blur', function(){
            console.log($phoneNumber.value.trim())
            switch (true) {
                case !$phoneNumber.value.trim():
                    $phoneNumber.innerHTML = 'El campo Teléfono es requerido.'
                    $phoneNumber.classList.add('is-invalid')
                break;
                case $phoneNumber.value.trim().length <= 10:
                        $phoneNumberErrors.innerHTML = 'El número ingresado no contiene los caracteres requeridos'
                        $phoneNumber.classList.add('is-invalid')
                    break;
                default:
                    $phoneNumber.classList.remove('is-invalid')
                    $phoneNumber.classList.add('is-valid')
                    $phoneNumberErrors.innerHTML = ""
                break;
            }
        })

        $btn.addEventListener('submit', function(e){
            e.preventDefault()
        })


})
//ESTA VALIDACIÓN DE EMAIL ESTÁ OK, PERO LE FALTA AGREGARLE ESTILOS A LOS MENSAJES DE ERROR. QUEDAN MAL COMO LOS DEJÉ.
//CON AMOR, NIÑITOS
//FER <3 <3 <3

function qs(element){
    return document.querySelector(element)
}



window.addEventListener('load', function(){
    let $email = qs('#email')
    let $emailErrors = qs('#emailErrors')
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i



$email.addEventListener('blur', function(){
    switch(true){
        case !$email.value.trim():
            $emailErrors.innerHTML = "El campo email es obligatorio"
            $email.classList.add('es-invalido')
            break;
        case !regExEmail.test($email.value):
            $emailErrors.innerHTML = 'Debés ingresar un email válido'
            $email.classList.add('es-invalido')
            break;
        default:
            $email.classList.remove('es-invalido')
            $email.classList.add('es-valido')
            $emailErrors.innerHTML = ""
            break
    }
})
})
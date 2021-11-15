//ESTA VALIDACIÓN DE EMAIL ESTÁ OK, PERO LE FALTA AGREGARLE ESTILOS A LOS MENSAJES DE ERROR. QUEDAN MAL COMO LOS DEJÉ.
//CON AMOR, NIÑITOS
//FER <3 <3 <3

function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){
    let $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    $email.addEventListener('blur', function(){
        switch(true){
            case !$email.value.trim():
                $emailErrors.innerHTML = "El campo email es obligatorio";
                $email.classList.add('es-invalido');
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debés ingresar un email válido';
                $email.classList.add('es-invalido');
                break;
            default:
                $email.classList.remove('es-invalido');
                $email.classList.add('es-valido');
                $emailErrors.innerHTML = "";
                break
        }
    });

    $btn.addEventListener("submit", function (e) {
        e.preventDefault();
        let error = false;
        let formElements = this.elements;
        console.log(formElements);
        
        for (let index = 0; index < formElements.length - 1; index++) {
            if (
                formElements[index].value === "" ||
                formElements[index].classList.contains('is-invalid')
            ) {
                formElements[index].classList.add('is-invalid');
                submitErrors.innerHTML = "Los campos señalados son obligatorios";
                error = true;
            }
        }
    
        if (!error) {
            console.log('Todo bien');
            $form.submit();
        }
    });
});
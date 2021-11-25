function qs(element) {
    return document.querySelector(element);
}

window.addEventListener('load', function () {
    let $form = qs('#form'),
    $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    $password = qs('#password'),
    $passErrors = qs('#passErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
    $terms = qs('#check'),
    $termsErrors = qs('#termsErrors');

    $email.addEventListener('blur', function () {
        switch (true) {
            case !$email.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio';
                $email.classList.add('is-invalid');
                break;
            case !regExEmail.test($email.value):
                $emailErrors.innerHTML = 'Debe ingresar un email válido';
                $email.classList.add('is-invalid');
                break;
            default:
                $email.classList.remove("is-invalid");
                $email.classList.add('is-valid');
                $emailErrors.innerHTML = "";
                break;
        }
    });

    $password.addEventListener('blur', function () {
        switch (true) {
            case !$password.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $pass.classList.add('is-invalid');
                break;
            case !regExPass.test($password.value):
<<<<<<< HEAD
                $passErrors.innerHTML = 'Debe ingresar una contraseña valida';
=======
                $passErrors.innerHTML = 'Contraseña incorrecta';
>>>>>>> 841ab1439b99ae132796727f72b5e5a7849a7f79
                $password.classList.add('is-invalid');
                break;
            default:
                $password.classList.remove("is-invalid");
                $password.classList.add('is-valid');
                $passErrors.innerHTML = "";
                break;
        }

        $terms.addEventListener('click', function () {
            $terms.value = 'on';
            $terms.classList.toggle('is-valid');
            $terms.classList.remove('is-invalid');
            $termsErrors.innerHTML = '';
        })
    });

    $form.addEventListener("submit", function (e) {
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
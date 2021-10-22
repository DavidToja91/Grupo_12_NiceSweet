function qs(element){
    return document.querySelector(element)
}

window.addEventListener('load',function(){
    let $inputName = qs('#name'),
    $nameErrors = qs('#nameErrors'),
    $inputDescription = qs('#description'),
    $descriptionErrors = qs('#descriptionErrors'),
    $inputImage = qs('#image'),
    $imageErrors = qs('#imageErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExImg = /^.*\.(jpg|png|jpeg|gif)$/;
    
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
            case $inputName.value.trim().length < 5:
                    $nameErrors.innerHTML = 'El nombre debe tener al menos 5 caracteres'
                    $inputName.classList.add('is-invalid')
                break;
            default:
                $inputName.classList.remove('is-invalid')
                $inputName.classList.add('is-valid')
                $nameErrors.innerHTML = ""
            break;
        }
    });

    $inputDescription.addEventListener('blur', function(){
        console.log($inputDescription.value.trim())
        switch (true) {
            case $inputDescription.value.trim().length < 20:
                    $descriptionErrors.innerHTML = 'La descripción debe tener al menos 20 caracteres'
                    $inputDescription.classList.add('is-invalid')
                break;
            default:
                $inputDescription.classList.remove('is-invalid')
                $inputDescription.classList.add('is-valid')
                $descriptionErrors.innerHTML = ""
            break;
        }
    });

    $inputImage.addEventListener('blur', function(){
        console.log($inputImage.value.trim())
        switch (true) {
            case !regExImg.test($inputImage.value):
                $imageErrors.innerHTML = 'Sólo se permiten imágenes (.jpg, .jpeg, .png, .gif)'
                $inputImage.classList.add('is-invalid')
                break;
            default:
                $inputImage.classList.remove('is-invalid')
                $inputImage.classList.add('is-valid')
                $imageErrors.innerHTML = ""
            break;
        }
    });
});
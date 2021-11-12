function qs(element) {
    return document.queryselector(element)
}


window.addEventListener('load', function () {
    let $form = qs('#form')
        $nameCreate = qs('#nameCreate'),
        $nameErrors = qs('#nameErrors'),
        $price = qs('#price'),
        $priceErrors = qs('#priceErrors'),
        $discount = qs('#discount'),
        $image = qs('#image'),
        $imageErrors = qs('#imageErrors'),
        $category = qs('#category'),
        $subcategory = qs('#subcategory'),
        $regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        $regExImg = /^.*\.(jpg|png|jpeg|gif)$/;

    //NameProduct
    $nameCreate.addEventListener('blur', function () {
        console.log($nameCreate.value.trim())
        switch (true) {
            case !$nameCreate.value.trim():
                $nameErrors.innerHTML = 'el campo nombre es obligatorio'
                $nameCreate.classList.add('is-invalid')
                break;
            case !$regExAlpha.test($nameCreate.value):
                $nameErrors.innerHTML = 'ingrese un nombre válido para este campo'
                $nameCreate.classList.add('is-invalid')
                break;
            case $nameCreate.value.trim().length <= 4:
                $nameErrors.innerHTML = 'El nombre debe tener más de 4 caracteres'
                $nameCreate.classList.add('is-invalid')
                break;
            default:
                $nameCreate.classList.remove('is-invalid')
                $nameCreate.classList.add('is-valid')
                $nameErrors.innerHTML = ""
                break;
        }
    })
    // Precio


    $price.addEventListener('blur', function () {
        console.log($price.value.trim())
        switch (true) {
            case !$price.value.trim():
                $priceErrors.innerHTML = 'El campo precio es obligatorio'
                $inputPrice.classList.add('is-invalid')
                break;
            case !regExAlpha.test($price.value):
                $priceErrors.innerHTML = 'Ingresa un precio valido'
                $inputPrice.classList.add('is-invalid')

            default:
                $inputPrice.classList.remove('is-invalid')
                $inputPrice.classList.add('is-valid')
                $priceErrors.innerHTML = ""
                break;

        }

    })
    //DESCUENTO
    $discount.addEventListener('blur', function () {
        console.log($discount.value.trim())
        switch (true) {
            case !regExAlpha.test($discount.value):
                $discountErrors.innerHTML = 'Ingresa un descuento valido'
                $inputDiscount.classList.add('is-invalid')
                break;

            default:
                $inputDiscount.classList.remove('is-invalid')
                $inputDiscount.classList.add('is-valid')
                $discountErrors.innerHTML = ""
                break;
        };

    });

    // CATEGORIA


    $category.addEventListener('blur', function () {
        console.log($category.value.trim())
        switch (true) {
            case !$category.value.trim():
                $categoryErrors.innerHTML = 'El campo categoria es obligatorio'
                $inputCategory.classList.add('is-invalid')
                break;
            case !regExAlpha.test($category.value):
                $categoryErrors.innerHTML = 'Ingresa una categoria valida'
                $inputCategory.classList.add('is-invalid')

            default:
                $inputCategory.classList.remove('is-invalid')
                $inputCategory.classList.add('is-valid')
                $categoryErrors.innerHTML = ""
                break;




        };


    });
    // SUBCATEGORIA


    $subcategory.addEventListener('blur', function () {
        console.log($subcategory.value.trim())
        switch (true) {
            case !$subcategory.value.trim():
                $subcategoryErrors.innerHTML = 'El campo subcategoria es obligatorio'
                $inputSubcategory.classList.add('is-invalid')
                break;
            case !regExAlpha.test($subcategory.value):
                $subcategoryErrors.innerHTML = 'Ingresa una subcategoria valida'
                $inputSubcategory.classList.add('is-invalid')

            default:
                $inputSubcategory.classList.remove('is-invalid')
                $inputSubcategory.classList.add('is-valid')
                $subcategoryErrors.innerHTML = ""
                break;




        };


    });

    //IMAGEN

    $image.addEventListener('blur', function () {
        console.log($Image.value.trim())
        switch (true) {
            case !regExImg.test($Image.value):
                $imageErrors.innerHTML = 'Sólo se permiten imágenes (.jpg, .jpeg, .png, .gif)'
                $inputImage.classList.add('is-invalid')
                break;
            default:
                $image.classList.remove('is-invalid')
                $image.classList.add('is-valid')
                $imageErrors.innerHTML = ""
                break;
        }
    });
    
    //formulario
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



})
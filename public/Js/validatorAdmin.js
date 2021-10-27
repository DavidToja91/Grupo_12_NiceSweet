function qs(element){
    return document.querySelector(element)
}


window.addEventListener ('load', function(){

    let $nameProduct= qs('#name'),
    $nameProductErrors = qs('#nameProductErrors'),
    $inputNameProduct = qs('#inputNameProduct'),

    $price =qs('#price'),
    $priceErrors = qs('#priceErrors'),
    $inputPrice =qs('#inputPrice'),

    $discount =qs('#discount'),
    $discountErrors = qs('#discountErrors'),
    $inputDiscount =qs('#inputDiscount'),

    $description =qs('#description'),
    $descriptionErrors = qs('#descriptionErrors'),
    $inputDescription = qs ('#inputDescription'),

    $category =qs('#category'),
    $categoryErrors = qs('#categoryErrors'),
    $inputCategory = qs ('#inputCategory'),

    $subcategory =qs('#subcategory'),
    $subcategoryErrors= qs('#subcategoryErrors'),
    $inputSubcategory = qs('#inputSubcategory'),


    $image= qs('#inputImage'),
    $imageErrors= qs('#imageErrors'),
    $inputImage = qs('#inputImage'),

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/;
    regExImg = /^.*\.(jpg|png|jpeg|gif)$/;

    //addProduct NOMBRE

    $nameProduct.addEventListener('blur', function(){
        console.log($nameProduct.value.trim())
        switch (true) {
            case !$nameProduct.value.trim():
                $nameProductErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputNameProduct.classList.add('is-invalid')
              break;
              case !regExAlpha.test($nameProduct.value):
                $nameProductErrors.innerHTML = 'Ingresa un nombre valido'
                $inputNameProduct.classList.add('is-invalid')
        
            default:
                $inputNameProduct.classList.remove('is-invalid')
                $inputNameProduct.classList.add('is-valid')
                $nameProductErrors.innerHTML = ""
                break;
        };



    } );
    
    // Precio
   

    $price.addEventListener('blur', function(){
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

    
    
    
     };

     
     });

     //DESCUENTO
     $discount.addEventListener('blur', function(){
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

     // DESCRIPCION


    $description.addEventListener('blur', function(){
        console.log($description.value.trim())
        switch (true) {
            case !$description.value.trim():
                $descriptionErrors.innerHTML = 'El campo descripción es obligatorio'
                $inputDescription.classList.add('is-invalid')
              break;
              case !regExAlpha.test($description.value):
                $descriptionErrors.innerHTML = 'Ingresa una descripción valida'
                $inputDescription.classList.add('is-invalid')
        
            default:
                $inputDescription.classList.remove('is-invalid')
                $inputDescription.classList.add('is-valid')
                $descriptionErrors.innerHTML = ""
                break;

    
    
    
     };

     
     });
     
          // CATEGORIA


    $category.addEventListener('blur', function(){
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


    $subcategory.addEventListener('blur', function(){
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

     $image.addEventListener('blur', function(){
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



     })
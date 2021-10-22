window.addEventListener("DOMContentLoaded", () => {
    let stock = 10
    let $plus = document.querySelector('#plus')
    let $minus = document.querySelector('#minus')
    let $count = document.querySelector('#count')

    $count.value = 1
    
    $minus.addEventListener('click', () => {
        $count.value > 1 && $count.value --
    })
    
    $plus.addEventListener('click', () => {
        $count.value < stock && $count.value ++
    })
  })

    
    

  


 
  

    







   
    







/* Capturo los elementos del DOM */
let navBar = document.getElementById("navigation-bar-mobile");
let searchBar = document.getElementById("search");
let menuLogin = document.getElementById("login-registro")

function dropMenu(){    
    let subcategoryMenu = document.querySelector(".active");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    } else {
        navBar.style.display = "block";
        searchBar.style.display = "none";
        subcategoryMenu ? subcategoryMenu.classList.remove("active") : ""
    }
}

function dropSearch(){
    let subcategoryMenu = document.querySelector(".active");
    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    } else {
        searchBar.style.display = "block";
        navBar.style.display = "none";
        subcategoryMenu.classList.remove("active")
    }
}

function dropSubCategoryMenu (id) {
    let list = document.getElementById(`${id}`)
    list.classList.toggle("active")
    navBar.style.display = "none";
    searchBar.style.display = "none";
}

 function closeWindow () {
     document.querySelector(".active").classList.remove("active")
 }

 if(window.scrollY >= 100){
     console.log(window.scrollY )
    document.querySelector(".header-menu").classList.add("header-opacity")
}else {
    document.querySelector(".header-menu").classList.remove("header-opacity")
     
}

function dropLogin(){
    if (menuLogin.style.display ==="block") {
        menuLogin.style.display = "none"
    } else {
        menuLogin.style.display = "block"
    }
}
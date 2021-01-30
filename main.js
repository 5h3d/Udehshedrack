const burger = document.querySelector(".burg")
const nav = document.querySelector(".nav")
const logo = document.querySelector(".logo")
const times = document.querySelector(".burge")

burger.addEventListener("click", ()=>{
    if (nav.style.display == "none"){
        nav.style.display = "block"
        logo.style.color = "#ccc"
        burger.style.opacity ="0"
        times.style.opacity = "0.9"
    }else {
        nav.style.display = "none"
        logo.style.color = "#000"
        burger.style.opacity ="1"
        times.style.opacity = "0"
        nav.style.color = "#333"
        

    }
});

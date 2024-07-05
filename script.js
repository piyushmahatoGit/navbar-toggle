const toogle = document.getElementById(C);
const item = document.querySelector(".dropdown-nav-list");

toogle.addEventListener("click", function(){
    if(item.classList.contains("show")){
        item.classList.remove("show");
    }
    else{
        item.classList.add("show");
    }
});
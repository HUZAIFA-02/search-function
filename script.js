function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let items = document.querySelectorAll('.product');
    let titles = document.getElementsByClassName('product-title');

    for (let i = 0; i < titles.length; i++) {
        let value = titles[i].innerHTML || titles[i].innerText || titles[i].textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = ""; 
        } else {
            items[i].style.display = "none"; 
        }
    }
};



// nav bar 

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if (navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", "bx-x");
    } else {
        searchBox.classList.replace("bx-x", "bx-search");
    }
});

let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeBtn = document.querySelector(".nav-links .bx-x");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", () => {
    navLinks.style.left = "0";
});
closeBtn.addEventListener("click", () => {
    navLinks.style.left = "-100%";
});

let catarrow = document.querySelector(".cat-arrow");

catarrow.addEventListener("click", () => {
    navLinks.classList.toggle("show1");
});
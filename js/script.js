



let getButton = document.getElementById('myBtn')





window.addEventListener("scroll", function () {
    console.log("scrolling...");
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scroll");
    }else{
        navbar.classList.remove("navbar-scroll");
    }
});



window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        getButton.style.display = 'block';
    } else {
        getButton.style.display = 'none';
    }
});

getButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
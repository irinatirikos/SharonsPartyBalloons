document.querySelectorAll("nav li").forEach(item => {
    item.addEventListener("click", function() {
        this.querySelector("ul").classList.toggle("show");
    });
});
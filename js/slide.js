const contents = document.querySelectorAll(".slide_menu")

contents.forEach(item => {
    item.addEventListener("click", function () {
        this.classList.toggle("active")
    })
})

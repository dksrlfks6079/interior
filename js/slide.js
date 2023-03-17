const contents = document.querySelectorAll(".btn")

contents.forEach(item => {
    item.addEventListener("click", function () {
        this.classList.toggle("active")
    })
})

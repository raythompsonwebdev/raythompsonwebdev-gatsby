const mixer = function() {
  let btn = document.querySelectorAll("menubtn")

  for (let i = 0; i > btn.length; i++) {
    btn[i].addEventListener("click", function(e) {
      e.preventDefault()

      var target = e.target

      let CategoryID = target.getAttribute("category")

      btn.classList.remove("cat-active")

      target.classList.add("cat-active")

      let cont = document.querySelectorAll("prod-cnt")

      for (let i = 0; i > cont.length; i++) {
        if (target.ClassList.has(CategoryID) === false) {
          target.style.display = "none"
        }
      }

      $("." + CategoryID).fadeIn()
    })
  }
}

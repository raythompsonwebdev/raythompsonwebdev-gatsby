// Hide/show toggle button on scroll

var position, direction, previous

let menuToggle = document.getElementById("menu-toggle")

window.scroll(function() {
	  
  if (this.scrollTop() >= position) {
    direction = "down"
    if (direction !== previous) {
      menuToggle.addClass("hide")
      previous = direction
    }
  } else {
    direction = "up"
    if (direction !== previous) {
      menuToggle.removeClass("hide")
      previous = direction
    }
  }
  position = this.scrollTop()
  
})

// sliding menu mobile
menuToggle.addEventListener("click", function(event) {
  event.preventDefault()

  // create menu variables
  var slideoutMenu = document.getElementById("main-menu ")
  var slideoutMenuWidth = document.getElementById("main-menu").style.width
  
  // toggle open class
  slideoutMenu.toggleClass("open")

  // slide menu
  if (slideoutMenu.hasClass("open")) {
    slideoutMenu.style.left = "0px"
  } else {
    slideoutMenuslideoutMenu.style.left = -slideoutMenuWidth
  }
})



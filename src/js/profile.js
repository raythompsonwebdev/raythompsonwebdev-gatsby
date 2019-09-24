
//graph
var graphBar = document.getElementsByClassName("bar")

for (var i = 0; i < graphBar.length; i++) {
  
  //console.log(this)
  
  //var percentage = graphBar.dataset.percentage
  
  //console.log(percentage)

  var pos = 0

  var id = setInterval(frame, 50)

  function frame() {
    
    if (pos === percentage) {
      clearInterval(id)
    } else {
      pos++
      graphBar.style.width = pos + "%"
    }
  }
}


//Hero Slider
var slideIndex = 1

showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName("slidesPanels")
  var dots = document.getElementsByClassName("dot")

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block"
  dots[slideIndex - 1].className += " active"
}

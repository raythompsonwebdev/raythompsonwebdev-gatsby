//Hero Slider IIFE

// (function($) {
//   $(".hero-slider ul a").click(function() {
//     //reset all the items
//     $(".customBlock ul a").removeClass("active")
//     //set current item as active
//     $(this).addClass("active")
//     //scroll it to the right position
//     $(".hero-slider .mask").scrollTo($(this).attr("rel"), 300)
//     //disable click event
//     return false
//   })
// })(jQuery)

// Responsive chart
;(function responsiveGraph() {
  var chartBar = document.querySelectorAll(".bar")

  chartBar.forEach(function(key) {
    var percentage = 0

    var percentageMaxWidth = key.dataset.percentage

    var id = setInterval(frame, 1500)

    function frame() {
      if (percentage == percentageMaxWidth) {
        clearInterval(id)
      } else {
        percentage++

        //key.style.width = `${percentageMaxWidth}%`;
        key.style.width = "".concat(percentageMaxWidth, "%")
      }
    }
  })
})()

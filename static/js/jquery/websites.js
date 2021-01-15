//Menu Switch

jQuery(document).ready(function($) {
  $(function() {
    /* filter */
    $(".menuSwitch ul li").click(function() {
      var CategoryID = $(this).attr("category")

      $(".menuSwitch ul li").removeClass("cat-active")

      $(this).addClass("cat-active")

      $("div.content .prod-cnt").each(function() {
        if ($(this).hasClass(CategoryID) == false) {
          $(this).css({ display: "none" })
        }
      })
      $("." + CategoryID).fadeIn()
    })
  })
})

(function() {

    let btn = document.getElementsByClassName("menubtn")
    
    btn.addEventListener('click', function() {
  
      let CategoryID = this.getAttribute("category")
  
      btn.classList.remove("cat-active")
  
      this.classList.add("cat-active")
  
      let cont = document.getElementsByClassName("prod-cnt")
  
      for( let i = 0; i > cont.length; i++){
  
        if (this.ClassList.has(CategoryID) === false){
          this.style.display = "none" 
        }
  
      }
  
      //$("." + CategoryID).fadeIn()
  
    })
  
  })()
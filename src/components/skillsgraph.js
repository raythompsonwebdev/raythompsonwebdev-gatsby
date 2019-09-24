import React from "react"
import $ from 'jquery'
 

class SkillsGraph extends React.Component {

  constructor(props) {

    super(props)

    this.bars = {
      bar:[
        {
          id:1,
          name:"HTML",
          percentage:"85",
          classnam: "bar"
        },
        {
          id:2,
          name:"CSS",
          percentage:"70",
          classnam: "bar"
        },
        {
          id:3,
          name:"PHP/MYSQL",
          percentage:"90",
          classnam: "bar"
          
        },
        {
          id:4,
          name:"JAVASCRIPT",
          percentage:"80",
          classnam: "bar"
        },
        {
          id:5,
          name:"PYTHON",
          percentage:"65",
          classnam: "bar"
        },

      ]
    
    }
       
  }

  componentDidMount() {
    // Jquery here $(...)...
    //graph
    $("li .bar").each(function() {
        
      var percentage = $(this).data("percentage")

      $(this).animate(
        {
          width: percentage + "%",
        },
        1000
      )
    })
  }
    

  render(){

    const { bar } = this.bars  

    
    return (
     

      <section id="prof_cont">

        <h1>Skill Level</h1>

        <article id="chart">

          <ul id="bars">
            
            {bar.map(( bar ) => (

                <li key={bar.id} >

                  <div className={bar.classnam} data-percentage={bar.percentage} ref={el => this.el = el} ></div>

                  <span>{bar.name}</span>

                </li>

            ))}
           
          </ul>

        </article>
      
      </section>
    )
  }
  
  
}

export default SkillsGraph

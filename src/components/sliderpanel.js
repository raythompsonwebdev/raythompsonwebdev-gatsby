import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import $ from "jquery"



const SliderPanel = () => {

  //Hero Slider
  $(document).ready(function($) {
    $(".hero-slider ul a").click(function() {
      //reset all the items
      $(".hero-slider ul a").removeClass("active")
      //set current item as active
      $(this).addClass("active")
      //scroll it to the right position
      $(".hero-slider .mask").scrollTo($(this).attr("rel"), 300)
      //disable click event
      return false
    })
  })

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allSliderpaneltextJson {
            nodes {
              id
              title
              header
              buttonname
              task1
              task2
              task3
              task4
              task5
            }
          }
        }
      `}
      render={data => (

        <section id="prof_cont-a">
          <h1>Development Courses Taken</h1>

          <article className="hero-slider">

            <ul id="list">
            {data.allSliderpaneltextJson.nodes.map(node => (
              <li>
                <Link to="#" rel={`panel-${node.id}`} className="active">
                {node.buttonname}
                </Link>
              </li>
              ))}             
            </ul>

            <div className="mask">
              <div className="slider-body">
                {/*loop*/}
                {data.allSliderpaneltextJson.nodes.map(node => (
                  <article className="panel" key={node.id} id={`panel-${node.id}`}>
                    <h2>{node.title}</h2>

                    <figure className="slider-panel">
                      <Link to="" className="fancybox">
                        <span></span>
                      </Link>

                      <figcaption>
                        <h3>{node.header}</h3>
                        <h4>{node.subheader}</h4>

                        <ul>
                          <li>{node.task1}</li>
                          <li>{node.task2}</li>
                          <li>{node.task3}</li>
                          <li>{node.task4}</li>
                          <li>{node.task5}</li>
                        </ul>

                        <div className="clearfix"></div>
                      </figcaption>
                    </figure>

                  </article>
                ))}
                {/*loop end*/}
              </div>
            </div>
          </article>
        </section>
      )}
    />
  )
}

export default SliderPanel

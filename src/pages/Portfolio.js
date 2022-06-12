import React from "react";
import "../styles/portfolio.css"
import { portfolio } from "../data"



const Portfolio = () => {
  
  return ( 
    <>
    <section id="portfolio">
			
        <h2>My completed Projects</h2>
      
    {portfolio.map((portfolio) => (

      <div className="container">
        <section>
            <div className="overlay">
              <div className="description">
              <a href={portfolio.repository} target="_blank">
               <button className="button"> Github </button>
              </a>
              <a href={portfolio.site} target="_blank">
               <button className="button"> Live demo </button>
                </a>
                <p>
                  {portfolio.description}
                </p>
               
                <h6>Technologies</h6>
                {portfolio.technologies.map(tech => (
                <ul className="tools vertical-list">
                  <li>{tech}</li>
                </ul>
                 ))}
              </div>
              
              <img src={portfolio.src} alt={portfolio.name}/>
              <h4 className="heading"><span className="glyphicon glyphicon-hand-up"></span>{portfolio.name}</h4>
            </div>
          </section>
          </div>
           ))}
          </section>
         
 </>
  );
}

export default Portfolio;
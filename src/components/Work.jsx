import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Work = () => {
  let project_counter = 1;
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section>
        <article>
          {data.projects.map((element) => (
          
            <a href={element.url} key={element.title} className="projects-card">
              <img src={element.imgSrc} alt={element.title} />
              <div className="project-title-more">
                <h3>{project_counter++}. {element.title}</h3>
                <p>{element.description}</p>
                <a href={element.url}>Live Preview</a>
              </div>
            </a>
          ))}

          {/* <Carousel 
            // showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={10000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((element) => (
              <div key={element.title} className="workItem">
                <img src={element.imgSrc} alt={element.title} />
                <aside>
                  <h3>{element.title}</h3>
                  <p>{element.description}</p>
                  <a target={"blank"} href={element.url}>
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel> */}
        </article>
      </section>
    </div>
  );
};

export default Work;

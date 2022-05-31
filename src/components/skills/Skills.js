import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>Application Development </h3>
                  <p>I have experience building full stack microservices and user facing applciations using Java, Spring Boot, React, Node JS, etc.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Dev Ops</h3>
                  <p>Built CI/CD piplines and organizational patterns for Jenkins, Bamboo, Gitlab, Docker.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-globe" />
                </span>
                <div className="desc">
                  <h3>Nonprofit Management</h3>
                  <p>With founding and operating my own community based nonprofit organization, I have experience in nonprofit operartions and community organizing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills;
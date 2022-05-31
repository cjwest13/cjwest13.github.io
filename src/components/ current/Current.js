import React from "react";

const Current = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="current">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading">Current Project Progress - Donor Integration Service</h2>
              <span className="heading-meta">An microservices based solution to automatically export donation data from online donation 
              platform to a donor database.</span>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>Phase One - In Progress</h3>
                  <p>Completion of Donor Integration Service that satisfies BLM Seaoast Initial Use Case & in AWS. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-loader" />
                </span>
                <div className="desc">
                  <h3>Phase Two - To Do</h3>
                  <p>Sktech out UI screens, start development of GrpahQl BBF and creation of database in AWS.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-loader" />
                </span>
                <div className="desc">
                  <h3>Phase Three - To Do</h3>
                  <p>Devleop User Interface and completion of GraphQl BFF and database creation in AWS. Push all to AWS.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-loader" />
                </span>
                <div className="desc">
                  <h3>Phase Four - To Do</h3>
                  <p>Start and Complete UAT Testing. Add fixes and and log suggested features to the backlong as necessary.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-loader" />
                </span>
                <div className="desc">
                  <h3>Phase Five - To Do</h3>
                  <p>Share to other nonprofit organizations. Repeat phase 1 to add new features.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-loader" />
                </span>
                <div className="desc">
                  <h3>Phase Six - To Do</h3>
                  <p>Collect all of the Infinity Stones on my Thanos ish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Current;
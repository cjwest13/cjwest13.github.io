import React from "react";

const Resume = () => {
  return (
    <div>
      <section className="colorlib-experience" data-section="resume">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">timeline</span>
              <h2 className="colorlib-heading animate-box">Resume</h2>
              <p><a href="https://github.com/cjwest13" target="_blank">Full Resume Here</a></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Co-Founder/Executive Director of Black Lives Matter Seacoast <span>July 2020-present</span><br/><span>Volunteer Role</span></h2>
                      <p>Clifton has led both political and social efforts for the organization with a focus of giving back to the community.
                        During this role, Clifton has gain and increased skills related to nonprofit organization management, marketing and graphic creation, social media
                        management, fundraising, networking and outreach, communication and mentorship.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Software Dveloper for Lincoln Finanical Group <span>May 2018-present</span></h2>
                      <p>
                        Recently moved into leadership position acting Technical Lead for 3 Scrum Teams driving the technical strategy 
                        for the teams and mentoring & guiding developers in the organizaiton.
                        Developed various backend microservices using Java Spring and Node.js.
                        Built new microservices on React and GraphQl, making it the first time those technologies were implemented in sector of the organization.
                        Utilized Docker to deploy containers to AWS and Docker Enterprise.
                        Built substiantial relationships across the enterprise.
                        Utilized the Atlasian tool suite for Source Control ( Bitbucket ), CICD ( Bamboo ), and KanBan/Scrum organization ( Jira ).
                        Utilized Gitlab for source control and CICD pipelines to Docker and AWS.
                        Established new CI/CD pipelines and patterns on Gitlab and Atlasian Stack.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Liberty Mutual Insurance <span>July 2016-May 2018</span></h2>
                      <p>Held maintain and add feature enhancements to front end Java and Angular Tomcat Application and microservices.
                        Attended a company hosted conference ceter around Docker and learnt more how to use and implement Docker for various usecases.
                        With that knowledge, he took the lead on migrating an on perm Document publishing solution to an Dockerized Solution. 
                        Working hand and hand with the Lead Artichect. 
                        Utilized the Atlasian tool suite for Source Control ( Bitbucket ), CICD ( Bamboo ), and Scrum organization ( Jira ).</p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume;
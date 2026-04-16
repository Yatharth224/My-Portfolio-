import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Techritzy Private Limited, Indore</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered scalable backend services using Flask and Django; built data
              pipelines processing 100,000+ records to power AI-based search and
              recommendation systems. Implemented JWT authentication and RBAC with
              SQL query optimization in Agile sprints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Organiser, Team Outreach</h4>
                <h5>AARUUSH, SRM Institute of Science and Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led coordination between 5+ college teams and 10+ stakeholders to
              organize technical events with 500+ attendees. Managed outreach
              campaigns across inter-college partnerships under tight deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

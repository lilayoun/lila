import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Student</b> at
        <a href="https://www.unc.edu/"> UNC Chapel Hill</a>, double majoring in
        Information Science and Computer Science with a minor in Data Science.
      </p>
    );
    const two = (
      <p>
        Outside of school, I travel around and stream games on Twitch!
      </p>
    );

    const tech_stack = [
      "Angular",
      "C",
      "CSS",
      "Git",
      "GitHub",
      "HTML",
      "Java",
      "JavaScript",
      "Python",
      "React",
      "SQL",
      "TypeScript"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about-me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have used:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Li-La Youn" src={"/assets/ranch.png"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;

import React from "react";
import "../styles/Courses.css";
import FadeInSection from "./FadeInSection";

class Courses extends React.Component {
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
        const cs_classes = [
            "Introduction to Programming and Data Science",
            "Data Structures and Analysis",
            "Systems Fundamental",
            "Foundations of Programming",
            "Computer Organization",
            "Files and Databases",
            "Foundations of Software Engineering",
            "Introduction to NLP",
            "Modern Web Programming",
            "Discrete Mathematics"
        ];

        const inls_classes = [
            "Tools For Information Literacy",
            "Foundations of Information Science",
            "Information Systems Analysis and Design",
            "Information Use for Organizational Effectiveness",
            "Introduction to Database Concepts and Applications",
            "Information Retrieval",
            "Applications of Natural Language Processing",
            "Information Science Capstone",
        ];

        return (
            <div id="courses">
                <FadeInSection>
                    <div className="section-header">
                        <span className="section-title">/ courses</span>
                    </div>
                    <div className="course-content">
                        <div className="course-classes">
                            {"Information Science Courses: "}
                            <ul className="inls_classes">
                                {inls_classes.map(function (tech_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{tech_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                            {"Computer Science Courses: "}
                            <ul className="cs_classes">
                                {cs_classes.map(function (tech_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{tech_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                </FadeInSection>
            </div>
        )
      }
}

export default Courses;
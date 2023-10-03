import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react"
import ReactVisibilitySensor from "react-visibility-sensor";
const Statement = " I'm very skilled at what I do, below are my top 6 skills "
const skills = [
    { skill: 'ReactJs/HTML/SCSS', percentage:100 },
    { skill: 'Excel/VBA', percentage: 100 },
    { skill: 'JavaScript', percentage: 100 },
    { skill: 'Python', percentage: 100 },
    { skill: 'SQL', percentage: 90 },
    { skill: 'Java', percentage: 75 },
  ]
function chunkArray(arr, chunkSize) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
function Skilllevels(){
    const chunkedSkills = chunkArray(skills, 3);
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle visibility change
    const handleVisibilityChange = (visible) => {
      if (visible) {
        setIsVisible(true);
      }
    };

    return (
        <div className="container mh-3">
            <div className="row skills-content">
                <h3>Skills</h3>
                <p> {Statement} </p>
                {chunkedSkills.map((chunk, index) => (
                    <div key={index} className="col-lg-6">
                        {chunk.map((skill, skillIndex) => (
                        <div key={skillIndex} className="progress overflow-visible">
                            <span className="skill">{skill.skill}<i className="val">{skill.percentage}%</i></span>
                            <div className="progress-bar-wrap">
                                <ReactVisibilitySensor onChange={handleVisibilityChange}>
                                    {isVisible ? (<ProgressBar completed={skill.percentage} bgColor="#3498db" animateOnRender={true} borderRadius="" isLabelVisible={false}/>):(<div>-</div>)}
                                </ReactVisibilitySensor>
                            </div>
                        </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
// bgColor: #5faee3;
export default Skilllevels;
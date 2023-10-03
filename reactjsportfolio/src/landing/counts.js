import { useState } from "react"
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { JournalRichtext,Trophy,MortarboardFill } from "react-bootstrap-icons";

export const inputs = [
    { id: "count1", icon: <><Trophy/></>, level: 6, text: "Years as a Data analyst"},
    { id: "count2", icon: <><JournalRichtext/></>, level: 1, text: "Decade of experience"},
    { id: "count3", icon: <><MortarboardFill/></>, level: 2, text: "Degrees"},
    { id: "count4", icon: <><JournalRichtext/></>, level: 12, text: "over a dozen projects"},
  ]
function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle visibility change
    const handleVisibilityChange = (visible) => {
      if (visible) {
        setIsVisible(true);
      }
    };
    return (
        <div className="container mt-3">
            <div className="row">
            {inputs.map((input) => (
                <div key={input.id} className="col-lg-3 col-6 mt-5 mt-lg-0 skill_issue">
                    <div className="count-box">
                        <i className="bi">{input.icon}</i>
                        <ReactVisibilitySensor onChange={handleVisibilityChange}>
                            {isVisible ? (<CountUp end={input.level} duration={3}/>) : (<span> 0 </span>)}
                        </ReactVisibilitySensor>
                        <p>{input.text}</p>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    );
}

export default Skills;
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/About.scss";
import TimeLineData from "../assets/timeLine.js";

const About = () => {
  return (
    <VerticalTimeline className="about-container">
      {TimeLineData &&
        TimeLineData.map((n) => (
          <VerticalTimelineElement
            key={n.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              fontWeight: 300,
              background: "rgb(21,24,31)",
              color: "#888",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={n.date}
            iconStyle={{ background: "#121316", color: "##888" }}
            icon={n.iconSrc}
          >
            <h3 className="vertical-timeline-element-title">{n.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
            <p>{n.description}</p>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
};

export default About;

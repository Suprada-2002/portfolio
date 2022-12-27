import { FcDepartment, FcFactory, FcReading, FcHome } from "react-icons/fc";

const TimeLineData = [
  {
    id: 1,
    date: "2020-present",
    iconSrc: <FcDepartment />,
    title: "Internship",
    location: "Bhubneswar",
    description:
      "Working at Highradius Corporation as a Full Stack Web Developer",
  },
  {
    id: 2,
    date: "2019-2023",
    iconSrc: <FcFactory />,
    title: "Graduation",
    location: "Gunupur",
    description:
      "Pursuing B.Tech Degree from Gandhi Institue of Engineering and Technology, Gunupur.",
  },
  {
    id: 3,
    date: "2017-2019",
    iconSrc: <FcReading />,
    title: "12th Grade",
    location: "Kalahandi",
    description:
      "Completed 12 from Goverment Autonomous University, Kalahandi, Odisha.",
  },
  {
    id: 4,
    date: "2006-2017",
    iconSrc: <FcHome />,
    title: "10th Grade",
    location: "Kalahandi",
    description:
      "Completed 10 from Sri Sathya Sai Vidhya Mandir, Kalahandi, Odisha.",
  },
];

export default TimeLineData;

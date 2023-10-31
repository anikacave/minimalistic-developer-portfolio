import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";
import { useEffect } from "react";
import ReactRoundedImage from "react-rounded-image"
import cur from '../../assets/images/icon-black.png';

const About = () => {
  useEffect(() => {
    document.title = "About";
  })
  return (
    <article className="about-main">
      <div style={{ alignSelf: 'center' }}>
        <ReactRoundedImage
          image={cur}
          roundedColor="black"
          imageWidth="150"
          imageHeight="150"
          roundedSize="0"
          borderRadius="50%"
          style={{ alignSelf: 'center', display: "block" }}
        />
      </div>
      <AboutMe />
      <Education />
      {/* <Stack /> */}
      <WorkExperience />
      {/* <DownloadResume /> */}
      <DownloadResume />
      <ScrollButton />
    </article>
  );
};

export default About;

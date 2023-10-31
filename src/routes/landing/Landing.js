import AboutPreview from "./AboutPreview";
import HeaderPreview from "./HeaderPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactPreview from "./ContactPreview";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import Image from 'react-image-resizer';
import cur from '../../assets/images/icon-black.png';
import ReactRoundedImage from "react-rounded-image"

const Mainpage = () => {
  useEffect(() => {
    document.title = "Anika Cave";
  })
  return (
    <article className="main-page">
      <HeaderPreview />
      {/* <h1 className="pink-text">TODO: Insert a freaking picture</h1> */}
      {/* <Image
        img src={cur} alt="cur"
        height={400}
        width={400}
        style={{ alignSelf: 'center', borderRadius: "50%", display: "block" }}
      /> */}
      <div style={{ alignSelf: 'center' }}>
        <ReactRoundedImage
          image={cur}
          roundedColor="black"
          imageWidth="300"
          imageHeight="300"
          roundedSize="0"
          borderRadius="50%"
          style={{ alignSelf: 'center', display: "block" }}
        />
      </div>
      {/* <AboutPreview /> */}
      {/* <PortfolioPreview /> */}
      {/* <ContactPreview /> */}
      <ScrollButton />
      {/* <Footer /> */}
    </article>
  );
};

export default Mainpage;

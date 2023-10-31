import Projects from "./Projects";
import Footer from "../../components/footer/Footer";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Projects";
  })
  return (
    <article className="portfolio-main">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
    </article>
  );
};

export default Portfolio;

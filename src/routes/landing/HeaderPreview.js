import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text">
        Hi, I'm <br></br>
        <em className="pink-text">Anika Cave </em>
        {/* <br></br> Cornell Student */}
      </h1>
      {/* <p className="gray-text">Quantitative Developer</p> */}
      {/* <Link className="pink-text" to="/portfolio">
        Check my work
      </Link> */}
    </article>
  );
};

export default HeaderPreview;

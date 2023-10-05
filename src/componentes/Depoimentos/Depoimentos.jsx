import PropTypes from "prop-types";
import { StyledDepoimentos } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Depoimentos() {
  // Definir as setas de navegação antes de usá-las em settings
  const CustomPrevArrow = (props) => {
    return <div onClick={props.onClick}>Previous</div>;
  };

  const CustomNextArrow = (props) => {
    return <div onClick={props.onClick}>Next</div>;
  };

  // Definir PropTypes para as setas de navegação
  CustomPrevArrow.propTypes = {
    onClick: PropTypes.func.isRequired
  };

  CustomNextArrow.propTypes = {
    onClick: PropTypes.func.isRequired
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <CustomNextArrow />
  }

  return (
    <StyledDepoimentos>
      <div id="titulo">
        <h1>DEPOIMENTOS</h1>
      </div>

      <div id="container">
        <Slider {...settings}>
          <div className="depoimento">1</div>
          <div className="depoimento">2</div>
          <div className="depoimento">3</div>
          <div className="depoimento">4</div>
          <div className="depoimento">5</div>
          <div className="depoimento">6</div>
          <div className="depoimento">7</div>
          <div className="depoimento">8</div>
          <div className="depoimento">9</div>
        </Slider>
      </div>
    </StyledDepoimentos>
  );
}

import React from "react";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { slideInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "react-multi-carousel/lib/styles.css";
import { styles } from "../../../animation/styles";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 476 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 476, min: 0 },
    items: 1,
  },
};

// const styles = {
//   bounce: {
//     animation: "x 1s",
//     animationName: Radium.keyframes(slideInDown, "bounce"),
//   },
//   fadeInDown: {
//     animation: "x 2s",
//     animationName: Radium.keyframes(slideInDown, "fadeInDown"),
//   },
//   fadeInDown1: {
//     animation: "x 3s",
//     animationName: Radium.keyframes(slideInDown, "fadeInDown"),
//   },
// };

export default function Slider() {
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  return (
    <StyleRoot>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={true}
        autoPlay={true}
      >
        <div className="div-carousel-item1">
          <div className="div-page">
            <h1 className="h-slider-title" style={styles.fadeInDown2s}>
              Montana Resort
            </h1>
            <p className="p-slider-title" style={styles.fadeInDown3s}>
              Unlock to enjoy the view of Montana
            </p>{" "}
          </div>
        </div>
        <div className="div-carousel-item2">
          <div className="div-page">
            <h1 className="h-slider-title" style={styles.fadeInDown2s}>Life Is Beautiful</h1>
            <p className="p-slider-title" style={styles.fadeInDown3s}>
              Unlock to enjoy the view of Montana
            </p>{" "}
          </div>
        </div>
      </Carousel>
    </StyleRoot>
  );
}

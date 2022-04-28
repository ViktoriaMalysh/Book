import React from "react";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { StyleRoot } from "radium";
import { styles } from "../../../animation/styles";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";


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

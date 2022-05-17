import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
// import { Range } from "react-range";
import React, { useEffect, useLayoutEffect, useState } from "react";

// import Slider, { Range } from "rc-slider";
// import "rc-slider/assets/index.css";
import "./rooms.css";
// import { useState } from "react";


var thumbsize = 14;

const Slider = ({ min, max }) => {
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(avg);
  const [maxVal, setMaxVal] = useState(avg);

  const width = 300;
  const minWidth =
    thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const minPercent = ((minVal - min) / (avg - min)) * 100;
  const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
  const styles = {
    min: {
      width: minWidth,
      left: 0,
      "--minRangePercent": `${minPercent}%`
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
      "--maxRangePercent": `${maxPercent}%`
    }
  };

  useLayoutEffect(() => {
    setAvg((maxVal + minVal) / 2);
  }, [minVal, maxVal]);

  console.log(maxVal, avg, min, max, maxPercent);

  return (
    <div
      className="min-max-slider"
      data-legendnum="2"
      data-rangemin={min}
      data-rangemax={max}
      data-thumbsize={thumbsize}
      data-rangewidth={width}
    >
      <label htmlFor="min">Minimum price</label>
      <input
        id="min"
        className="min"
        style={styles.min}
        name="min"
        type="range"
        step="1"
        min={min}
        max={avg}
        value={minVal}
        onChange={({ target }) => setMinVal(Number(target.value))}
      />
      <label htmlFor="max">Maximum price</label>
      <input
        id="max"
        className="max"
        style={styles.max}
        name="max"
        type="range"
        step="1"
        min={avg}
        max={max}
        value={maxVal}
        onChange={({ target }) => setMaxVal(Number(target.value))}
      />
    </div>
  );
};

function Rooms() {
  // const [slideValue, Slider] = useSlider(1, 100, 70, "Threshold", "threshold");

  return (
    <StyleRoot>
      <div className="div-rooms">
        <div className="div-rooms-header">
          <p className="p-rooms-title" style={styles.fadeInDown2s}>
            Rooms{" "}
          </p>
        </div>

        <div className="div-rooms-block">
          <div className="div-rooms-search">
            <span className="span-rooms-title">Search Tours</span>
            <div className="div-rooms-search-block1">
              <label className="label-block1">Destination</label>
              <input
                className="input-block1"
                placeholder="New York, USA"
              ></input>
              <div className="div-block1-icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="div-rooms-search-block1">
              <label className="label-block1">Check In</label>
              <input
                className="input-block1"
                placeholder="MM / DD / YY"
              ></input>
            </div>
            <div className="div-rooms-search-block1">
              <label className="label-block1">Check Out</label>
              <input
                className="input-block1"
                placeholder="MM / DD / YY"
              ></input>
            </div>
            <div className="div-rooms-search-block1">
              <label className="label-block1">Travel Type</label>
              <input
                className="input-block1"
                placeholder="MM / DD / YY"
              ></input>
            </div>
          </div>
          <div className="div-rooms-title">Showing 1-10 of 50 Results</div>
          <div className="div-rooms-sort">sort</div>
          <div className="div-rooms-category">
            <span className="span-rooms-title">Category</span>

            <div className="div-rooms-search-block1">
              <input
                type="checkbox"
                className="input-block1-checkbox"
                placeholder="New York, USA"
              ></input>

              <label className="label-block1-checkbox">Adventure Tours</label>
            </div>

            <div className="div-rooms-search-block1">
              <input
                type="checkbox"
                className="input-block1-checkbox"
                placeholder="New York, USA"
              ></input>

              <label className="label-block1-checkbox">Business Tours</label>
            </div>
            <div className="div-rooms-search-block1">
              <input
                type="checkbox"
                className="input-block1-checkbox"
                placeholder="New York, USA"
              ></input>

              <label className="label-block1-checkbox">Group Tours</label>
            </div>
            <div className="div-rooms-search-block1">
              <input
                type="checkbox"
                className="input-block1-checkbox"
                placeholder="New York, USA"
              ></input>

              <label className="label-block1-checkbox">Couple Tours</label>
            </div>
            <div className="div-rooms-search-block1">
              <input
                type="checkbox"
                className="input-block1-checkbox"
                placeholder="New York, USA"
              ></input>

              <label className="label-block1-checkbox">City Tours</label>
            </div>
          </div>

          <div className="div-rooms-rating">
            rating
            {/* <Slider /> */}
            <Slider min={300} max={3000} />

          </div>

          <div className="div-rooms-advertising">advertising</div>
          <div className="div-rooms-cards">sards</div>
        </div>

        <div className="div-faq-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Rooms;

import Footer from "../../components/footer/Footer";
import { StyleRoot } from "radium";
import { styles } from "../../animation/styles";
import "./contact.css";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

// import { useEffect, useRef, useState } from "react";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
];

function Contacts() {
  return (
    <StyleRoot>
      <div className="div-contact">
        <div className="div-contact-header">
          <span className="span-contact-title">Get In Touch</span>
        </div>
        <div className="div-maps">
          <GoogleMapReact
            bootstrapURLKeys={{
              // remove the key if you want to fork
              key: "AIzaSyCZur5gRVE4AHqzt2GV4QT2CzQ-rvaCAP0",
              language: "en",
              region: "US",
            }}
            defaultCenter={{ lat: 51.506, lng: -0.169 }}
            defaultZoom={15}
            distanceToMouse={distanceToMouse}
          >
            {points.map(({ lat, lng, id, title }) => {
              <MyMarker
                key={id}
                lat={lat}
                lng={lng}
                text={id}
                tooltip={title}
              />;
            })}
          </GoogleMapReact>
        </div>
        <div className="div-contacts-info">
          <span className="span-contact-message-title">Get in Touch</span>

          <div className="div-contact-message">
            <textarea
              className="input-contact-message"
              placeholder="Enter message"  
            ></textarea>
            <button className="button-contact-send">SEND</button>
          </div>
          <div className="div-contact-contact"></div>
        </div>

        {/* footer */}
        <div className="div-8-end div-contact-footer" style={styles.bounce}>
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Contacts;

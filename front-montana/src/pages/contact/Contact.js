import Footer from "../../components/footer/Footer";
import { StyleRoot } from "radium";
import { styles } from "../../animation/styles";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./contact.css";
import ModalSendMessage from "./ModalSendMessage";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
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
  const store = useSelector((state) => state);
  const [show, setShow] = useState(false)

  const handleSendMessage = () => {
    
  } 

  return (
    <StyleRoot>
      <div className="div-contact">
      {show ? <ModalSendMessage /> : <></>}
        <div className="div-contact-header">
          <p className="p-contact-title" style={styles.fadeInDown2s}>
            Get In Touch
          </p>
        </div>
        <div className="div-maps">
          <GoogleMapReact
            bootstrapURLKeys={{
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
            <button
              className="button-contact-send"
              onClick={() => handleSendMessage()}
              disabled={!store.users.isAuth}
            >
              SEND
            </button>
            {!store.users.isAuth ? (
              <span className="span-contact-help-message">
                Please <Link to="/sign_in">sign in</Link> before sending a
                message
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="div-contact-contact">
            <div className="div-contact-block1">
              <i class="bi bi-house icon-contact"></i>
              <span className="span-contact-block-title">
                Buttonwood, California.
              </span>
              <span className="span-contact-block-text">
                Rosemead, CA 91770
              </span>
            </div>
            <div className="div-contact-block2">
              <i class="bi bi-phone icon-contact"></i>
              <span className="span-contact-block-title">+1 253 565 2365</span>
              <span className="span-contact-block-text">
                Mon to Fri 9am to 6pm
              </span>
            </div>
            <div className="div-contact-block3">
              <i class="bi bi-envelope icon-contact"></i>
              <span className="span-contact-block-title">
                support@colorlib.com
              </span>
              <span className="span-contact-block-text">
                Send us your query anytime!
              </span>
            </div>
          </div>
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

import Footer from "../../../components/footer/Footer";
import { styles } from "../../../animation/styles";
import { StyleRoot } from "radium";
import "./bookRoom.css";

const BookRoom = () => {
  return (
    <StyleRoot>
      <div className="book-room">
        <div className="book-room-header">
          <p className="p-book-room-title" style={styles.fadeInDown2s}>
            Tour Booking{" "}
          </p>
        </div>

        <div className="book-room-block">
          <div className="book-room-block1">
            <h4 className="book-block1-title">Your Details</h4>
            <div>
              <div className="left">
                <label>First Name</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your First Name"
                />
              </div>
              <div className="right">
                <label>Last Name</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Last Name"
                />
              </div>
            </div>

            <div>
              <input
                className="book-room-input"
                type="text"
                placeholder="ghjn"
              />
              <input
                className="book-room-input1"
                type="text"
                placeholder="ghjn"
              />
            </div>
            <input className="book-room-input" type="text" placeholder="ghjn" />
          </div>
          <div className="book-room-block2"></div>
          <div className="book-room-block3"></div>
          <div className="book-room-block4"></div>
        </div>

        <div className="book-room-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
};

export default BookRoom;

import Footer from "../../../components/footer/Footer";
import { styles } from "../../../animation/styles";
import { StyleRoot } from "radium";
import "./bookRoom.css";
import { Icon } from "semantic-ui-react";

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
              <div className="left">
                <label>Email</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="right">
                <label>Phone</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Phone"
                />
              </div>
            </div>
            <label>Address</label>
            <br />
            <input
              className="book-room-input"
              type="text"
              placeholder="Your Address"
            />
          </div>

          <div className="book-room-block2">
            <h4 className="book-block2-title">Booking Summary</h4>
            <div>
              <strong className="left">Packages Cost:</strong>
              <span className="right">$400</span>
            </div>

            <div className="mt-20">
              <strong className="left">Tour Guide:</strong>
              <span className="right">$400</span>
            </div>

            <div className="mt-20p">
              <strong className="left">Discount:</strong>
              <span className="right">$400</span>
            </div>

            <div>
              <strong className="left">Vat:</strong>
              <span className="right">$400</span>
            </div>

            <div>
              <strong className="left">Sub Total:</strong>
              <span className="right">$400</span>
            </div>
            <div className="block2-line" />
            <div>
              <strong className="left">Total:</strong>
              <span className="right-strong">$4000</span>
            </div>
            <button className="block2-button">
              Book Now
              <Icon name="arrow right" />
            </button>
          </div>
          <div className="book-room-block3">
            <h4 className="book-block2-title">Payment Info</h4>

            <div>
              <div className="left">
                <label>Card Holder Name</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Name On Card"
                />
              </div>
              <div className="right">
                <label>Card Number</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Card Number"
                />
              </div>
            </div>

            <div>
              <div className="left">
                <label>Expire Date</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Expire"
                />
              </div>
              <div className="right">
                <label>CCV</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="CCV"
                />
              </div>
            </div>
          </div>
          <div className="book-room-block4">
            <h4 className="book-block2-title">Billing Address</h4>

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
              <div className="left">
                <label>Email</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <div className="right">
                <label>Phone</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Phone"
                />
              </div>
            </div>

            <div>
              <div className="left">
                <label>Street</label>
                <br />
                <input
                  className="book-room-input"
                  type="text"
                  placeholder="Your Street Name"
                />
              </div>

              <div className="right">
                <div className="right-1">
                  <label>House</label>
                  <br />
                  <input
                    className="book-room-input-num"
                    type="text"
                    placeholder="Your House Number"
                  />
                </div>
                <div className="right-2">
                  <label>Flat</label>
                  <br />
                  <input
                    className="book-room-input-num"
                    type="text"
                    placeholder="Your Flat Number"
                  />
                </div>
              </div>

              <label>Flat</label>
                  <br />
                  <input
                    className="book-room-input"
                    type="text"
                    placeholder="Your Flat Number"
                  />
            </div>
          </div>
        </div>

        <div className="book-room-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
};

export default BookRoom;

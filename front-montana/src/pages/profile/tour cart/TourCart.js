import "./tourCart.css";
import { styles } from "../../../animation/styles";
import { StyleRoot } from "radium";
import Footer from "../../../components/footer/Footer";
import { Icon, Table } from "semantic-ui-react";
import { useState } from "react";
import { useSelector } from "react-redux";

const TourCart = () => {
  const [count, setCount] = useState(0);
  const store = useSelector((state) => state);

  function addHandlers(count) {
    var minus = count.querySelector(".minus");
    var number = count.querySelector(".number");
    var plus = count.querySelector(".plus");
    plus.addEventListener("click", function () {
      number.innerText++;
      console.log(number.innerText);
    });
    minus.addEventListener("click", function () {
      number.innerText--;
    });
  }

  // console.log("1");

  var counts = document.querySelectorAll(".count1");
  counts.forEach(addHandlers);

  return (
    <StyleRoot>
      <div className="tour-cart">
        <div className="tour-cart-header">
          <p className="p-tour-cart-title" style={styles.fadeInDown2s}>
            Tour Cart
          </p>
        </div>

        <div className="tour-cart-block">
          <table>
            <thead>
              <tr>
                <th>Thumb</th>
                <th>Tour Name</th>
                <th>Price</th>
                {/* <th>Quantity</th> */}
                <th>Amount Of Days</th>
                <th>Sub Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Услуга" className="imgc">
                  <img
                    src="https://live.themewild.com/travelox/assets/img/tour/1.jpg"
                    className="img-card"
                  />
                </td>
                <td data-label="Описание" className="name">
                  Norway Lake Tour
                </td>
                <td data-label="Цена" className="price">
                  $1,500
                </td>
                {/* <td data-label="Цена">
                  <div className="count1">
                    <button
                      className="button-count minus"
                      // onClick={() => setCount(count - 1)}
                    >
                      &#8722;
                    </button>
                    <div className="number">1</div>
                    <button
                      className="plus"
                    >
                      &#43;
                    </button>
                  </div>
                </td> */}
                <td data-label="Скидка" className="price">
                  {store.tickets.days}D/{store.tickets.nights}N
                </td>

                <td data-label="Скидка" className="price">
                  $1,500
                </td>
                <td data-label="Скидка">
                  <button className="delete">
                    <Icon name="times" size="large" />
                  </button>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="tour-cart-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
};

export default TourCart;

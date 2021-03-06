import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import Footer from "../../components/footer/Footer";
import "./gallery.css";

function Gallery() {
  return (
    <StyleRoot>
      <div className="div-gallery">
        <div className="div-gallery-header">
          <p className="p-gallery-title" style={styles.fadeInDown2s}>
            Gallery
          </p>
        </div>
        <div className="div-gallery-photo">
          <div className="div1">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-1.jpg"
              />
              {/* <base target="_blank"></base> */}
              <a
                href="#"
                src="photo/gallery-1.jpg"
                className="a-gallery-change1"
                style={{ color: "white" }}
              >
                <i className="fa fa-plus" />
              </a>
            </div>
          </div>
          <div className="div2">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-2.jpg"
              />
              <a
                href="https://www.youtube.com/watch?v=cCSkv62weI0"
                className="a-gallery-change1"
                style={{ color: "white" }}
              >
                <i className="fa fa-plus" />
              </a>
            </div>
          </div>

          <div className="div3">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-3.jpg"
              />
              <a
                href="https://www.youtube.com/watch?v=cCSkv62weI0"
                className="a-gallery-change1"
                style={{ color: "white" }}
              >
                <i className="fa fa-plus" />
              </a>
            </div>
          </div>

          <div className="div4">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-4.jpg"
              />
              <a
                href="https://www.youtube.com/watch?v=cCSkv62weI0"
                className="a-gallery-change1"
                style={{ color: "white" }}
              >
                <i className="fa fa-plus" />
              </a>
            </div>
          </div>

          <div className="div5">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-6.jpg"
              />
              <a
                href="https://www.youtube.com/watch?v=cCSkv62weI0"
                className="a-gallery-change1"
                style={{ color: "white" }}
              >
                <i className="fa fa-plus" />
              </a>
            </div>{" "}
          </div>

          <div className="div6">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-5.jpg"
              />
              <a
                href="https://www.youtube.com/watch?v=cCSkv62weI0"
                className="a-gallery-change1"
                style={{ color: "white" }}
              >
                <i className="fa fa-plus" />
              </a>
            </div>{" "}
          </div>
        </div>

        <div className="div-8-end div-gallery-footer">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Gallery;

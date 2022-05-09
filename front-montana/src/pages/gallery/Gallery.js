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
            </div>
          </div>
          <div className="div2">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-2.jpg"
              />
            </div>
          </div>

          <div className="div3">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-3.jpg"
              />
            </div>
          </div>

          <div className="div4">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-4.jpg"
              />
            </div>
          </div>

          <div className="div5">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-6.jpg"
              />
            </div>{" "}
          </div>

          <div className="div6">
            <div className="div7">
              <img
                className="img-gallery"
                src="https://live.themewild.com/travelox/assets/img/gallery/gallery-5.jpg"
              />
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

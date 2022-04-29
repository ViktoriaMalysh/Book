import { StyleRoot } from "radium";
import { styles } from "../../animation/styles";
import Footer from "../../components/footer/Footer";
import AboutUs from "../Home Page/components/About";
import "./about.css";

function About() {
  return (
    <StyleRoot>
      <div className="div-about">
        <div className="div-about-header">
          <p className="p-about-title" style={styles.fadeInDown2s}>
            About Montana
          </p>
        </div>

        <div className="div-about-block2">
          <AboutUs />
        </div>

        {/* footer */}
        <div className="div-8-end div-about-footer" style={styles.bounce}>
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default About;

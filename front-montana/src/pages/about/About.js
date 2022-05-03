import { StyleRoot } from "radium";
import { styles } from "../../animation/styles";
import Footer from "../../components/footer/Footer";
import AboutUs from "../Home Page/components/About";
import Links from "../Home Page/components/Links";
import Comments from "../about/Comments";
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
        <div className="div-about-link">
          <Links />
        </div>

        <div className="div-about-comments">
          <Comments/>
        </div>

        <div className="div-about-counter">
          {[
            {
              id: 1,
              icon: "bi bi-people i-item",
              count: 30,
              title: "+ Tour Guides",
            },
            {
              id: 2,
              icon: "bi bi-hand-thumbs-up i-item",
              count: 600,
              title: "+ Tour Completed",
            },
            {
              id: 3,
              icon: "bi bi-graph-up i-item",
              count: 25,
              title: "+ Travel Experience",
            },
            {
              id: 4,
              icon: "bi bi-trophy i-item",
              count: 50,
              title: "+ Win Awards",
            },
          ].map((item) => (
            <div className="div-about-counter-item">
              <i className={item.icon}></i>
              {/* <br /> */}
              <span
                className="span-about-counter-item-count"
                data-count="+"
                data-to="600"
                data-speed="3000"
              >
                {item.count}
              
              </span>
              {/* <br /> */}
              <span className="span-about-counter-item-title">
                {item.title}
              </span>
            </div>
          ))}
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

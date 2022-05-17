import Footer from "../../components/footer/Footer";
import Accordion from "./Accordion";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";

import "./faq.css";

const data = [
  {
    title: "Do I Need A Business Plan?",
    paragraph:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.",
  },
  {
    title: "How Long Should A Business Plan Be?",
    paragraph:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.",
  },
  {
    title: "What Payment Gateway You Support?",
    paragraph: "Lorem ipsum...",
  },
  {
    title: "Usage guides",
    paragraph: "Lorem ipsum...",
  },
];

function Faq() {
  return (
    <StyleRoot>
      <div className="div-faq">
        <div className="div-faq-header">
          <p className="p-faq-title" style={styles.fadeInDown2s}>
            Faq{" "}
          </p>
        </div>

        <div className="div-faq-block">
          {data.map((item) => (
            <Accordion title={item.title} content={item.paragraph} />
          ))}
        </div>

        <div className="div-faq-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Faq;

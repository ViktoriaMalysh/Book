import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import "./termsOfService.css";

function TermsOfService() {
  return (
    <StyleRoot>
      <div className="div-terms">
        <div className="div-terms-header">
          <p className="p-terms-title" style={styles.fadeInDown2s}>
            Terms Of Service
          </p>
        </div>

        <div className="div-terms-block">ssbfbf</div>

        <div className="div-terms-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default TermsOfService;

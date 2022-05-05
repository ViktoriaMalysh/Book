import { StyleRoot } from "radium";
import { useParams } from "react-router-dom";
import { styles } from "../../animation/styles";
import Footer from "../../components/footer/Footer";
import "./teamSingle.css";

function TeamSingle() {
  const params = useParams();
  const prodId = params.id;
  console.log("prodId:", prodId);


  return (
    <StyleRoot>
      <div className="div-team-single">
        <div className="div-team-single-header">
          <p className="p-team-single-title" style={styles.fadeInDown2s}>
            Team
          </p>
        </div>

        <div className="div-team-single-user">
          <img src=""/>
        </div>

        <div className="div-8-end div-team-single-footer">
          <Footer/>
        </div>
      </div>
    </StyleRoot>
  );
}

export default TeamSingle;

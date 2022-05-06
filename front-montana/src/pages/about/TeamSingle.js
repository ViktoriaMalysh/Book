import { StyleRoot } from "radium";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styles } from "../../animation/styles";
import Footer from "../../components/footer/Footer";
import "./teamSingle.css";

function TeamSingle() {
  const store = useSelector((state) => state);
  const [singleTeam, setSingleTeam] = useState([]);
  const params = useParams();

  useEffect(() => {
    // console.log("prodId:", prodId);
    const prodId = params.id;
    console.log(prodId);
    setSingleTeam(store.team.showTeam[prodId - 1]);
  }, []);

  console.log("singleTeam", singleTeam);

  return (
    <StyleRoot>
      <div className="div-team-single">
        <div className="div-team-single-header">
          <p className="p-team-single-title" style={styles.fadeInDown2s}>
            Team
          </p>
        </div>

        <div className="div-team-single-user">
          <img src={singleTeam.avatar} className="img-team-single-avatar" />

          <div className="div-team-single-user-block1">
            <span className="span-team-single-user-block1-title">
              {singleTeam.userName}
            </span>
            <span className="span-team-single-user-block1-position">
              {singleTeam.position}
            </span>
            <span className="span-team-single-user-block1-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters packages and web page editors now
              usepackages and web page editors now use.
            </span>
            <div className="div-team-single-user-block1-email">
              <span className="span-team-single-user-block1-email-icon">
                <i className="fa fa-envelope" />
              </span>
              <span className="span-team-single-user-block1-email">
                {singleTeam.email}
              </span>
            </div>
            <div className="div-team-single-user-block1-phone">
              <span className="span-team-single-user-block1-phone-icon">
                <i className="fa fa-phone" />
              </span>

              <span className="span-team-single-user-block1-phone">
                {singleTeam.phoneNumber}
              </span>
            </div>
          </div>
        </div>

        <div className="div-team-single-user-block2">
          <span className="span-team-single-user-block2-title">Biography</span>
          <span className="span-team-single-user-block2-text1">
            Sed ut perspiciatis unde omnis totam rem chitecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </span>
          <span className="span-team-single-user-block2-text2">

            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable.
          </span>
          <img className="img-team-single-user-block2" src="https://live.themewild.com/travelox/assets/img/team/bio.jpg" />
        </div>
  
        <div className="div-8-end div-team-single-footer">  
          <Footer />      
        </div>      
      </div>    
    </StyleRoot>  
  );
}

export default TeamSingle;

import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import "./profile.css";
import { Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <StyleRoot>
      <div className="profile">
        <div className="profile-header">
          <p className="p-profile-title" style={styles.fadeInDown2s}>
            My Profile{" "}
          </p>
        </div>

        <div className="profile-block">
          <div className="profile-avatar">
            <img
              src="https://live.themewild.com/travelox/assets/img/team/single.jpg"
              className="img-profile-avatar"
            />
          </div>
          <div className="profile-block1">
            <div>
              <span className="profile-block1-name">Marie R Lippert</span>
              <button className="fl-r fs-20 delete-button">
                <Icon name="trash alternate" />
              </button>
            </div>
            <strong className="profile-block1-gender">female</strong>
            <div className="mt-20">
              <i className="profile-block1-comment">
                "Memories take us back, dreams take us forward..."
              </i>
            </div>
            <div className="mt-20">
              <div className="text">
                <span className="custom-icon">
                  <Icon name="envelope outline" />
                </span>
                email@gmail.com
              </div>

              <div className="text">
                <span className="custom-icon">
                  <Icon name="phone" />
                </span>
                +380676683643
              </div>

              <div className="text">
                <span className="custom-icon">
                  <Icon name="cc mastercard" />
                </span>
                54XX-XXXX-XXXX-XX21
              </div>

              <div className="text">
                <span className="custom-icon">
                  <Icon name="home" />
                </span>
                Entuziastov Street, 18, 13
              </div>

              <div>
                <button className="button-profile-edit">
                  <Icon name="pencil" />
                  Edit profile
                </button>

                <button
                  className="button-profile-edit fl-r"
                  onClick={()=> navigate("/tour_cart")}
                >
                  <Icon name="shopping cart" />
                  Tour Card
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
};

export default Profile;

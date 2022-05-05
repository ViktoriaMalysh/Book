import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

import "./team.css";

const team = [
  {
    id: 1,
    userName: "Malissa Fierro",
    avatar: "	https://live.themewild.com/travelox/assets/img/team/team-1.jpg",
    position: "Tour Guide",
  },
  {
    id: 2,
    userName: "Malissa Fierro",
    avatar: "	https://live.themewild.com/travelox/assets/img/team/team-1.jpg",
    position: "Tour Guide",
  },
  {
    id: 3,
    userName: "Malissa Fierro",
    avatar: "	https://live.themewild.com/travelox/assets/img/team/team-1.jpg",
    position: "Tour Guide",
  },
  {
    id: 4,
    userName: "Malissa Fierro",
    avatar: "	https://live.themewild.com/travelox/assets/img/team/team-1.jpg",
    position: "Tour Guide",
  },
];

function Team() {
  return (
    <div className="div-ab-team">
      <span className="span-ab-team-title">Meet Our Team</span>
      <span className="span-ab-team-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </span>

      <div className="div-ab-team-block">
        {team.map((item) => (
          <div className="div-ab-team-item">
            <div className="div-ab-team-item-img">
              <img className="img-ab-team-item-img" src={item.avatar} />
              <div className="div-ab-team-item-block2">
                <div className="div-ab-team-item-icons">
                  <base target="_blank"></base>
                  <a href="https://www.facebook.com/" className="icon-ab-team">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/" className="icon-ab-team">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/" className="icon-ab-team">
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/" className="icon-ab-team">
                    <i class="fa fa-linkedin"></i>
                  </a>

                  <a href="https://www.youtube.com/" className="icon-ab-team">
                    <i class="fa fa-youtube"></i>{" "}
                  </a>
                </div>
                <div className="div-ab-team-item-text">
                  <Link to={`/team_single/${item.id}`} className="link-team">
                    <span className="span-ab-team-item-title">
                      {item.userName}
                    </span>
                  </Link>
                  <span className="span-ab-team-item-text">
                    {item.position}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

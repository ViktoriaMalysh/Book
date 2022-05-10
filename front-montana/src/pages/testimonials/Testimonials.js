import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import Footer from "../../components/footer/Footer";
import "../about/comments.css"
import "./testimonials.css";

const comments = [
  {
    id: 1,
    userName: "Sylvia H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 2,
    userName: "Sylvia H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 3,
    userName: "Sylvia H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 4,
    userName: "Sylvia H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 5,
    userName: "Sylvia H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 6,
    userName: "Sylvia H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
];

function Testimonials() {
  return (
    <StyleRoot>
      <div className="div-testimonials">
        <div className="div-testimonials-header">
          <p className="p-testimonials-title" style={styles.fadeInDown2s}>
            Testimonials
          </p>
        </div>

        <div className="div-testimonials-block">
          {comments.map((item) => (
            <div className="div-ab-comments-item">
              <span className="bnm">
                <i className="fa fa-quote-right"></i>
              </span>
              <div className="div-ab-comments-item-title">
                <span className="bnm1">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </span>
                <span className="span-ab-comment">{item.comment}</span>
                <div className="div-ab-comments-user">
                  <img className="img-ab-comments-avatar" src={item.avatar} />
                  <span className="span-ab-comments-userName">
                    {item.userName}
                  </span>
                  <span className="span-ab-comments-status">{item.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="div-8-end div-testimonials-footer">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Testimonials;

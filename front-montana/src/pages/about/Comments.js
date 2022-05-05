import "./comments.css";
import "font-awesome/css/font-awesome.min.css";

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
  // {
  //   id: 4,
  //   userName: "Sylvia H Green",
  //   avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
  //   comment:
  //     "There are many variations of passages available but the majority have suffered alteration in some form.",
  //   stars: 5,
  //   status: "Traveller",
  // },
  // {
  //   id: 5,
  //   userName: "Sylvia H Green",
  //   avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
  //   comment:
  //     "There are many variations of passages available but the majority have suffered alteration in some form.",
  //   stars: 5,
  //   status: "Traveller",
  // },
  // {
  //   id: 6,
  //   userName: "Sylvia H Green",
  //   avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
  //   comment:
  //     "There are many variations of passages available but the majority have suffered alteration in some form.",
  //   stars: 5,
  //   status: "Traveller",
  // },
];

function Comments() {
  return (
    <div className="div-ab-comments">
      <span className="span-ab-comments-title">What Client Say`s</span>
      <span className="span-ab-comments-text">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </span>

      <div className="div-ab-comments-block">
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
    </div>
  );
}

export default Comments;

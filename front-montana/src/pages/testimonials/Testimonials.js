import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import Footer from "../../components/footer/Footer";
import "../about/comments.css";
import "./testimonials.css";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

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
  {
    id: 7,
    userName: "Sylvia1 H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 8,
    userName: "Sylvia1 H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
  {
    id: 9,
    userName: "Sylvia1 H Green",
    avatar: "https://live.themewild.com/travelox/assets/img/testimonial/2.jpg",
    comment:
      "There are many variations of passages available but the majority have suffered alteration in some form.",
    stars: 5,
    status: "Traveller",
  },
];

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          // <div>
          //   <h3>Item #{item}</h3>
          // </div>
          <div className="div-ab-comments-item mr-40">
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
    </>
  );
}

function Testimonials() {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(comments.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(comments.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % comments.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <StyleRoot>
      <div className="div-testimonials">
        <div className="div-testimonials-header">
          <p className="p-testimonials-title" style={styles.fadeInDown2s}>
            Testimonials
          </p>
        </div>

        <div className="div-testimonials-block">
          <div className="div-items">
            <Items currentItems={currentItems} />
          </div>
          <div className="paginate">
          <ReactPaginate
            // breakLabel="..."
            // nextLabel="next >"
            // onPageChange={handlePageClick}
            // pageRangeDisplayed={5}
            // pageCount={pageCount}
            // previousLabel="< previous"
            // renderOnZeroPageCount={null}
            // className='paginate'
            // previousClassName='paginate-previous'


            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            />
            </div>
        </div>

        <div className="div-8-end div-testimonials-footer">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default Testimonials;

import { useDispatch, useSelector } from "react-redux";
import { Icon, Rating, Table } from "semantic-ui-react";
import "./detailBlock.css";

const detailsFromCard = [
  {
    id: 1,
    title: "Tour Overview",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 2,
    title: "Included And Excluded",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
];

const DetailBlock = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  return (
    <>
      <img
        src="https://live.themewild.com/travelox/assets/img/tour/single.jpg"
        className="img-detail"
      />
      {/* <div className="detail-block1"> */}
      <div className="detail-block-left">
        <span className="span-left-title">
          {store.tickets.showSingleRoom.propertyDescription.name}
        </span>
        <div className="detail-left-rating">
          <Rating
            icon="star"
            className="detail-star-rating"
            size="huge"
            defaultRating={4}
            maxRating={
              store.tickets.showSingleRoom.propertyDescription.starRating
            }
            disabled
          />{" "}
          (25 Reviews)
        </div>
      </div>
      <div className="detail-block-right">
        <span className="detail-right-price">
          {
            store.tickets.showSingleRoom.propertyDescription.featuredPrice
              .currentPrice.formatted
          }
        </span>
        <div className="detail-right-price-text">Per Person</div>
      </div>

      <div className="detail-line" />
      <div className="detail-block2">
        {" "}
        <span className="mr-10">
          <Icon name="clock outline" color="blue" />
          {store.tickets.days} Days/{store.tickets.nights} Night
        </span>
        <span className="mr-10">
          {" "}
          <Icon name="user outline" color="blue" /> 7+ Person
        </span>
        <span className="mr-10">
          {" "}
          <Icon name="bookmark outline" color="blue" /> Adventure{" "}
        </span>
        <span className="mr-10">
          {" "}
          <Icon name="point" color="blue" />{" "}
          {store.tickets.showSingleRoom.propertyDescription.address.cityName}
        </span>
      </div>
      {detailsFromCard.map((item) => (
        <div className="detail-block3">
          <h1 className="details-block3-title">{item.title}</h1>
          <div className="mt-20">
            <span className="details-block3-text">{item.text}</span>
          </div>
        </div>
      ))}

      <div className="details-block4">
        <Table celled fixed singleLine>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Jamie</Table.Cell>
              <Table.Cell>Approved</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill</Table.Cell>
              <Table.Cell>Denied</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill</Table.Cell>
              <Table.Cell>Denied</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Jill</Table.Cell>
              <Table.Cell>Denied</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="detail-block3">
        <h1 className="details-block3-title">Tour Plan</h1>
        <div className="mt-20">
          <span className="details-block3-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
        </div>
      </div>

      {/* block5 */}

      <div className="detail-block3">
        <h1 className="details-block3-title">Tour Gallery</h1>
        <div className="mt-20">
          <span className="details-block3-text">
            Accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident,
            similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga.
          </span>
        </div>
      </div>
      <div className="details-gallery">
        <div className="div11">
          <div className="div7">
            <img
              className="img-gallery"
              src="https://live.themewild.com/travelox/assets/img/destination/1.jpg"
            />
            {/* <base target="_blank"></base> */}
            <a
              href="#"
              src="photo/gallery-1.jpg"
              className="a-gallery-change1"
              style={{ color: "white" }}
            >
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
        <div className="div21">
          <div className="div7">
            <img
              className="img-gallery"
              src="https://live.themewild.com/travelox/assets/img/destination/13.jpg"
            />
            {/* <base target="_blank"></base> */}
            <a
              href="#"
              src="photo/gallery-1.jpg"
              className="a-gallery-change1"
              style={{ color: "white" }}
            >
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
        <div className="div31">
          <div className="div7">
            <img
              className="img-gallery"
              src="https://live.themewild.com/travelox/assets/img/destination/14.jpg"
            />
            <a
              href="#"
              src="photo/gallery-1.jpg"
              className="a-gallery-change1"
              style={{ color: "white" }}
            >
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
        <div className="div41">
          <div className="div7">
            <img
              className="img-gallery"
              src="https://live.themewild.com/travelox/assets/img/destination/15.jpg"
            />
            {/* <base target="_blank"></base> */}
            <a
              href="#"
              src="photo/gallery-1.jpg"
              className="a-gallery-change1"
              style={{ color: "white" }}
            >
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>

        <div className="div51">
          <div className="div7">
            <img
              className="img-gallery"
              src="https://live.themewild.com/travelox/assets/img/destination/16.jpg"
            />
            {/* <base target="_blank"></base> */}
            <a
              href="#"
              src="photo/gallery-1.jpg"
              className="a-gallery-change1"
              style={{ color: "white" }}
            >
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
      </div>

      <div className="details-block6">
        <h2 className="details-block6-title">Reviews (20)</h2>
        <div className="details-reviews">
          <img
            src="https://live.themewild.com/travelox/assets/img/blog/com-1.jpg"
            className="img-reviews"
          />
          <div className="details-reviews-content">
            <h3 className="details-reviews-autor">Name Surname</h3>
            <div>
              <span className="details-reviews-posted-on">
                <Icon name="clock outline" />
                10 August 2021
              </span>
            </div>
            <span className="details-reviews-summary">
              Absolutely loved this place and it’s location as it was easy to
              commute. I would definitely recommend staying here, the front desk
              was polite and helpful as we got there earlier then our check in
              time and assist us with our luggage accommodations and later
              return to check in at a later time as well. Overall it was an
              excellent stay.
            </span>
            <div>
              <Rating
                icon="star"
                className="detail-reviews-star-rating"
                size="large"
                defaultRating={4}
                maxRating={5}
                disabled
              />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="details-leave-review">
        <h1 className="details-leave-review-title">Leave Your Review</h1>
        <div className="details-leave-review-text">
          Your Rate:
          <Rating
            icon="star"
            className="detail-leave-review-star-rating"
            size="large"
            defaultRating={0}
            maxRating={5}
          />{" "}
        </div>

        <div className="details-form">
          <input
            className="input-details-left"
            type="text"
            placeholder="Your Name*"
          />

          <input
            className="input-details-right"
            type="email"
            placeholder="Your Email*"
          />
        </div>
        <input
          className="input-details1"
          type="text"
          placeholder="Your Review*"
        />
        <button className="details-leave-review-button">Submit Review</button>
      </div>
    </>
  );
};

export default DetailBlock;

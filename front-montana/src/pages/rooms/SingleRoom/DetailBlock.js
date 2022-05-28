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
        <span className="span-left-title">Norway Lake Tour</span>
        <div className="detail-left-rating">
          <Rating
            icon="star"
            className="detail-star-rating"
            size="huge"
            defaultRating={4}
            maxRating={5}
            disabled
          />{" "}
          (25 Reviews)
        </div>
      </div>
      <div className="detail-block-right">
        <span className="detail-right-price">$154</span>
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
          <Icon name="point" color="blue" /> Norway Lake
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
      </div>
    </>
  );
};

export default DetailBlock;

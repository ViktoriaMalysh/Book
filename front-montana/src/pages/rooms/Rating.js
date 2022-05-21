import { Rating } from "semantic-ui-react";

function StarRating() {
  return (
    <>
      <span className="span-rooms-title">Rating</span>
      {[
        { id: 1, rating: 5 },
        { id: 2, rating: 4 },
        { id: 3, rating: 3 },
        { id: 4, rating: 2 },
        { id: 5, rating: 1 },
      ].map((item) => (
        <div className="div-rooms-search-block1" key={item.id}>
          <input type="checkbox" className="input-block1-checkbox"></input>
          <Rating
            icon="star"
            className="star-rating"
            size="huge"
            defaultRating={item.rating}
            maxRating={5}
            disabled
          />
        </div>
      ))}
    </>
  );
}

export default StarRating;

import { useDispatch, useSelector } from "react-redux";
import { Icon } from "semantic-ui-react";

const BookBlock = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  return (
    <>
      <span className="single-room-book-title">Book This Tour</span>

      <div className="single-room-book-block1">
        <label className="label-block1">First Name</label>
        <input className="input-name" type="text" placeholder="First Name" />
      </div>

      <div className="single-room-book-block1">
        <label className="label-block1">Last Name</label>
        <input className="input-name" type="text" placeholder="Last Name" />
      </div>

      <div className="single-room-book-block1">
        <label className="label-block1">Email</label>
        <input className="input-email" type="text" placeholder="Your Email" />
      </div>

      <div className="single-room-book-block1">
        <label className="label-block1">Phone</label>
        <input className="input-phone" type="number" placeholder="Your Phone" />
      </div>

      <div className="div-rooms-search-block1">
        <label className="label-block1">Date</label>
        <input
          className="input-date"
          type="date"
          placeholder="MM / DD / YY"
          // onChange={(e) =>
          //   setCheckOut(dayjs(e.target.value).format("YYYY-MM-DD"))
          // }
        ></input>
      </div>
      <div className="div-rooms-search-additional-service">
        <span className="span-title-item">Additional Service</span>
        {[
          { key: 1, value: "Tour Guide" },
          { key: 1, value: "Insurance" },
          { key: 1, value: "Dinner" },
          { key: 1, value: "Car Rent" },
          { key: 1, value: "With Pets" },
        ].map((item) => (
          <div className="additional-service-item">
            <input type="checkbox" className="additional-service-input"></input>
            <span className="span-additional-service">{item.value}</span>
          </div>
        ))}
      </div>
      <button className="button-additional-service">
        {" "}
        <Icon name="check circle outline" /> Book Now
      </button>
    </>
  );
};

export default BookBlock;

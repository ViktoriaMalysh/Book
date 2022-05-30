import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showSingleRooms } from "../../../redux/actionTickets";
import "./singleRoom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../../components/footer/Footer";
import { styles } from "../../../animation/styles";
import { StyleRoot } from "radium";
import { Icon } from "semantic-ui-react";
import BookBlock from "./BookBlock";
import DetailBlock from "./DetailBlock";

const SingleRoom = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const [prodId, setProdId] = useState(0);
  const params = useParams();

  useEffect(() => {
    setProdId(params.id)
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/properties/get-details",
      params: {
        id: "424023",
        checkIn: "2020-01-08",
        checkOut: "2020-01-15",
        adults1: "1",
        currency: "USD",
        locale: "en_US",
      },
      headers: {
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
        "X-RapidAPI-Key": "9dac91a6d8msha622f503c32b6abp134209jsnecbaf079fac6",
      },
    };

    // dispatch(showSingleRooms(options));
  }, []);

  // useEffect(() => {
  //   if (store.tickets.showSingleRoom.length !== 0) {
  //     let a = store.tickets.showSingleRoom.atAGlance.travellingOrInternet.travelling;
  //     console.log(Object.keys(a))
  //     // const d = a.map((item)=> console.log(item.keys))
  //   }
  // }, [store.tickets.showSingleRoom])

  return (
    <>
      {/* {store.tickets.showSingleRoom.length !== 0 ? ( */}
      <StyleRoot>
        <div className="single-room">
          <div className="div-rooms-header">
            <p className="p-rooms-title" style={styles.fadeInDown2s}>
              {store.tickets.showSingleRoom.propertyDescription &&
                store.tickets.showSingleRoom.propertyDescription.name}{" "}
            </p>
          </div>
          <div className="single-room-block">
            <div className="single-room-book">
              <BookBlock id={prodId} />
            </div>
            <div className="single-room-detail">
              <DetailBlock />
            </div>
          </div>

          <div className="div-faq-footer div-8-end">
            <Footer />
          </div>
        </div>
      </StyleRoot>
      {/* // ) : (
      //   <>
      //     <div className="single-room-loading-header" />

      //     <div className="single-room-loading">
      //       <Spinner animation="border" variant="info" />
      //     </div>
      //   </>
      // )} */}
    </>
  );
};

export default SingleRoom;

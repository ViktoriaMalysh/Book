// import "./searchTours.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { showRooms } from "../../redux/actionTickets";
import CardsRoom from "./Cards";

const countryOptions = [
  { key: "tr", value: "tr_TR", flag: "tr", text: "Turkey" },
  { key: "it", value: "it_IT", flag: "it", text: "Italy" },
  { key: "fr", value: "fr_FR", flag: "fr", text: "France" },
  { key: "gr", value: "el_GR", flag: "gr", text: "Greece" },
  { key: "es", value: "es_ES", flag: "es", text: "Spain" },
  { key: "de", value: "de_DE", flag: "de", text: "Germany" },
  { key: "pl", value: "pl_PL", flag: "pl", text: "Poland" },
  { key: "lv", value: "lv_LV", flag: "lv", text: "Latvia" },
  { key: "in", value: "en_IN", flag: "in", text: "India" },
  { key: "jp", value: "ja_JP", flag: "jp", text: "Japan" },
  { key: "ca", value: "en_CA", flag: "ca", text: "Canada" },
  { key: "mx", value: "en_MX", flag: "mx", text: "Mexico" },
  { key: "us", value: "en_US", flag: "us", text: "United States" },
  { key: "cn", value: "en_CN", flag: "cn", text: "China" },
  { key: "il", value: "en_IL", flag: "il", text: "Israel" },
  { key: "cz", value: "cs_CZ", flag: "cz", text: "Czech" },
  { key: "br", value: "pt_BR", flag: "br", text: "Brazil" },
];

function SearchTours() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);


  const [search, setSearch] = useState("en_MX");
  const [checkIn, setCheckIn] = useState("2020-01-08");
  const [checkOut, setCheckOut] = useState("2020-01-15");
  const [adults, setAdults] = useState("1");

  // useEffect(() => {
  //   console.log("search", search);
  //   if (search != "") {
  //   }
  // }, [search]);

  const handleSearch = () => {
    console.log('options', search, ":", checkIn, ":", checkOut, ":", adults)
    const options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/properties/list",
      params: {
        destinationId: "1506246",
        pageNumber: "1",
        pageSize: "25",
        checkIn: checkIn,
        checkOut: checkOut,
        adults1: adults,
        sortOrder: "PRICE",
        locale: search,
        currency: "USD",
      },
      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "41c8a73cc0msh36005253ddf9396p1a020ajsn71ab7eb472c5",
      },
    };
    dispatch(showRooms(options));
    console.log('state', store.tickets.showRooms)
  };

  useEffect(() => {
    <CardsRoom/>
  }, [store.tickets.showRooms])

  return (
    <>
      <span className="span-rooms-title">Search Tours</span>
      <div className="div-rooms-search-block1">
        <Dropdown
          clearable
          fluid
          search
          selection
          options={countryOptions}
          placeholder="Select Country"
          onChange={(e, data) => setSearch(data.value)}
          // selectedLabel
        />
      </div>
      <div className="div-rooms-search-block1">
        <label className="label-block1">Check In</label>
        <input
          className="input-block1"
          type="date"
          placeholder="MM / DD / YY"
          onChange={(e) => setCheckIn(e.value)}
        ></input>
      </div>
      <div className="div-rooms-search-block1">
        <label className="label-block1">Check Out</label>
        <input
          className="input-block1"
          type="date"
          placeholder="MM / DD / YY"
          onChange={(e) => setCheckOut(e.value)}
        ></input>
      </div>
      <div className="div-rooms-search-block1">
        <label className="label-block1">Travel Type</label>
        <input className="input-block1" placeholder="Travel Type"></input>
      </div>

      <div className="div-rooms-search-block1">
        <label className="label-block1">Number of Adults</label>
        <input className="input-block1" type="number" placeholder="1"></input>
      </div>
      <button className="button-room-search" onClick={() => handleSearch()}>
        Find Now
      </button>
    </>
  );
}

export default SearchTours;

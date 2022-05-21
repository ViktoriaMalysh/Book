// import "./searchTours.css";

import { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
  { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
  { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
  { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
  { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
  { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
  { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
  { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
  { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
  { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
  { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
  { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
  { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
  { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
  { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
  { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
  { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
  { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
  { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
  { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]

function SearchTours() {
  const [search, setSearch] = useState("");

  return (
    <>
      <span className="span-rooms-title">Search Tours</span>
      <div className="div-rooms-search-block1">
        <Dropdown
          clearable
          fluid
          multiple
          search
          selection
          options={countryOptions}
          placeholder="Select Country"
        />
      </div>

      <div className="div-rooms-search-block1">
        <label className="label-block1">Locale</label>
        <input
          type=""
          className="input-block1"
          placeholder="New York, USA"
        ></input>
        <div className="div-block1-icon">
          <i className="fa fa-map-marker-alt"></i>
        </div>
      </div>
      <div className="div-rooms-search-block1">
        <label className="label-block1">Check In</label>
        <input className="input-block1" placeholder="MM / DD / YY"></input>
      </div>
      <div className="div-rooms-search-block1">
        <label className="label-block1">Check Out</label>
        <input className="input-block1" placeholder="MM / DD / YY"></input>
      </div>
      <div className="div-rooms-search-block1">
        <label className="label-block1">Travel Type</label>
        <input className="input-block1" placeholder="MM / DD / YY"></input>
      </div>
    </>
  );
}

export default SearchTours;

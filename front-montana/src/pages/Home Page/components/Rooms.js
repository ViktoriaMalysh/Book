function Rooms() {
  return (
    <>
      <div className="div-5-title">
        <p className="p-5-title">Featured Rooms</p>
        <p className="p-5-text">Choose a Better Room</p>
      </div>

      <div className="room1 overlay1">
        <div className="room-text">
          <p className="room-price" id="featuredRooms">
            From $250/night
          </p>
          <p className="room-title">Superior Room</p>
        </div>
      </div>
      <div className="room2 overlay1">
        <div className="room-text">
          <p className="room-price">From $250/night</p>
          <p className="room-title">Deluxe Room</p>
        </div>
      </div>
      <div className="room3 overlay1">
        <div className="room-text">
          <p className="room-price">From $250/night</p>
          <p className="room-title">Signature Room</p>
        </div>
      </div>
      <div className="room4 overlay1">
        <div className="room-text">
          <p className="room-price">From $250/night</p>
          <p className="room-title">Couple Room</p>
        </div>
      </div>

      <div className="div-6-tell">
        <p className="p-6-tell-title">For Reservation 0r Query?</p>
        <p className="p-6-tell-number">+10 576 377 4789</p>
      </div>
    </>
  );
}

export default Rooms;

import React from "react";

const StationItem = ({ station }) => {
  return (
    <div>
      <h2>{station.name}</h2>
      <p>Address: {station.extra.address}</p>
      <p>Free bikes: {station.free_bikes}</p>
      <p>Empty slots: {station.empty_slots}</p>
    </div>
  );
};

export default StationItem;

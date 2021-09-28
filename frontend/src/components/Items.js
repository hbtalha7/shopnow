import React from "react";
import Rating from "./Ratings";
import { Link } from "react-router-dom";

export default function Items(props) {
  const { key, item } = props;
  return (
    <div key={key} className="card">
      <Link to={`/item/${item._id}`}>
        <img className="medium" src={`/api/image/${item.image}`} alt={item.name} />
      </Link>
      <div className="card-body">
        <Link to={`/item/${item._id}`}>
          <h2>{item.name}</h2>
        </Link>
        <Rating rating={item.rating} numReviews={item.numReviews}></Rating>
        <div className="price">
          <p>₹ {item.price}</p>
        </div>
      </div>
    </div>
  );
}

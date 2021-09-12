import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemslist } from "../actions/itemsaction";
import Items from "../components/Items";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import data from "../data";
export default function Homescreen() {
  // const items=data.items
  // const loading=false
  // const error=false

  const dispatch = useDispatch();
  const itemsListsto = useSelector((state) => state.itemsListsto);
  const { loading, error, items } = itemsListsto;
  console.log(items)
  
  useEffect(() => {
    dispatch(itemslist());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : items!==undefined ?  (
        <div className="row center">
          {items.map((item) => (
            <Items key={item._id} item={item}></Items>
          ))}
        </div>
      ):(<LoadingBox></LoadingBox>)}
    </div>
  );
}

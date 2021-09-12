import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Ratings from "../components/Ratings";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import data from "../data";
import { itemdetails } from '../actions/itemsaction'
export default function Itemscreen(props) {
//   const y = props.match.params.id;
//   const item = data.items.find((x) => x._id === Number(y));
//   // console.log(y.trim());
// const loading=false
// const error=false
const itemId=props.match.params.id
  const dispatch=useDispatch()
  const [qty, setQty] = useState(1);
  const  itemdetail=useSelector((state)=> state.itemdetail)
  const {loading,error,item}=itemdetail;

  useEffect(()=>{
    dispatch(itemdetails(itemId))
  },[dispatch,itemId])  

  return (     
    
    <div>
      {loading? (<LoadingBox></LoadingBox>):
      error? (<MessageBox variant="danger">{error}</MessageBox>):
      (
        <div >
        <Link to="/">Back to Home</Link>
        <div className="row top">
        <div className="col1">
          <img className="large" src={(item.image)} alt={item.name}></img>
        </div>
  
        <div className="col2">
          <ul>
            <li>
              <h1>{item.name}</h1>
            </li>
            <li>
              <Ratings
                rating={item.rating}
                numReviews={item.numReviews}
              ></Ratings>
            </li>
            <li>
              <h1>{item.description}</h1>
            </li>
            <li>
              <h1>${item.price}</h1>
            </li>
          </ul>
        </div>
        <div className="col3">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price:</div>
                  <div className="price">${item.price}</div>
                </div>
              </li>
              <li>
                <div className="row">Status:{item.numReviews > 1 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="error">Unavailable</span>
                  )}</div>              
                  
              </li>
              {item.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                          <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(item.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                        //   onClick={()}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
            </ul>
          </div>
        </div>
        </div>
      </div>
      )}
    </div>
    
    
  );
}

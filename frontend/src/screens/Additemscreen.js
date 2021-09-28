import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import LoadingDots from '../components/loading-dots.gif';
import { useDispatch, useSelector } from "react-redux";
import { itemregister } from "../actions/itemsaction";
function Additemscreen(props) {
  const [title, settitle] = useState("");
  const [descrip, setdescrip] = useState("");
  const [price, setprice] = useState(1);
  const [qty, setqty] = useState(1);
  const [file, setFile] = useState(null);
  const [inputContainsFile, setInputContainsFile] = useState(false);
  const [currentlyUploading, setCurrentlyUploading] = useState(false);
  const [imageId, setImageId] = useState(null);
  const [progress, setProgress] = useState(null);
  let redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  const additem = useSelector((state) => state.additem);
  const { item, loading, error } = additem;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  console.log(imageId)
  const submitHandler = (e) => {
    e.preventDefault();
    let seller=userInfo.sellername
    console.log(userInfo.sellername)
      dispatch(itemregister(title, imageId, price,descrip,qty,seller));
  };

  useEffect(() => {
    if (item) {
      props.history.push(redirect);
      redirect=''
    }
  }, [props.history, redirect, item]);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    setInputContainsFile(true);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", file, file.name);
    axios
      .post(`/api/image/upload`, fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((progressEvent.loaded / progressEvent.total) * 100);
          console.log(
            "upload progress: ",
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      })
      .then(({ data }) => {
        setImageId(data);
        setFile(null);
        setInputContainsFile(false);
        setCurrentlyUploading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          const errMsg = err.response.data;
          if (errMsg) {
            console.log(errMsg);
            alert(errMsg);
          }
        } else if (err.response.status === 500) {
          console.log("db error");
          alert("db error");
        } else {
          console.log("other error: ", err);
        }
        setInputContainsFile(false);
        setCurrentlyUploading(false);
      });
  };

  const handleClick = () => {
    if (inputContainsFile) {
      setCurrentlyUploading(true);
      fileUploadHandler();
    }
  };
  return (
    <div>
      <form className="form">
        <div className="newheader">
          <Link to="/">
            <h1>
              <i class="fa fa-arrow-left" aria-hidden="true"></i> Add New
              Product
            </h1>
          </Link>
        </div>
        <div>
          <label htmlFor="title">Product title</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title Here "
            required
            onChange={(e) => settitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="descrip">Product Description</label>
          <textarea
            type="textarea"
            id="descrip"
            placeholder="Product Description "
            required
            onChange={(e) => setdescrip(e.target.value)}
          ></textarea>
        </div>

        <div className="inputcontainer">
          {currentlyUploading ? (
            <img
              src={LoadingDots}
              className="loadingdots"
              alt="upload in progress"
            />
          ) : !imageId ?(
            <>
              <input
                className="file-input"
                onChange={handleFile}
                type="file"
                name="file"
                id="file"
              />
              <label
                className={`inputlabel ${file && "file-selected"}`}
                htmlFor="file"
                onClick={handleClick}
              >
                {file ? <>UPLOAD</> : <>Empty</>}
              </label>
            </>
          ):<>Image uploaded</>}
        </div>
        <div>
          <label htmlFor="price">Product price</label>
          <input
            type="number"
            id="price"
            placeholder="Product price "
            required
            onChange={(e) => setprice(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="qty">Product Quantities</label>
          <input
            type="number"
            id="qty"
            placeholder="Product Quantities "
            required
            onChange={(e) => setqty(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="SEOtitle">SEO Title</label>
          <input
            type="text"
            id="SEOtitle"
            placeholder="SEO Title"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="addprovar">Product Variants</label>
          <p style={{ color: "GrayText" }}>
            This Product has multiple options,like different sizes or colors
          </p>
          <button
            type="button"
            id="addprovar"
            placeholder="Add Variants"
            required
            style={{ color: "white", background: "black", width: "15rem" }}
            name="Add Variant option"
          >
            Add Variant option
          </button>
        </div>
        <div>
          <label htmlFor="SEOdescrip">SEO Description</label>
          <textarea
            type="textarea"
            id="SEOdescrip"
            placeholder="SEO Description"
            required
          ></textarea>
        </div>
        <div>
          <label />
          <button className="primary" type="submit" onClick={(e)=>submitHandler(e)}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Additemscreen;

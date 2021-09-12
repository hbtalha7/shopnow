import React, { useState } from "react";
import { Link } from "react-router-dom";
function Additemscreen() {
    const [title, settitle] = useState('')
    const [descrip, setdescrip] = useState('')
    // const [Uploadfile, setUploadfile] = useState('')
  return (
    <div>
      <form className="form">
        <div className="newheader">
          <Link to='/'>
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
        <div>
          <label htmlFor="Uploadfile">Upload Media</label>
          <input
            type="file"
            id="Uploadfile"
            placeholder="Add Media files"
            required            
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
          <p style={{color:'GrayText'}}>This Product has multiple options,like different sizes or colors</p>
          <button
            type="button"
            id="addprovar"
            placeholder="Add Variants"
            required  
            style={{color:'white',background:'black',width: '15rem'}}          
            name="Add Variant option"
          >Add Variant option</button>
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
          <button className="primary" type="submit">
            Add Product
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default Additemscreen;

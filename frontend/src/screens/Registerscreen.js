import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/useractions';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const [merchant, setmerchant] = useState(false)
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password,merchant? true:false));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="Merchantacc">Merchant Account</label>
          <input
            type="checkbox"
            id="Merchantacc"
            placeholder="Merchant Account"
            
            onClick={()=>setmerchant(!merchant)}
          ></input>
        </div>
        {merchant===true?(<div><div>
          <label htmlFor="ShopName">Shop Name</label>
          <input
            type="text"
            id="ShopName"
            placeholder="ShopName"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="ShopOwner">Shop Owner</label>
          <input
            type="text"
            id="ShopOwner"
            placeholder="ShopOwner"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="ShopAddress">Shop Address</label>
          <input
            type="text"
            id="ShopAddress"
            placeholder="ShopAddress"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="ShopProof">ShopProof</label>
          <input
            type="file"
            id="ShopProof"
            placeholder="ShopProof"
            required
          ></input>
        </div></div>
        ):null}
        <div>
          <label />
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
import react,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function Loginscreen(props){
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const redirect = props.location.search
  ? props.location.search.split('=')[1]
  : '/';
const loading=false
const error=false

const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Email,Password)
    // dispatch(signin(Email, Password));
    // TODO: sign in action
  };
    return (
        <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Sign In</h1>
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
            <label />
            <button className="primary" type="submit">
              Sign In
            </button>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label />
            <div>
            New customer?{' '}
              <Link to={`/register?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
          </div>
        </form>
      </div>
    )
}
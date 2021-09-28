import react from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Upload from "./components/upload";
import "./index.css";
import Additemscreen from "./screens/Additemscreen";
import CartScreen from "./screens/Cartscreen";
import Homescreen from "./screens/Homescreen";
import Itemscreen from "./screens/Itemscreen";
import Loginscreen from "./screens/Loginscreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import RegisterScreen from "./screens/Registerscreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/item/:id" component={Itemscreen}></Route>
          <Route path="/login/" component={Loginscreen}></Route>
          <Route path="/signup/" component={RegisterScreen}></Route>          
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/additem/" component={Additemscreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/upload" component={Upload}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route exact path="/" component={Homescreen}></Route>
        </main>
        <footer>
          <p>Create By:Talha</p>
          <p>
            <a href="github.com/hbtalha7">Github</a>
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

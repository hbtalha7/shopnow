import react from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Additemscreen from "./screens/Additemscreen";
import Homescreen from "./screens/Homescreen";
import Itemscreen from "./screens/Itemscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Route path="/item/:id" component={Itemscreen}></Route>
          <Route path="/login/" component={Loginscreen}></Route>
          <Route path="/additem/" component={Additemscreen}></Route>
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

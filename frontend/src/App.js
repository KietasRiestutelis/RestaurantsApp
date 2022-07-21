import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Restaurants from "./components/Restaurants";
import RestaurantProfile from "./components/RestaurantProfile";
import Cart from "./page/cart/Cart";
import Dashboard from "./page/Admin/Dashboard";

function App() {
  return (
   <>
      <Router>
      <div className="App">
        <div className="App-container">
          <Navbar />
          {/* <Home /> */}
        </div>
      </div>
      <nav>
        <Link to="/"> Restaurants</Link>
        <Link to="/admin"> Admin </Link>
        <Link to="/cart"> Krepšelis </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/restaurant/:restorauntName"
          element={<RestaurantProfile />}
        />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <div>Footer</div>
    </Router>
   </>
  );
}

export default App;


import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./component/Home";
import Footer from "./component/footer";
import Service from "./component/Services";
import Partner from "./component/Partner";
import Blog from "./component/Blog";
import Franchise from "./component/Franchise";
import MoreServ from "./component/MoreServ";
import BookingStep1 from "./component/BookingStep1";
import BookingStep2 from "./component/BookingStep2";
import BookingSuccess from "./component/BookingSuccess";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Service Page */}
         <Route path="/Servicess" element={<Service/>} />

          {/* Other Pages */}
          <Route
            path="/Partner"
            element={<Partner/>}
          />

          <Route
            path="/franchise"
            element={<Franchise/>}
          />

          <Route
            path="/BookingStep1"
            element={<BookingStep1/>}
          />

          <Route
            path="/BookingStep2"
            element={<BookingStep2/>}
          />

          <Route
            path="/BookingSuccess"
            element={<BookingSuccess/>}
          />

          <Route
          path="/MoreServ"
          element={<MoreServ/>}
          />

          <Route
            path="/blog"
            element={<Blog/>}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
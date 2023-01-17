import AppBar from "./Components/Navigation/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Private from "./Components/Private";
import Login from "./Pages/Auth/Login";
import Profile from "./Components/Profile/Profile";
import Contact from "./Components/Contact/Contact";
import Single from "./Components/Single/Single";
import WriteBlog from "./Components/WriteBlog/WriteBlog";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Navbar from "./AdminPanal/Navigation/Navbar"
import Job from './Components/Job/Job'
// import { Context } from "./Context/Context";
// import { useContext } from "react";
function App() {
  // const { user } = useContext(Context);
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route element={<Private />}>
            <Route exact path="/" element={<Home />} />
          </Route>
       

          <Route path="/profile" element={<Profile />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/write_blog" element={<WriteBlog />} />

          <Route path="/singlePost/:_id" element={<Single />} />
          <Route exact path="/admin" element={<Navbar />} />
          <Route exact path="/Job" element={<Job/>} />
          <Route path="/Login" element={<Login />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

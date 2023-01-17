import Sidebar from "../SideBar/Sidebar";
import Header from "../../Common/Header/Header";
import Button from "../../Common/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postToServer } from "../../utils/services";
import "./contact.css";
import { useState } from "react";
export default function Contact() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleContact = async () => {
    const toatify = async () => {
    const requestParams = {
      username: username,
      email: email,
      phone: phone,
      query: query,
    };
    const res = await postToServer("contact", requestParams);
    if (res) {
     toast.success("query has been submited");
     const reloadAferSomeTime = () => {
      window.location.reload();
    };
    setTimeout(reloadAferSomeTime, 3000);
      };
    }
    toatify();
  };
  return (
    <>
      <Header
        title="Contact Us"
        SectionImg="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800"
      />
      <div className="Contact">
        <div className="contactWrapper">
          <div className="contactTitle">
            <span className="contactUpdateTitle">Contact Us</span>
          </div>
          <form className="ContactForm">
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone no.</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Query</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button BtnName="Submit" onClick={() => handleContact()} />
          </form>
        </div>
        <Sidebar />
        <ToastContainer />
      </div>
    </>
  );
}

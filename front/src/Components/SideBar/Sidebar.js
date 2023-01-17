import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar({ data }) {
  return (
    <div className="Sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          className="sidebarImg"
          src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800"
          alt="sidebarImg"
        />
        <p>
          JobWithSkill is an online service that enables companies to pre-select
          candidates and automatically assesses their IT skills in web
          development languages, operating systems, databases, mobile apps, etc.
          More than 500 IT Quiz and Coding tests are available. Web application
          with immediate deployment, no installation required, no investment
          needed, can be used with a simple internet connection. User-friendly,
          can be easily customized according to the client’s visual identity.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {data?.map((item) => {
            return (
              <Link to={"/blog/?cat=" + item?.categories} className="link">
                <li className="sidebarListItem">{item?.categories}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/">
            {" "}
            <i className="sidebarIcon fa fa-facebook-f link"></i>
          </a>
          <a href="https://twitter.com/">
            {" "}
            <i className="sidebarIcon fa fa-twitter link"></i>
          </a>
          <a href="https://www.instagram.com/">
            {" "}
            <i className="sidebarIcon fa fa-instagram link"></i>
          </a>
          <a href="https://in.pinterest.com/">
            {" "}
            <i className="sidebarIcon fa fa-pinterest link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

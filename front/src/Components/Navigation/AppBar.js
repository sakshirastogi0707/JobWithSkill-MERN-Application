import React, { useContext, useEffect, useState } from "react";
import "../Navigation/AppBar.css";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../Images/logo.png";
import { Context } from "../../Context/Context";
import profileIcon from "../../Images/profileIcon.png";
export default function AppBar() {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const Logout = () => {
    navigate("/Login");
    dispatch({ type: "LOGOUT" });
  };
  const PF = "http://localhost:6000/images/";
  return (
    <div>
      <body className="hm-gradient">
        {user ? (
          <nav className="navbar navbar-expand-lg navbar-light teal mb-4">
            <a className="navbar-brand" href="/">
              <img className="Applogo" src={AppLogo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <div
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="write_blog">
                      Write Blog
                    </a>
                    <a className="dropdown-item" href="/blog">
                      View Blogs
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Job Management
                  </a>
                  <div
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/Job">
                      Job
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <ul className="navbar-nav mr-sm-2">
                <li className="nav-items dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="borderImg">
                      {user.photo ? (
                        <img className="UserProfile" src={PF + user.photo} />
                      ) : (
                        <img className="UserProfile" src={profileIcon} />
                      )}
                    </div>
                  </a>
                  <div
                    className="dropdown-menu dropdown-primary"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="/profile">
                      Profile
                    </a>
                    <a className="dropdown-item" href="/Login" onClick={Logout}>
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg navbar-light teal mb-4">
            <a className="navbar-brand" href="#">
              <img className="Applogo" src={AppLogo} />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-sm-2">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </ul>
            </div>
          </nav>
        )}
      </body>
    </div>
  );
}
{
  /*  */
}

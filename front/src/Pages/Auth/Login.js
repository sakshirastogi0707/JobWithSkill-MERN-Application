import React, { useContext, useState } from "react";
import Input from "../../Common/InputField/Input";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postToServer } from "../../utils/services";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
// Login component----------------------------------
export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const navigate = useNavigate();
  const { dispatch, isFetching } = useContext(Context);

  // Signup Functionality----------------------------
  const UserSignup = async () => {
    const toatify = async () => {
      if (!username) {
        toast.error("Please Enter the Username");
      } else if (!email) {
        toast.error("Please Enter the Email");
      } else if (!password) {
        toast.error("Please Enter the Passeord");
      } else if (Cpassword !== password) {
        toast.error("Password should be matched");
      } else {
        const requestParams = {
          username: username,
          email: email,
          password: password,
        };
        try {
          const userResponse = await postToServer("signup", requestParams);
          if (userResponse) {
            navigate("/UserLogin");
            toast.success(userResponse.meassage, {
              position: "top-center",
              closeOnClick: true,
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    toatify();
  };

  // Login functionality------------------------------
  const UserLogin = async () => {
    const toatify = async () => {
      if (!username) {
        toast.error("Please Enter the Username");
      } else if (!email) {
        toast.error("Please Enter the Email");
      } else if (!password) {
        toast.error("Please Enter the Password");
      } else {
        dispatch({ type: "LOGIN_START" });
        const requestParams = {
          username: username,
          password: password,
          email: email,
        };
        try {
          const Response = await postToServer("Login", requestParams);
          if (Response) {
            const authToken = Response.token;
            const measage = Response.meassage;
            toast.success(measage, {
              position: "top-center",
              closeOnClick: true,
            });
            const reloadAferSomeTime = () => {
              const auth = localStorage.getItem("user");
              if (auth) {
                navigate("/");
                window.location.reload();
              }
            };

            setTimeout(reloadAferSomeTime, 3000);
            localStorage.setItem("user", JSON.stringify(authToken));
          }
          dispatch({ type: "LOGIN_SUCCESS", payload: Response });
        } catch (err) {
          console.log(err);
          dispatch({ type: "LOGIN_FAILURE" });
        }
      }
    };
    toatify();
  };
  // Render screen------------------------------------
  return (
    <body id="body">
      <div id="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form action="/Signup" className="Form">
            <label className="LableLogin" for="chk" aria-hidden="true">
              Sign up
            </label>
            <Input
              type="text"
              name="text"
              placeholder="User name"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              name="pswd"
              placeholder="Password"
              value={Cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />

            <button
              type="button"
              onChange={(e) => setCpassword(e.target.value)}
              className="LoginBtn"
              onClick={() => UserSignup()}
            >
              Sign up
            </button>
          </form>
        </div>

        <div className="login">
          <form className="Form">
            <label
              className="LableLogin"
              for="chk"
              aria-hidden="true"
              id="login"
            >
              Login
            </label>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="pswd"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="LoginBtn"
              onClick={() => UserLogin()}
              disabled={isFetching}
            >
              Login
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </body>
  );
}

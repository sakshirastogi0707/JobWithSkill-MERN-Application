import "../Profile/profile.css";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Button from "../../Common/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { updateToServer, deleteFromServer } from "../../utils/services";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setBio(user.bio);
    setEmail(user.email);
    setUsername(user.username);
  }, []);
  const updatedUser = async (e) => {
    const toatify = async () => {
      dispatch({ type: "UPDATE_START" });
      const requestParams = {
        userId: user._id,
        username: username,
        email: email,
        bio: bio,
      };

      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        requestParams.photo = filename;
        try {
          await axios.post("http://localhost:4000/upload", data);
        } catch (err) {
          console.log(err);
        }
      }

      try {
        requestParams.bio = bio;
        const response = await updateToServer(
          "update_user/" + user._id,
          requestParams
        );
        if (response) {
          try {
            setSuccess(true);
            toast.success(response.msg, {
              position: "top-center",
              closeOnClick: true,
            });

            const reloadAferSomeTime = () => {
              window.location.reload();
            };
            setTimeout(reloadAferSomeTime, 3000);
            dispatch({ type: "UPDATE_SUCCESS", payload: response });
          } catch (err) {
            toast.error(err, {
              position: "top-center",
              closeOnClick: true,
            });
            dispatch({ type: "UPDATE_FAILURE" });
          }
        } else {
          toast.error("Somthing want wrong");
        }
      } catch (err) {
        console.log(err);
      }
    };
    toatify();
  };

  const handleDeleteAccount = async () => {
    const toatify = async () => {
      try {
        const requestParams = {
          userId: user._id,
        };
        const res = await deleteFromServer(
          "delete_user/" + user._id,
          requestParams
        );
        if (res) {
          try {
            toast.success(res, {
              position: "top-center",
              closeOnClick: true,
            });
            const reloadAferSomeTime = () => {
              window.localStorage.clear();
              window.location.reload();
              navigate("/Login");
            };
            setTimeout(reloadAferSomeTime, 2000);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    toatify();
  };

  const PF = "http://localhost:6000/images/";
  return (
    <div className="profile">
      <div className="ProfileWrapper">
        {success && (
          <span
            style={{
              color: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Profile has been updated successfully!
          </span>
        )}

        <div className="profileTitle">
          <span className="profileUpdateTitle">Update Your Account</span>
          <span
            className="profileDeleteTitle"
            onClick={() => handleDeleteAccount()}
          >
            Delete Account
          </span>
        </div>
        <form className="profileForm">
          <label>Pfofile Picture</label>
          <div className="profilePP">
            <img src={file ? URL.createObjectURL(file) : PF + user.photo} />
            <label htmlFor="fileInput">
              <i class="profilePPIcon fa fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

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
          <label>Bio</label>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <Button BtnName="UPDATE" onClick={() => updatedUser()} />
        </form>

        <ToastContainer />
      </div>
      <Sidebar />
    </div>
  );
}

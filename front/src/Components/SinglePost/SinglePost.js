import "./singlePost.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import {
  getFromServer,
  deleteFromServer,
  updateToServer,
} from "../../utils/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Common/Button";
import { Context } from "../../Context/Context";
export default function SinglePost() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [update, setUpdate] = useState(false);
  const { user } = useContext(Context);
  const path = location.pathname.split("/");
  useEffect(() => {
    const getPost = async (path) => {
      const res = await getFromServer(`${path}`);
      if (res) {
        setPosts(res);
        setTitle(res.title);
        setdescription(res.description);
      }
    };
    getPost(path);
  }, []);

  const PF = "http://localhost:5000/images/";
  const handleDelete = async () => {
    const toatify = async () => {
      const res = await deleteFromServer(path);
      if (res) {
        try {
          toast.success(res, { position: "top-center", closeOnClick: true });
          const reloadAferSomeTime = () => {
            navigate("/blog");
            window.location.reload();
          };
          setTimeout(reloadAferSomeTime, 3000);
        } catch (err) {
          toast.error(err);
        }
      }
    };
    toatify();
  };

  const handleUpdate = async () => {
    const requestParams = {
      title: title,
      description: description,
    };
    const response = await updateToServer(
      "update_blog/" + posts._id,
      requestParams
    );
    if (response) {
      try {
        toast.success(response, { position: "top-center", closeOnClick: true });
        const reloadAferSomeTime = () => {
          window.location.reload();
        };
        setTimeout(reloadAferSomeTime, 3000);
      } catch (err) {
        console.log(err);
      }
      window.location.reload();
    }
  };
  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        {posts.photo && (
          <img
            className="SinglePostImg"
            src={PF + posts.photo}
            alt="SinglePostImg"
          />
        )}
        {update ? (
          <input
            className="singlePostTitleInput"
            value={title}
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {posts.title}
            {user.username === posts.username && (
              <div className="singlePostEdit">
                <i
                  className=" singlePostIcon fa fa-edit"
                  onClick={() => setUpdate(true)}
                ></i>
                <i
                  className=" singlePostIcon fa fa-trash-o"
                  onClick={() => handleDelete()}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlepostinfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/blog/?user=${posts.username}`} className="linkAuthor">
              <b>{posts.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(posts.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <textarea
            className="singlePostDescInput"
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          />
        ) : (
          <p className="singlePostDesc">{posts.description}</p>
        )}
        {update ? (
          <Button BtnName="UPDATE" onClick={() => handleUpdate()} />
        ) : (
          ""
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

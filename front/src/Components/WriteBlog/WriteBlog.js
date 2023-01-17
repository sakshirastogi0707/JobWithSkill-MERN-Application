import "./writeBlog.css";
import Button from "../../Common/Button";
import { useContext, useState } from "react";
import { postToServer } from "../../utils/services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {Context} from '../../Context/Context'
import axios from "axios";
export default function WriteBlog() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();

  const navigate = useNavigate();
  const PostBlog = async (e) => {
    const toatify = async () => {
      e.preventDefault();
      if (!username) {
        toast.error("Username is required!", {
          position: "top-center",
          closeOnClick: true,
        });
      } else if (!title) {
        toast.error("Title is required!", {
          position: "top-center",
          closeOnClick: true,
        });
      } else {
        const requestParams = {
          title: title,
          username: username,
          description: description,
          name: name,
        };
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          requestParams.photo = filename;
          try {
            await axios.post("http://localhost:6000/upload", data);
          } catch (err) {
            console.log(err);
          }
        }
        try {
          requestParams.categories = name;
          await postToServer("category", name);
        } catch (err) {
          console.log(err);
        }

        try {
          const response = await postToServer("CreateBlog", requestParams);
          if (response) {
            try {
              toast.success(response.msg, {
                position: "top-center",
                closeOnClick: true,
              });
              const reloadAferSomeTime = () => {
                navigate("/blog");
                window.location.reload();
              };
              setTimeout(reloadAferSomeTime, 3000);
            } catch (err) {
              toast.error(err, {
                position: "top-center",
                closeOnClick: true,
              });
            }
          } else {
            toast.error("Somthing want wrong");
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    toatify();
  };

  return (
    <div className="WriteBlog">
      {file && <img className="WriteBlogImg" src={URL.createObjectURL(file)} />}
      <form className="WriteBlogForm">
        <div className="WriteBlogGroup">
          <label htmlFor="fileInput">
            <i className="AddIcon fa fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="WriteBlogGroup">
          <input
            type="text"
            placeholder="Username"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          <input
            type="text"
            placeholder="Category"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="WriteBlogGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeTextAreaInput writeText"
            onChange={(e) => setDescription(e.target.value)}
            autoFocus={true}
          ></textarea>
        </div>
        <Button BtnName="PUBLISH" onClick={(e) => PostBlog(e)} />
      </form>
      <ToastContainer />
    </div>
  );
}

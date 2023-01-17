import "./post.css";
import { Link } from "react-router-dom";
// import {updateToServer} from '../../utils/services'
export default function Post({ post }) {
  const PF = "http://localhost:6000/images/";
//   const likePost= async(id)=>{
//     const requestParams={
//       postId:id
//     }
// const  res = await updateToServer('like',requestParams);
// console.log(res,"................")
//   }
  return (
    <div className="Post">
      {post.photo && (
        <img className="postImg" src={PF + post.photo} alt="PostImg" />
      )}
      <div className="postInfo">
        {/* <div className="postCats">
          {post.categories?.map((c) => {
            <span className="postcat">{c.name}</span>;
          })}
        </div> */}

        <Link className="link" to={`/singlePost/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
      </div>

      <div className="postIcons">
        {/* <div className="icon">

        {post.likes.length} <i className="postIcon fa fa-thumbs-up" onClick={()=>likePost(post._id)}></i>
          <i className="postIcon fa fa-thumbs-down"></i>
          
        </div> */}
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}

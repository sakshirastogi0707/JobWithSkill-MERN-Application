import Post from "../Post/Post";
import "./posts.css";

export default function Posts({ data }) {
  return (
    <div className="Posts">
      {data?.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./blog.css";
import Header from "../../Common/Header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../SideBar/Sidebar";
import { getFromServer } from "../../utils/services";
import { useLocation } from "react-router-dom";
export default function ViewBlog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const GetallPostData = async () => {
      const response = await getFromServer("getAllPosts" + search);
      if (response) {
        setPosts(response);
      }
    };
    GetallPostData();
  }, [search]);

  return (
    <>
      <Header
        title="BLOG"
        SectionImg="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      />
      <div className="Blogs">
        <Posts data={posts}/>
        <Sidebar data={posts}/>
      </div>
    </>
  );
}

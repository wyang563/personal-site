import React from "react";
import { Link, useLocation } from "@reach/router";

import "./Post.css";

const Post = ({ post: { title, body, url }, index }) => {
  return (
    <div className="post-container">
      <Link to={url}> <h1 className="heading">{title}</h1></Link>
      <p className='text-body'>{body}</p>
    </div>
  )
}

export default Post;
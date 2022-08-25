import React from 'react';
import Post from './Post.js';
import "./Blog.css";
//rfce to generate new react template

function Blog() {
  const blogPosts = [
    {
      title: "Post One",
      body: "a;ksadjf;lksadj;lfkjsa;dlkjfdfl;kjlk;sadjf",
      author: "Author 1",
      url: ''
    },
    {
      title: "Post Two",
      body: "",
      author: "Author 2",
      url: ''
    },
    {
      title: "Post Three",
      body: "",
      author: "Author 3",
      url: ''
    },
    {
      title: "1 - Why I Write",
      body: "I thought for a while about how to ceremoniously begin a new blog that would immediately grab the attention of unsuspecting...",
      url: '/postTemplate'
    }
  ];

  //title, body , img, author
  return (
    <div className="Blog">
     <div className="sidebar">
      <p>5</p>
      <p>6</p>
      <p>3</p>
      <p className='sidebar-text'>Blog</p>
     </div>
      <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
     </div>
    </div>
  )
}

export default Blog
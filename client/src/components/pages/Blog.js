import React from 'react';
import Card from '@mui/material/Card';
import Post from './Post.js';
import "./Blog.css"

//rfce to generate new react template

function Blog() {
  const blogPosts = [
    {
      title: "Post One",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Author 1",
      url: ''
    },
    {
      title: "Post Two",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Author 2",
      url: ''
    },
    {
      title: "Post Three",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Author 3",
      url: ''
    },
    {
      title: "Post Four",
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book i",
      author: "Author 4",
      url: ''
    }
  ];

  //title, body , img, author
  return (
    <div className="Blog">
     <div className="sidebar">
      pass

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
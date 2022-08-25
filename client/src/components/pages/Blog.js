import React from 'react';
import Post from './Post.js';
import "./Blog.css";
//rfce to generate new react template

function Blog() {
  const blogPosts = [
    {
      title: "13 — The Past in a Dark Alley Way",
      body: "Preface: I did a quick free write today. Enjoy.",
      url: '/post13'
    },
    {
      title: "12 — New Spring [Prelude]",
      body: "A salty mist sprays over the wet wooden deck as the ship sways back and forth violently...",
      url: '/post12'
    },
    {
      title: "10 — Escaping Pessimism",
      body: "What does it mean to be passionate about something? I’ve had hobbies before. Spending hours on end speed solving rubik’s cubes to chase a new personal...",
      url: '/post10'
    },
    {
      title: "6 — On Complacency in Life",
      body: "The purpose of this post is not to convince any one to live their life a certain way, but rather to espouse some of my opinions...",
      url: '/post6'
    },
    {
      title: "7 — The US Japanese Trade War — and a case study of realism in international relations",
      body: "I’ll preface this post with the fact that this piece is not supposed to be read or interpreted as a rigorous academic work...",
      url: '/post7'
    },
    {
      title: "8 - An Open Letter to 13 Year Old Me [Repost]",
      body: "This post is titled article number 8 because it was the eighth blog post idea I came up with since starting...",
      url: '/post8'
    },
    {
      title: "2 - My Regrets as a New Adult",
      body: "Largely, the realization that I’m now an adult has not washed over me. Of course, there have been obvious...",
      url: '/post2'
    },
    {
      title: "1 - Why I Write",
      body: "I thought for a while about how to ceremoniously begin a new blog that would immediately grab the attention of unsuspecting...",
      url: '/post1'
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
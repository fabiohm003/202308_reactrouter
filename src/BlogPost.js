import React from 'react';
import { useParams } from 'react-router-dom';
import { blogdata } from './Blogdata';


function BlogPost (){

  const { slug } = useParams();

  const blogpost = blogdata.find(post => post.slug === slug);

  
  return (
    <>
    <h1>{blogpost.title}</h1>
    <h3>{blogpost.slug}</h3>
    <h3>{blogpost.content}</h3>
    <h3>{blogpost.author}</h3>
    </>
  );

}



export {BlogPost};
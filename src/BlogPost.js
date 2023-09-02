import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from './Blogdata';
import { useAuth } from './auth';


function BlogPost (){

  const navigate = useNavigate();

  const { slug } = useParams();


  const auth = useAuth();


  const blogpost = blogdata.find(post => post.slug === slug);


  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;


  const returnToBlog = () => {
    //navigate('/blog');
    navigate(-1);
  };

  
  return (
    <>
    <h1>{blogpost.title}</h1>
    <button onClick={returnToBlog}>Volver al Blog</button>
    <h3>{blogpost.slug}</h3>
    <h3>{blogpost.content}</h3>
    <h3>{blogpost.author}</h3>

    {
    canDelete && (
      <button>Eliminar Blog</button>
    )

      /*
    auth.user?.isAdmin && (
      <button>Eliminar Blog</button>
    )
    */
    
    }
    </>
  );

}



export {BlogPost};
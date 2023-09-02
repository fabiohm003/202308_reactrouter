import React, { Children } from 'react';
import { useAuth } from './auth';



function ProfilePage (){

  const auth = useAuth();

  return (
    <>
      <h1>ProfilePage: Perfil</h1>
      <p> Bienvenido, {auth.user.username} </p>
      {/*<p> Bienvenido, {auth.user ? auth.user.username: null} </p>*/}
    </>
  );

}


export {ProfilePage};
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './auth';


const routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,
});

routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,
});

routes.push({
  to: '/profile',
  text: 'Profile',
  private: true,
});


routes.push({
  to: '/login',
  text: 'LogIn',
  private: false,
  publicOnly: true,
});


routes.push({
  to: '/logout',
  text: 'LogOut',
  private: false,
});



function Menu (){
  
  const auth = useAuth();

  return (
    <nav>
      <ul>

        {
          routes.map(route => {

            if (route.publicOnly && auth.user) return null;


            if (route.private && !auth.user) return null;

            return (
              <li key={route.to}>
              <NavLink
                className={''}
                style={({isActive}) => ({color: isActive ?  'red' : 'blue' })} 
                to={route.to}
              >{route.text}</NavLink>
              </li>
            );


          })
        }

      </ul>
    </nav>
  );


  /*
  return (
    <nav>
      <ul>

        {
          routes.map(route => (
            <li key={route.to}>
            <NavLink
              className={''}
              style={({isActive}) => ({color: isActive ?  'red' : 'blue' })} 
              to={route.to}
            >{route.text}</NavLink>
            </li>
          ))
        }

      </ul>
    </nav>
  );
  */
}


export {Menu};
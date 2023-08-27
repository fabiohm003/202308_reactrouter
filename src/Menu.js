import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const routes = [];
routes.push({
  key: 0,
  to: '/',
  text: 'Home',
});

routes.push({
  key: 1,
  to: '/blog',
  text: 'Blog',
});

routes.push({
  key: 2,
  to: '/profile',
  text: 'Profile',
});




function Menu (){
  
  return (
    <nav>
      <ul>

        {
          routes.map(route => (
            <li key={route.key}>
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

}


export {Menu};
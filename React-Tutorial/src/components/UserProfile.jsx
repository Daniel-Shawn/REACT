import React from 'react'
import Proptypes from 'prop-types'
import { Outlet } from 'react-router-dom';
import { RenderNavbar } from './Navbar';



export function fetchUsers(){
    const controller = new AbortController()
    try{
      fetch(
        "https://jsonplaceholder.typicode.com/users", 
        {signal: controller.signal}
      ).then(res => res.json())
      .then(data => console.log(data))
    }
    catch(err){
      console.log(err);
      return err
    }
    return () => {
        controller.abort()
    }
}


export function UserProfile(props){
    let user = props.user
    return(
        <>
        <RenderNavbar />
            <p>Hey I am {user.name}</p>
            <span>Email: </span><span>{user.email}</span>
            <p>I am {user.age} years</p>
        </>
    )
}

UserProfile.prototypes = {
    user: Proptypes.shape({
        name: Proptypes.string.isRequired,
        email: Proptypes.string,
        age: Proptypes.number
    })
}
import React from 'react';
//to perform routing
import {NavLink} from 'react-router-dom';

const SignOutLinks=()=>{
    return(
        <ul className="right">
           <li><NavLink to='/'>Signup</NavLink></li>
           <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks
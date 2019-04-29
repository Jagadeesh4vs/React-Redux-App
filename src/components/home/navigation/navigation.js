import React,{ Component } from 'react'
import {NavLink,Link} from 'react-router-dom'

class Navigation extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="navigation">
                <div className="nav-container">
                    <h2>{"Shopping Application"}</h2>
                    <Link to='/'>{"Fashion"}</Link>
                    <NavLink to='/about'>{"Mobiles"}</NavLink>
                    <NavLink to='/contact'>{"Accessaries"}</NavLink>
                    <NavLink to='/grocery'>{"Grocery"}</NavLink>
                    <NavLink to='/offers'>{"Offers"}</NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation;
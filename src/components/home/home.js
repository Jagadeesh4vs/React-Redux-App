import React, { Component } from 'react'
import './home.css'
import Navigation from './navigation/navigation'
import _ from 'lodash';
import {connect} from 'react-redux'

class Home extends Component{
    constructor(){
        super()
    }
    getPosts = (posts) =>{
        if(posts.user){
           const records =  _.map(posts.user,(item) => {
                return (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNo}</td>
                    </tr>
                )
                
            })
            return records;
        }
        else{
            return null;
        }
    }
    render(){
        const {posts} = this.props || [];
        return(
            <div className="home-container">
                <h1>{"Customers Detail"}</h1>
                <table id="customers-table">
                    <thead>
                        <th>{"ID"}</th>
                        <th>{"Name"}</th>
                        <th>{"Age"}</th>
                        <th>{"Gender"}</th>
                        <th>{"Email"}</th>
                        <th>{"PhoneNo"}</th>
                    </thead>
                        <tbody>
                {this.getPosts(posts)}
                </tbody>
                </table>
                
             </div>   
        )
    }
}
const mapStateToProps = state =>{
    return{
        posts:state.data.posts
    }
}

export default connect(mapStateToProps) (Home);
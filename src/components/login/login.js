import React,{ Component,PropTypes } from 'react'
import './login.css'
import {connect} from 'react-redux'
import {NavLink,Link} from 'react-router-dom'
import _ from 'lodash';
import validateUser from '../../actions/login.action'

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {
      aunthentication : {
        "username":"",
        "password":""
      },
      errors:{
        username:"",
        password:""
      }
    }
  }
  aunthenticate = () =>{
    const {errors} = this.state;
    _.map(this.state.aunthentication, (value, key) => {
      switch(key){
          case 'username': if(_.isEmpty(value)){
              errors[key] = 'username is required'
          }
          break;
          case 'password':  if(_.isEmpty(value)){
              errors[key] = 'password is required'
          }
          break;
          default : break;

      }
  });
  this.setState({errors})
  this.props.validateUser(this.state.aunthentication);
  }
  onHandleChange = (event) =>{
    let {name,value} = event.target;
    const {errors} = this.state;
    switch(name){
        case 'username': errors[name] = null;
        break;
        case 'password':  errors[name] = null;
        break;
        default : break;

    }
    this.setState({
      ...this.state,
      errors,
      aunthentication:{...this.state.aunthentication,[name]:value}
    })
        
  }
  render(){
    let {isAuthentication,posts} = this.props; 
     return(
            <div className="login-page">
            <div className="form">
              <form className="register-form">
                <input type="text" placeholder="name"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>{"create"}</button>
                <p className="message">{"Already registered? "}<a href="#">{"Sign In"}</a></p>
              </form>
              <form className="login-form">
                <input type="text"  placeholder="username" name="username" onChange={this.onHandleChange} value={this.state.aunthentication.username}/>
                <div className="error">{this.state.errors.username}</div>
                <input type="password"  placeholder="password" name="password" onChange={this.onHandleChange} value={this.state.aunthentication.password}/>
                <div className="error">{this.state.errors.password}</div>
                <NavLink exact to={isAuthentication?'/home':'/'}><button onClick={()=>this.aunthenticate()}>{"login"}</button></NavLink>
                <p className="message">{"Not registered? "}<a href="#">{"Create an account"}</a></p>
              </form>
            </div>
        </div>
        )
    }
}
const mapStateProps = (state) =>{
  return{
      posts:state.data.posts,
      isAuthentication:state.data.isAuthentication
  }
}
const mapDispatchToProps = dispatch =>{
      return{
        validateUser:(userInfo) =>dispatch(validateUser(userInfo))
      }
  }
  
export default connect(mapStateProps,mapDispatchToProps) (Login);
import React, { Component,PropTypes } from 'react';
import './App.css';
import Login from './components/login/login'
import Home from './components/home/home'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {connect} from 'react-redux';


class App extends Component {
  constructor(props){
    super(props)
    
  }
  // handleIncClick = () =>{
  //   this.props.result(1)
  // }
  // handleDecClick = () =>{
  //   this.props.result(-1)
  // }
  
  render() {
    const {count} = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          {/* <button onClick={this.handleIncClick}>INC</button>
          <h2>{count}</h2>
          <button onClick={this.handleDecClick}>DEC</button> */}
          <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
          </Switch>
          
        </div>
      </BrowserRouter>
      
    );
  }
}

// const mapDispatchToProps = (action) =>{
//   return{
//     result:
//     (data) =>{action({"type":"INC","count":data})}
//   }
// }

// const mapStateToProps = (state,action) =>{
//     return{
//           count: state+1
//     }
// }

export default App;

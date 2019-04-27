import {combineReducers} from 'redux';
const initState = {
    posts:{
      user:[
        {
            "id": 1,
            "name":"test1",
            "age": "11",
            "gender": "male",
            "email":"test1@gmail.com",
            "phoneNo":"9415346315"
          },
          {
            "id": 2,
            "name":"test2",
            "age": "12",
            "gender": "male",
            "email":"test2@gmail.com",
            "phoneNo":"9415346315"
          },
          {
            "id": 3,
            "name":"test3",
            "age": "13",
            "gender": "male",
            "email":"test3@gmail.com",
            "phoneNo":"9415346315"
          },
          {
            "id": 4,
            "name":"test4",
            "age": "14",
            "gender": "male",
            "email":"test4@gmail.com",
            "phoneNo":"9415346315"
          },
          {
            "id": 5,
            "name":"test5",
            "age": "15",
            "gender": "male",
            "email":"test5@gmail.com",
            "phoneNo":"9415346315"
          },
          {
            "id": 6,
            "name":"test6",
            "age": "16",
            "gender": "male",
            "email":"test6@gmail.com",
            "phoneNo":"9415346315"
          }
    ]},
    error:"",
    loader:false,
    isAuthentication:false
}

const rootReducer = (state=initState,action) =>{
  if(action.type==='POSTS'){
      return {
            ...state,
            loader:action.loader,
            posts:action.payload
          }
    }
    else if(action.type==='INIT'){
      return {
        ...state,
        loader:action.loader
      };
    }
    else if(action.type==='Login'){
      return {
        ...state,
        loader:action.loader,
        error:action.error
      };
    }
    else if(action.type==='AUTHNTICATE'){
        if(action.userInfo.username==='hruday@gmail.com' && action.userInfo.password==='hruday123'){
          return{
            ...state,
            isAuthentication:true,
            loader:true,
            error:""
          }
        }
        else{
          return state;
        }
      
      
    }
    else if(action.type==='ERROR'){
      console.log('wdw')
      return {
        ...state,
        loader:action.loader,
        error:action.error
      }
    }
    else{
      return state || [];
    }
    
}

export default combineReducers({data:rootReducer});
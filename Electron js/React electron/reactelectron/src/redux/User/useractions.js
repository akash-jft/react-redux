import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, USER_REQUEST } from "./usertypes"
import axios from 'axios'
export const fetchuserrequest =()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchusersuccess =(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}
export const fetchusererror =(error)=>{
    return{
        type:FETCH_USERS_ERROR,
        payload:error
    }
}

export const fetchrequest =(users)=>{
    return{
        type:USER_REQUEST,
        payload:users
    }
}


export const fetchUsers =()=>{
    return(dispatch)=>{
        dispatch(fetchuserrequest)
axios.get('https://jsonplaceholder.typicode.com/users').
then(response=>{
    const users=response.data
    dispatch(fetchusersuccess(users))
}).catch(error=>{
    const errormsg=error.errormsg
    dispatch(fetchusererror(errormsg))
})
    }
}
export const requestuser=(data)=>{
    return(dispatch)=>{
        dispatch(fetchuserrequest)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: {data},
              userId: 1
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json()).then(json=>{
              const data=json
            dispatch(fetchrequest(data))
            console.log(data.body,"kkkkkkkkkkkk")
        })
          
    }
}


import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'
function Usercontainer({userData,fetchusers}){
    useEffect(()=>{
        fetchusers();
    },[])
    return  userData.loading ?(<h2>Loading</h2>):userData.error?(<h2>{userData.error}</h2>):(<div>
        <h2>{userData && userData.users && userData.users.map((users,i)=><p key={i}>{users.name}</p>)}</h2>
    </div>)
       
    
}

const mapState=state=>{
    
    return{
     userData:state.user
        
    }
}
const mapDispatch=dispatch=>{
   
    return{
        fetchusers:()=>dispatch(fetchUsers()),
       
    }
}

export default connect(mapState,mapDispatch)(Usercontainer)
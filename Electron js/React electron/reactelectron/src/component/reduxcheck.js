import React from 'react'
import {connect} from 'react-redux'
import { buyCake,buyIce } from '../redux'

function check(props){
    return(
        <div>
           <h1>hi redux 2 {props.numberOfice}</h1>
        </div>
    )
}

const mapState=state=>{
    console.log("maptostate",state)
    return{
        numberOfcake:state.numberOfcake,
        numberOfice:state.cake.numberOfice
    }
}
const mapDispatch=dispatch=>{
    console.log("map to dispatch",dispatch)
    return{
        buyCake:()=>dispatch(buyCake()),
        buyIce:()=>{dispatch(buyIce())}
    }
}
export default connect(mapState,mapDispatch)(check)
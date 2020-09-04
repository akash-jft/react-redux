import React from 'react'
import {connect} from 'react-redux'
import { buyCake,buyIce, BUYICECREAM } from '../redux'

function CakeContainer(props){
    return(
<div>
    <h1>number of cake {props.numberOfcake}</h1>
    <h2>number of ice {props.numberOfice}</h2>
    <button onClick={props.buyCake}>Buy Cake</button>
    <button onClick={props.buyIce}>Buy Ice</button>
</div>
    )
}

const mapStateToprops=state=>{
    return{
        numberOfcake:state.cake.numberOfcake,
        numberOfice:state.icecreame.ice
    }
}

const mapDispatchToprops=dispatch=>{
    
    return{
        buyCake:()=>dispatch(buyCake()),
        buyIce:()=>{dispatch(BUYICECREAM())}
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(CakeContainer)
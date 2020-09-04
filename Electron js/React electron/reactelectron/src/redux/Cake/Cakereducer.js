import {BUY_CAKE} from './Caketype'
import {BUY_ICE} from './Caketype'
const initialstate={
    numberOfcake:10,
    numberOfice:20
}
const cakereducer=(state=initialstate,action)=>{
    console.log("in reducer",state,action)
switch(action.type){
case BUY_CAKE:return{
    ...state,
    numberOfcake:state.numberOfcake-1
}
case BUY_ICE:return{
    ...state,
    numberOfice:state.numberOfice-1
}
default:return state
}

}
export default cakereducer
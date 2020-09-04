
import {BUY_ICECREAM} from './icecreametype'
const initialstate={
   // numberOfcake:10,
    ice:20
}
const cakereducer=(state=initialstate,action)=>{
  
switch(action.type){
// case BUY_CAKE:return{
//     ...state,
//     numberOfcake:state.numberOfcake-1
// }
case BUY_ICECREAM:return{
    ...state,
    ice:state.ice-1
}
default:return state
}

}
export default cakereducer
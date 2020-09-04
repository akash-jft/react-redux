import {BUY_CAKE} from './Caketype'
import {BUY_ICE} from './Caketype'
export const buyCake =()=>{
    console.log("in action ")
    return{
        type:BUY_CAKE
    }
}

export const buyIce=()=>{
return{
    type:BUY_ICE
}
}
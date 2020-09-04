import React from 'react'
import {useSelector,useDispatch}from 'react-redux'
import { buyCake } from '../redux'

function Hookscontainer(){
    const numberOfcake= useSelector(state=> state.cake.numberOfcake)
   const dispatch = useDispatch()
    return(
        <div>
            <h1>hooks container {numberOfcake}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy cake hooks</button>
        </div>
    )
}

export default Hookscontainer
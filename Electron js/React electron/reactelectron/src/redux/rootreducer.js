import {combineReducers} from 'redux'

import cakereducer from './Cake/Cakereducer'
import icecreamereducer from './icecreame/icecreamereducer'
import userreducer from './User/userreducer'

const rootreducer=combineReducers({
    cake:cakereducer,
    icecreame:icecreamereducer,
    user:userreducer
})

export default rootreducer
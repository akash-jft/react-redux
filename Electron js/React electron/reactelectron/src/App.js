import React from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'
import Form from './component/form'
import Store from './redux/store'
import CakeContainer from './component/CakeContainer'
import Redux2 from './component/reduxcheck'
import Hookscontainer from './component/hookscontainer'
import Userconatiner from './component/usercontainer'
function App(props) {

  return (
    <Provider store={Store}>
    <div className="App">
      {/* <Link to="/profile">go profile</Link> */}
      <Form>
        <p>hi rsm amms</p>
        
      </Form>
{/* <CakeContainer/> */}
{/* <Redux2/>
<Hookscontainer/> */}
    </div>
    </Provider>
  );
}

export default App;

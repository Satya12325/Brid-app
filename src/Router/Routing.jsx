import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Dashbord from '../Pages/Dashbord';
import Signup from '../Pages/Signup';

function Routing(props) {
    return (
        <Routes>
            <Route exact path="/" element={<Signup/>}></Route>
            <Route exact path="/dashbord" element={<Dashbord/>}></Route>
        </Routes>
            
    );
}

export default Routing;
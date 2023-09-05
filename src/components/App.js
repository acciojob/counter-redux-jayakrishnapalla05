
import React from "react";
import './../styles/App.css';
import {useDispatch, useSelector} from "react-redux";
import { increment,decrement } from "./redux/actions/CounterActions";


const App = () => {
  const dispatch=useDispatch();
  const x=useSelector(data=>data)


  return (
    <div>
        {/* Do not remove the main div */}
        <div className="1">
          <h1 className="4">{x}</h1>
          <button className="increment" onClick={()=>dispatch(increment())}>increment</button>
          <button className="decrement" onClick={()=>dispatch(decrement())}>decrement</button>

        </div>
    </div>
  )
}

export default App

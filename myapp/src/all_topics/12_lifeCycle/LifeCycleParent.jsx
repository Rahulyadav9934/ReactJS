import React, { useState } from 'react'
import LifyCycleInCBC from './LifeCycleInCBC'
import LifeCycleInFBC from './LifeCycleInFBC';

const LifeCycleParent = () => {

    const[toggle,setToggle]=useState(false);
  return (
    <div>
        <button onClick={() => setToggle(!toggle)}>
            Click

        </button>
        {toggle ? <LifeCycleInFBC/> : <h4>No Component</h4> }
        
       
        </div>
  );
};

export default LifeCycleParent;
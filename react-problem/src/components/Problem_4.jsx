import React, { useEffect, useState } from 'react'

const Problem_4 = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        document.title=`Count: ${count}`;
    },[count]);
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default Problem_4
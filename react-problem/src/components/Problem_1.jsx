import React, { useState } from 'react'

const Problem_1 = () => {
    const [isAvailable,setAvailable]=useState(true);
    const toggleStatus=()=>{
        setAvailable(!isAvailable);
    };
  return (
    <div>
        <p>
            {isAvailable ? "Book is available" : "Book is currently borrowed"}
        </p>
        <button onClick={toggleStatus}>
            {isAvailable ? "Borrow" : "Return"}
        </button>
    </div>
  );
}

export default Problem_1
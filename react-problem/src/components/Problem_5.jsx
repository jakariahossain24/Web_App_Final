import React, { useState } from 'react'

const Problem_5 = () => {
    const [course,setCourse]=useState("");

  return (
    <div>
        <select 
        value={course}
        onChange={(e)=>setCourse(e.target.value)}
        >
            <option value="">Select a course</option>
            <option value="web app">web app</option>
            <option value="database">database</option>
            <option value="artificial intelligence">artificial intelligence</option>
        </select>
        <p>Selected course: {course}</p>
    </div>
  );
}

export default Problem_5
import React, { useState } from 'react';
import Problem_1 from './components/Problem_1';
import Problem_2 from './components/Problem_2';
import Problem_3 from './components/Problem_3';
import Problem_4 from './components/Problem_4';
import Problem_5 from './components/Problem_5';
import Problem_6 from './components/Problem_6';

const App = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B+" },
  ]);

  return (
    <>
      <div>
        <Problem_1 />

        <hr />
        <br />

        <div>
          {students.map((student) => (
            <Problem_2
              key={student.id}
              name={student.name}
              grade={student.grade}
            />
          ))}
        </div>
      </div>
      <div><hr />
      <br /></div>
      <Problem_3/>
      <div><hr /><br /></div>
      <Problem_4/>
      <div><hr /><br /></div>
      <Problem_5/>
      <div><hr /><br /></div>
      <Problem_6/>
    </>
  );
};

export default App;
import React, { useState } from 'react';
import AddEvent from './components/addEvent';
import 'bootstrap/dist/css/bootstrap.css'
import Form from './components/Form';

const App = () => {
  const [count, setCount] = useState(3)
  // let count = 3;
  const myFunction = (x) => {
    console.log(x);
    // count += x;
    setCount(count + x)
    console.log(count);
  }
  return (
    <div>
      <Form></Form>
      <AddEvent func={myFunction} />
      <h2>{count}</h2>
    </div>
  );
};

export default App;

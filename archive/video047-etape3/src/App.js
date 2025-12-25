import { useState } from 'react';

import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { AddTask } from './components/AddTask';

import './App.css';


function App() {

  const [tasklist, setTasklist] = useState([]);
  
  // On rajoute un autre useState
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist= {tasklist} setTasklist= {setTasklist} 
        task={task} setTask = {setTask}
        />
        
      <ShowTask 
        tasklist= {tasklist} setTasklist= {setTasklist}
        task={task} setTask = {setTask}
        />
    </div>
  );
}

export default App;
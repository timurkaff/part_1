import React, { useState } from 'react';

function Greeting({ hello }) {
  return <h1>{hello}</h1>;
}

function TapTap() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>КЛИКЕР</h1>
      <p>Счетчик: {count}</p>
      <button onClick={handleClick}>КЛИК</button>
    </div>
  );
}

function TaskManager({ tasks, inputValue, setInputValue, addTask }) {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите новую задачу..."
      />
      <button onClick={addTask}>Добавить задачу</button>

      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  return { tasks, inputValue, setInputValue, addTask };
}

function App() {
  const { tasks, inputValue, setInputValue, addTask } = useTasks();

  return (
    <div>
      <Greeting hello="HELLO" />
      <TapTap />
      <TaskManager
        tasks={tasks}
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
    </div>
  );
}

export default App;

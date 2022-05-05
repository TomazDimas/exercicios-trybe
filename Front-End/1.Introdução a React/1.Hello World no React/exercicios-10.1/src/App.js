import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayTasks = ['estudar', 'malhar', 'correr', 'dormir'];

function App() {
  return (
    <ul>
      { arrayTasks.map((task) => Task(task)) }
    </ul>
  );
}

export default App;

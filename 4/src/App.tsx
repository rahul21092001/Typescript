import Taskb from "./components/Taskb"
import Taskc from "./components/Taskc"
import Taskd from "./components/Taskd";

function App() {

  const name = "Rahul";
  const age = 22;
  

  const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a to-do app', completed: true },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-center text-2xl mt-5"> TypeScript with React </h1>
      <hr/>

      <Taskb name={name} age={age}/>
      <hr/>

      <Taskc initialTodos={initialTodos}/>
      <hr/>

      <Taskd/>
      <h1 className="font-bold text-center text-2xl mt-3">Lodash Libray with react </h1>
      <p>Check console for output</p>
      <hr/>
      
    </div>
  )
}

export default App

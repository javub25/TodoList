import './App.css'
import TodoList from './features/ListTasks/TodoList.jsx';

function App() {
  return (
    <div style={{margin:'auto'}}>
      <section style={{paddingTop: '15%'}}>
          <TodoList />
       </section>
    </div>
  )
}

export default App

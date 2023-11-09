import Date from '../Date/getDate.jsx'
import RemoveTask from './RemoveTask.jsx';

const CompletedTask = (e, setCompletedList, todoList, setTodoList) => 
{
    const dateAdded = Date();

    const posCompleted = e.currentTarget.getAttribute("value");
    
    RemoveTask(e, setTodoList);

    setCompletedList((oldValue => [...oldValue, {
        taskStatus: "Completed",
        date: dateAdded, 
        task: todoList[posCompleted].task,
    }]))
}

export default CompletedTask;
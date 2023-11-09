import Date from '../Date/getDate.jsx';
import RegexTasks from '../Regex/RegexTasks.jsx';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const AddTask = (inputRef, setTodoList) => 
{
    const ValidTask = RegexTasks(inputRef.current.value);

    if(ValidTask)
    {
        const dateAdded = Date();
        setTodoList((oldState) => [
            ...oldState, {taskStatus: "Created at", date: dateAdded, task: inputRef.current.value }
        ]);
    }
    else
    {
        inputRef.current.value = ""
        Toastify({
            text: "Only words are allowed",
            position: "right",
            close: true, 
            style: {
              background: "red",
            }
          }).showToast();
    }
}
export default AddTask;
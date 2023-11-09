
import Date from '../Date/getDate.jsx'
import RegexTasks from '../Regex/RegexTasks.jsx';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const EditTask = (e, setTodoList) => 
{
    //Let's get new task message from prompt function
    const newMessage = prompt("Modifying your note ");
    //To overwrite the new message to array I need to know which position to modify
    const noteModified = parseInt(e.currentTarget.getAttribute('value'));

    const ValidTask = RegexTasks(newMessage);

    if(ValidTask)
    {
        const dateAdded = Date();

        if(newMessage!==null)
        {
            /*I need to know which div container is to put the new animation class called
            flip-2-hor-bottom-bck*/
            const parentNoteModified = e.currentTarget.parentNode.parentNode.parentNode;
            
            setTodoList((oldValue => 
            {
                return oldValue.map((item, i) => 
                {
                    if(i === noteModified) {
        
                        oldValue[i].task = newMessage;
        
                        return{
                            taskStatus: "Modified at",
                            date: dateAdded, 
                            task: oldValue[i].task
                        }                            
                    }
                    else return item;
                })
            }))
            
               
            /*After I've added animation class
                let's remove animations class around 1 second from element which has been edited*/
            setTimeout(() => { 
                parentNoteModified.classList.remove("flip-2-hor-bottom-bck", "animate__animated", "animate__slideInDown");
            }, 1000)

            //First Adding animation class from edited element
            parentNoteModified.classList.add("flip-2-hor-bottom-bck");
        }
    }
    else {
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
export default EditTask;
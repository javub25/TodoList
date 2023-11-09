import React from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faPenToSquare, faSquareCheck}  from '@fortawesome/free-regular-svg-icons'

import AddTask from '../Tasks/AddTask.jsx';
import RemoveTask from '../Tasks/RemoveTask.jsx';
import EditTask from '../Tasks/EditTask.jsx';
import CompletedTask from '../Tasks/CompletedTask.jsx';

const todoList = () => 
{
    const inputRef = React.useRef();
    //Let's read from LocalStorage to know if there are tasks to show
    const LocalStorageTodoList = JSON.parse(localStorage.getItem('todoList'));
    const LocalStorageCompleted = JSON.parse(localStorage.getItem('completedList'));
    //If there are no tasks in the browser, we show an empty array
    const todoListState = LocalStorageTodoList || [];
    const CompletedState = LocalStorageCompleted || [];

    const [CompletedList, setCompletedList] = React.useState(CompletedState);
    const [todoList, setTodoList] = React.useState(todoListState);
    
    //Let's store state value whenever todoList is changed
    React.useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

    //Let's store state value whenever CompletedList is changed
     React.useEffect(() => {
        localStorage.setItem('completedList', JSON.stringify(CompletedList))
    }, [CompletedList])


    return (
        <>
            <header>
                <h1>TodoList</h1>
            </header>

            <section>
                <div className="container">
                    <input 
                        type="text"
                        placeholder="Write your task for today"
                        ref={inputRef}
                        style={{padding: '10px'}}>

                    </input>
                    <button className="MarginTopMob" style={{padding: '10px', backgroundColor: 'rgb(2 132 199)', border: 'none', marginLeft: '12px', borderRadius: '4px', color:'white'}} onClick={() => AddTask(inputRef, setTodoList)}>Add Task</button>
                </div>


                {todoList!==null && todoList.length > 0 && 
                    <>  
                        <h2>Available Tasks: {todoList.length}</h2> 
                        {
                            todoList.map((item, i) => 
                            {        
                                return (
                                    <div key={i} className="container-task-parent animate__animated animate__slideInDown padTopStatus">
                                        <p style={{margin: '0px'}}>{item.taskStatus} <br/>{item.date.hours}:{item.date.minutes} - {item.date.day}/{item.date.month+1}/{item.date.year}</p>

                                        <div className="container-tasks">
                                            <FontAwesomeIcon style={{cursor: 'pointer', marginRight: '10px', color:'white'}} 
                                                value={i} icon={faSquareCheck} onClick={(e) => CompletedTask(e, setCompletedList, todoList, setTodoList)}/>
                                                
                                            <div>
                                                <p style={{color:'white', wordBreak: 'break-all'}}>{item.task}</p>
                                            </div>
                                            <div className="padBotMob">
                                                <FontAwesomeIcon style={{cursor: 'pointer', marginRight: '10px', color:'white'}} icon={faPenToSquare} value={i} onClick={(e) => EditTask(e, setTodoList)}/>
                                                <FontAwesomeIcon style={{cursor: 'pointer', color:'white'}} icon={faCircleXmark} value={i} onClick={(e) => RemoveTask(e, setTodoList)}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }

                {CompletedList!==null && CompletedList.length > 0 &&
                    <>
                        <h2>Completed Tasks: {CompletedList.length}</h2> 
                        {
                            CompletedList.map((item, i) => 
                            {
                                return (
                                    <div key={i} className="container-task-parent animate__animated animate__slideInDown padTopStatus completed">
                                        <p style={{margin: '0px'}}>{item.taskStatus} <br/>{item.date.hours}:{item.date.minutes} - {item.date.day}/{item.date.month+1}/{item.date.year}</p>

                                        <div className="container-tasks">
                                            <div>
                                                <p style={{color:'white', wordBreak: 'break-all'}}>{item.task}</p>
                                            </div>
                                            <div className="padBotMob">
                                                <FontAwesomeIcon style={{cursor: 'pointer', color:'white'}} icon={faCircleXmark} value={i} onClick={(e) => RemoveTask(e, setCompletedList)}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </section>
        </>
    )
}
export default todoList;
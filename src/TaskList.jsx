import "./TaskList.css"
import "./Task.css"
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';// for unique keys of list items
const TaskList = ({ isDark }) => {
    const [inpValue, setInpValue] = useState(""); // value for controlled input element
    const [tasks, setTasks] = useState([]);// list of tasks
    const [percent, setPercent] = useState(0);




    const handleRemove = (key) => { //  function for removal of tasks

        setTasks(
            tasks.filter((task, i) => {
                return !(task.key == key);
            })
        );
        progress()

    }


    const handleMarkDone = (key) => {
        let tempTasks = [...tasks];
        tempTasks.forEach((element) => {
            if (element.key == key) {
                element.isDone = !element.isDone;
            }
        })
        setTasks(tempTasks);
        console.log(tasks);

    }


    const progress = () => { // for progress bar
        let done = 0;
        if (tasks.length) {
            tasks.forEach((task) => {
                if (task.isDone) {
                    done += 1;
                }
            })
            let per = 100 * (done / tasks.length)
            per = Math.floor(per * 100) / 100
            setPercent(per)
        }


    }


    useEffect(() => {
        progress();// to keep updating progress
    }, [tasks])



    return (
        <div className={isDark ? "dark-Tasks Tasks" : "Tasks"}>
            <div className="header"><h2>Your Tasks </h2>

                {/* progress tracker */}
                <div className="tracker"> 
                    {percent}% Complete
                </div>
            </div>


            <input type="text"
                   value={inpValue} // controlled input
                   onChange={(event) => {
                       setInpValue(event.target.value);
                   }}
                   placeholder="Enter a new task" />

            <button
                onClick={() => {

                    inpValue != "" && setTasks((prevTasks) => { // function to add new tasks

                                            return [...prevTasks, { label: inpValue, key: uuidv4(), isDone: false }];
                                        });

                                        //  clearing the input :
                                        setInpValue("");
                        
                                    }} >
                Add</button>


{/* ANimate presemce to animate the exit and entry of tasks  */}
            <AnimatePresence>   
                {
                    tasks.map((task, idx) => { // rendering the tasks 
                        return (
                            <motion.div className={task.isDone ? "Task done-task" : "Task"} 
                                key={task.key}
                                initial={{ opacity: 0, y: -25 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* name of the task */}
                                <h4>{task.label}</h4> 

                                <div className="task-det">
                                    <p>Here are some details details about the task </p>


                                    <div className="task-btns">
                                        <button id="remove" onClick={() => { handleRemove(task.key); }}> Remove </button> 
                                        <button id="mark-done" onClick={() => { handleMarkDone(task.key); }}>{task.isDone ? "Mark as Not done" : "Mark as done"}</button>
                                    </div>

                                </div>

                            </motion.div>)
                    })
                }


            </AnimatePresence>
        </div>

    );

}

export default TaskList;
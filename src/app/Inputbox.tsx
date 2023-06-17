"use client";
import { v4 as uuid } from "uuid";
import React, { useState, type ChangeEvent } from "react";
// import { AiFillPlusSquare } from "react-icons/Ai";
import type { Task } from "@prisma/client";
// import {
//     fetchUsersTasks,
//     createUsersTask,
//     deleteUsersTask,
//     switchDoneUsersTask,
// } from "./apiCalls";

// interface Task {
//     id: string;
//     task: string;
//     doneness?: boolean;
// }
export const currentUser = 190041141;

function InputBox(): JSX.Element {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [formTask, setFormTask] = useState<Task>({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id: "",
        task: "",
        doneness: false,
        userId: currentUser,
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, type, name, checked } = event.target;
        setFormTask((prevTask) => ({
            ...prevTask,
            [name]: type == "checkbox" ? checked : value,
        }));
        console.log(value);
    };
    function deleteUsersTask(id: string) {
        setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
    }
    const handleCheck = (task: Task) => {
        console.log(`DELETE ${task.id}`);
        setTasks((prevTasks) =>
            prevTasks.map((task_) =>
                task_.id === task.id
                    ? { ...task_, doneness: !task_.doneness }
                    : task_
            )
        );
    };

    const addTask = () => {
        if (formTask.task === "") return;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        formTask.id = uuid();
        setTasks((prevTasks) => [...prevTasks, formTask]);
        setFormTask({
            id: "",
            task: "",
            doneness: false,
            userId: currentUser,
        });
    };

    return (
        <div className="bg-black p-10 text-white">
            <div className=" text-center">
                <div className="min-w-l flex max-w-xl items-center p-2 ">
                    <input
                        className="m-auto
                                    rounded-sm
                                    border
                                    border-gray-600
                                    bg-zinc-800 px-2
                                    font-montserrat
                                    "
                        name="task"
                        type="text"
                        value={formTask.task}
                        onChange={handleInputChange}
                    />
                    <button
                        className="ml-2 w-6 rounded-lg border-2  text-gray-400"
                        onClick={addTask}
                    >
                        +
                    </button>
                </div>
                {tasks.map((task) => (
                    <div key={task.id} className=" flex  items-center p-2">
                        <input
                            className=""
                            type="checkbox"
                            name="doneness"
                            checked={task.doneness}
                            onChange={() => handleCheck(task)}
                        />

                        <div className="flex w-full justify-between">
                            <p className="pl-2 font-montserrat ">{task.task}</p>
                            <button
                                className="ml-2 w-fit rounded-lg border-2  border-red-600"
                                onClick={() => deleteUsersTask(task.id)}
                            >
                                🖕( ͡─ ︹ ͡─)
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InputBox;

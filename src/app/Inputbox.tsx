"use client";
import { v4 as uuid } from "uuid";

// import { Task } from "@prisma/client";
import React, { useState, type ChangeEvent } from "react";
import { AiFillPlusSquare } from "react-icons/Ai";
import { prisma } from "~/server/db";
import type { Task, User } from "@prisma/client";

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
        setFormTask((prevTask) => ({ ...prevTask, id: uuid() }));
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
            <div className="text-center">
                <div className="flex items-center">
                    <input
                        className="rounded-sm 
                                    border
                                    border-gray-600
                                    bg-zinc-800
                                    px-2 font-montserrat"
                        name="task"
                        type="text"
                        value={formTask.task}
                        onChange={handleInputChange}
                    />
                    <AiFillPlusSquare
                        className="ml-2 text-gray-400"
                        onClick={addTask}
                    />
                </div>

                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center">
                        <input
                            type="checkbox"
                            name="doneness"
                            checked={task.doneness}
                            onChange={() => handleCheck(task)}
                        />
                        <p className="pl-2 text-left font-montserrat ">
                            {task.task}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InputBox;

"use client";
import { v4 as uuid } from "uuid";
import React, { useState, type ChangeEvent } from "react";
// import { AiFillPlusSquare } from "react-icons/Ai";
import type { Task } from "@prisma/client";

function InputBox(): JSX.Element {
	const [userId, setUserId] = useState<string>("190041141");
	const [textboxColor, SetTextboxColor] = useState<string>("bg-grey-200");
	const [tasks, setTasks] = useState<Task[]>([]);
	const [formTask, setFormTask] = useState<Task>({
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		id: "",
		task: "",
		doneness: false,
		userId: Number(userId),
	});

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, type, name, checked } = event.target;
		setFormTask((prevTask) => ({
			...prevTask,
			[name]: type == "checkbox" ? checked : value,
		}));
		console.log(value);
	};
	function handleuserIdInput(event: ChangeEvent<HTMLInputElement>) {
		const car = event.target.value;
		const number = Number(car);
		if (isNaN(number)) {
			console.log("Invalid Number:", car);
			SetTextboxColor("bg-red-200");
		} else {
			setUserId(car);
			SetTextboxColor("bg-grey-200");
		}
	}
	function deleteUsersTask(id: string) {
		setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id));
	}
	const handleCheck = (task: Task) => {
		console.log(`DELETE ${task.id}`);
		setTasks((prevTasks) => prevTasks.map((task_) => (task_.id === task.id ? { ...task_, doneness: !task_.doneness } : task_)));
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
			userId: Number(userId),
		});
	};
	{
		/* <button className="ml-2 w-fit rounded-lg border  border-red-600" onClick={() => deleteUsersTask(task.id)}>
							🖕( ͡─ ︹ ͡─)
						</button>

<button className="rounded- ml-2 w-6 rounded-sm border border-green-200 bg-gray-600 text-black" onClick={addTask}>
					+
				</button>
	
	<div className="" onClick={() => handleCheck(task)}>
						{task.doneness ? <p>😎</p> : <p>😥</p>}
					</div>
	

	{tasks.map((task) => (
		<div key={task.id} className=" flex  items-center p-2">
			

			<div className="flex w-full justify-between">
				<p className="pl-2 font-montserrat ">{task.task}</p>
				
			</div>
		</div>
	))} */
	}

	return (
		<div className="text-center">
			<input className={`${textboxColor} w-3/5 rounded-sm border-gray-800  text-center font-bold text-black`} type="text" name="userId" value={userId} onChange={handleuserIdInput} />
		</div>
	);
}

export default InputBox;

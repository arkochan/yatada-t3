import type { Task } from "@prisma/client";

export async function fetchUsersTasks(task_: Task): Promise<Task> {
    const response = await fetch("/api/todo");
    const task = await response.json() as Task;
    console.log("Task:" , task);
    return task;
}
export async function createUsersTask(task_: Task): Promise<Task> {
    const response = await fetch("/api/todo");
    const task = await response.json() as Task;
    console.log("Task:" , task);
    return task;
}
export async function deleteUsersTask(task_: Task): Promise<Task> {
    const response = await fetch("/api/todo");
    const task = await response.json() as Task;
    console.log("Task:" , task);
    return task;
}
export async function switchDoneUsersTask(task_: Task): Promise<Task> {
    const response = await fetch("/api/todo");
    const task = await response.json() as Task;
    console.log("Task:" , task);
    return task;
}

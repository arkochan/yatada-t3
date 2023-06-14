import type { Task } from "@prisma/client";
import { prisma } from "~/server/db";
/**
 * Fetches tasks for a specific user.
 *
 * @param userId - The ID of the user whose tasks are to be fetched.
 * @returns An array of tasks associated with the user.
 */
export async function fetchUsersTasks(userId: number) {
    try {
        const tasks = await prisma.task.findMany({
            where: { userId: userId },
        });
        if (tasks) {
            console.log("task", tasks);
            return tasks;
        } else {
            console.log("User not found.");
        }
    } catch (error) {
        console.error("Error fetching user tasks:", error);
    }
    return [];
}

/**
 * Deletes a user's task.
 *
 * @param taskId - The ID of the task to be deleted.
 * @returns The deleted task object if found, otherwise undefined.
 */
export async function deleteUsersTask(taskId: string) {
    try {
        const task = await prisma.task.delete({
            where: { id: taskId },
        });
        if (task) {
            console.log("task", task);
            return task;
        } else {
            console.log("Task not found.");
        }
    } catch (error) {
        console.error("Error deleting user tasks:", error);
    }
    return [];
}

/**
 * Adds a new task for a user.
 *
 * @param task_ - The task object to be created.
 * @returns The created task object.
 */
export async function createUsersTask(task_: Task) {
    try {
        const task: Task = await prisma.task.create({
            data: task_,
        });
        if (task) {
            console.log("task", task);
            return task;
        } else {
            console.log("Task not found.");
        }
    } catch (error) {
        console.error("Error creating user task:", error);
    }
    return [];
}

/**
 * Updates a user's task.
 *
 * @param task_ - The updated task object.
 * @returns The updated task object if found, otherwise undefined.
 */
export async function updateUsersTask(task_: Task) {
    try {
        const task: Task = await prisma.task.update({
            where: { id: task_.id },
            data: {
                task: task_.task,
            },
        });
        if (task) {
            console.log("task", task);
            return task;
        } else {
            console.log("Task not found.");
        }
    } catch (error) {
        console.error("Error updating user task:", error);
    }
    return [];
}

/**
 * Switches the completion status of a user's task.
 *
 * @param task_ - The task object with the updated completion status.
 * @returns The updated task object if found, otherwise undefined.
 */
export async function switchDoneUsersTask(task_: Task) {
    try {
        const task: Task = await prisma.task.update({
            where: { id: task_.id },
            data: {
                doneness: task_.doneness,
            },
        });
        if (task) {
            console.log("task", task);
            return task;
        } else {
            console.log("Task not found.");
        }
    } catch (error) {
        console.error("Error updating user task:", error);
    }
    return [];
}

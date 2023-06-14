import type { Task } from "@prisma/client";
import { NextResponse } from "next/server";
import { createUsersTask, updateUsersTask } from "../DB_oprations";

export async function POST(req: Request) {
    // Handle the API request here
    const task: Task = (await req.json()) as Task;
    const tasks = await createUsersTask(task);

    return NextResponse.json(tasks);
}

export async function PUT(req: Request) {
    // Handle the API request here
    const task: Task = (await req.json()) as Task;
    const tasks = await updateUsersTask(task);

    return NextResponse.json(tasks);
}

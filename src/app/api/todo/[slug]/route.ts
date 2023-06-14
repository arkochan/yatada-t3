import { NextResponse, type NextRequest } from "next/server";

import { deleteUsersTask, fetchUsersTasks } from "../../DB_oprations";
import type { Task } from "@prisma/client";
import { NextApiRequest } from "next";

export async function GET(
    request: Request,
    { params }: { params: { slug: number } }
) {
    // Handle the API request here
    const userId = params.slug;
    // const tasks = await fetchUsersTasks(190041141);
    const tasks = await fetchUsersTasks(userId);
    return NextResponse.json(tasks);
}

export async function DELETE(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const TaskId = params.slug;
    const tasks = await deleteUsersTask(TaskId);

    return NextResponse.json(tasks);
}

import { type NextRequest, NextResponse } from "next/server";




export async function GET(request: NextRequest) {
    // Handle the API request here
    const tasks = await fetchUsersTasks(190041141);

    return NextResponse.json(tasks);
}

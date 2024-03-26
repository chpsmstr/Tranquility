import Assignment from "@/app/Components/Assignment";
import Link from "next/link";
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

export default async function Class({ params }: {
    params: { teacherClassId: number }
}) {
    const thisCourse = await prisma.course.findFirst({
        where: {
            courseId: Number(params.teacherClassId)
        }
    });
    const gradeNav = "../teacherDashboard/" + params.teacherClassId + "/" + params.teacherClassId;
    return (
        <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <br></br>
            <div className={`${"bg-" + thisCourse?.courseColour +"-500"} w-[75rem] h-64 rounded-lg px-6`}><h1 className="text-5xl relative bottom-20 px-4">{thisCourse?.courseName+ " " + thisCourse?.courseSection}</h1>
                <Link href={gradeNav}>
                    <button className="relative left-1 bottom-10 text-white bg-gray-500 text-4xl hover:bg-gray-400 text-white py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg">Grade</button>
                </Link>
                <Link href={`${params.teacherClassId}/createAssignment`}>
                    <button className="relative left-4 bottom-10 text-white bg-gray-500 text-4xl hover:bg-gray-400 text-white py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg">Create Assignment</button>
                </Link>
                <Link href={`${params.teacherClassId}/createQuiz`}>
                    <button className="relative left-7 bottom-10 text-white bg-gray-500 text-4xl hover:bg-gray-400 text-white py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg">Create Quiz</button>
                </Link>
                <h1 className="text-white text-6xl pt-[5rem]">{thisCourse?.courseName+ " " + thisCourse?.courseSection}</h1>
            </div>
            <br></br>
            <div className="grid grid-rows-12 grid-cols-12 gap-20">
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/* To-Do Column (For teacher reminders, new assignments, etc.) */}
                    <h1 className="text-3xl text-center mt-2">To-Do</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        <p className="text-2xl">⦿ Class Meeting - 04/24/24 </p>
                    </div>
                </div>
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/* Quiz Column for Upcoming Quizzes */}
                    <h1 className="text-3xl text-center mt-2">Quizzes</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        {/* Quiz Items */}
                        <Link href = "../../Quiz/Quiz1">
                    <button className="text-white bg-green-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>Quiz #1</strong><br></br>{thisCourse?.courseName+ " " + thisCourse?.courseSection} Module 1<br></br>3/13/2023</button>
                    </Link><div className="static bottom-100 left-0"></div>
                    </div>
                </div>
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/* Assignments Column **Adjust row span based on the number of assignments received */}
                    <h1 className="text-3xl text-center mt-2">Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        {/* Fetched Assignments */}
                        <Link href = "../../Assignment/Assignment1">
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{thisCourse?.courseName+ " " + thisCourse?.courseSection} Assignment 1</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        </Link>
                        <Link href = "../../Assignment/Assignment2">
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{thisCourse?.courseName+ " " + thisCourse?.courseSection} Assignment 2</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        </Link>
                        <Link href = "../../Assignment/Assignment3">
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{thisCourse?.courseName+ " " + thisCourse?.courseSection} Assignment 3</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        </Link> </div>
                </div>
            </div>


        </main>
    )
}
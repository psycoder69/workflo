"use client";

import { useState } from "react";
import Column from "@/app/components/Column";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCirclePlus, faCircleQuestion, faFilter, faMagnifyingGlass, faShareNodes, faWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import NavBar from "../components/NavBar";
import NewTaskPanel from "../components/NewTaskPanel";

const ActionButton = ({ action, icon }: ActionButtonProps) => {
    return (
        <button
            type="button"
            className="text-[#797979] hover:text-[#080808] flex items-center justify-center gap-2 rounded-lg hover:bg-white p-2"
        >
            <span className="text-[0.96rem] leading-6">{action}</span>
            <FontAwesomeIcon icon={icon} className="w-4 h-4" />
        </button>
    );
};

const initialData: InitialData = {
    tasks: {
        "task-1": {
            id: "task-1",
            title: "Implement User authentication",
            content: "Task Number 1",
            status: "to-do"
        },
        "task-2": {
            id: "task-2",
            title: "Design Homepage UI",
            content: "Task Number 2",
            status: "in-progress"
        },
        "task-3": {
            id: "task-3",
            title: "Conduct User Feedback Survey",
            content: "Task Number 3",
            status: "in-progress"
        },
        "task-4": {
            id: "task-4",
            title: "Integrate Cloud Storage",
            content: "Task Number 4",
            status: "under-review"
        },
        "task-5": {
            id: "task-5",
            title: "Test Cross-browser compatibility",
            content: "Task Number 5",
            status: "finished"
        }
    },

    columns: {
        "to-do": {
            id: "to-do",
            title: "To Do",
            taskIds: ["task-1"],
        },
        "in-progress": {
            id: "in-progress",
            title: "In Progress",
            taskIds: ["task-2", "task-3"],
        },
        "under-review": {
            id: "under-review",
            title: "Under Review",
            taskIds: ["task-4"],
        },
        finished: { id: "finished", title: "Finished", taskIds: ["task-5"] },
    },

    columnOrder: ["to-do", "in-progress", "under-review", "finished"],
};

const Dashboard = () => {
    const [data, setData] = useState<InitialData>(initialData);

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;

        const start = data.columns[source.droppableId];
        const finish = data.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            };

            const newData = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setData(newData);
            return;
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newData = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };

        setData(newData);
    };

    return (
        <main className="w-full flex items-start justify-start bg-white relative">
            <NavBar />

            <section className="w-full h-full min-h-screen flex flex-col gap-6 border border-[#ffffff1a] rounded-sm px-4 py-6 bg-gray-100 relative">
                <header className="flex flex-row items-center justify-between">
                    <h1 className="text-[1.75rem] leading-6 text-[#080808] font-semibold">
                        Good morning, Joe!
                    </h1>

                    <span className="flex items-center gap-2">
                        <span className="text-[0.9375rem] text-[#080808]">
                            Help & feedback
                        </span>
                        <FontAwesomeIcon
                            icon={faCircleQuestion}
                            className="w-4 h-4 text-[#080808] cursor-pointer"
                        />
                    </span>
                </header>

                <div className="w-full border border-[#797979]"></div>

                <div className="w-full grid grid-cols-[auto_1fr] items-center gap-8">
                    <div className="w-full">
                        <div className="grid grid-cols-[1fr_auto] items-center gap-2 border border-transparent focus-within:border-[#dedede] rounded-lg bg-white pr-2">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search"
                                className="w-40 text-[0.92rem] leading-6 rounded-lg outline-none py-1.5 px-2"
                            />
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="w-4 h-4 text-[#080808] cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4">
                        <ActionButton action="Calendar View" icon={faCalendarDays} />
                        <ActionButton action="Automation" icon={faWandSparkles} />
                        <ActionButton action="Filter" icon={faFilter} />
                        <ActionButton action="Share" icon={faShareNodes} />

                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 p-2 ml-2 app-button"
                        >
                            <span className="text-[0.96rem] text-white font-normal">
                                Create New
                            </span>
                            <FontAwesomeIcon
                                icon={faCirclePlus}
                                className="w-4 h-4 text-white"
                            />
                        </button>
                    </div>
                </div>

                <div className="w-full flex-auto grid grid-cols-4 gap-4 p-4 rounded-lg bg-white">
                    <DragDropContext onDragEnd={onDragEnd}>
                        {data.columnOrder.map((columnId, index) => {
                            const column = data.columns[columnId];
                            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

                            return <Column key={column.id} column={column} tasks={tasks} />;
                        })}
                    </DragDropContext>
                </div>
            </section>

            <NewTaskPanel />
        </main>
    );
};

interface ActionButtonProps {
    action: string;
    icon: IconDefinition;
}

interface Task {
    id: string;
    content: string;
    title: string;
    status: string;
    priority?: string;
    deadline?: Date;
    description?: string;
}

interface ColumnData {
    id: string;
    title: string;
    taskIds: string[];
}

interface InitialData {
    tasks: { [key: string]: Task };
    columns: { [key: string]: ColumnData };
    columnOrder: string[];
}

export default Dashboard;

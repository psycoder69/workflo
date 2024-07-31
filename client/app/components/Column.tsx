import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({column, tasks}: ColumnProps) => {
    return (
        <section className="w-full h-full flex flex-col gap-4 rounded-lg">
            <header className="flex items-center justify-between">
                <h2 className="text-[#555555] text-base leading-6 font-normal">
                    { column.title }
                </h2>

                <FontAwesomeIcon icon={faChartSimple} className="w-4 h-4" />
            </header>

            <Droppable droppableId={column.id}>
                {
                    (provided, snapshot) => (
                        <div ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`w-full flex flex-col gap-4 rounded-lg ${snapshot.isDraggingOver ? "bg-gray-200" : "bg-gray-100"}`}>
                            {
                                tasks.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {
                                            (provided, snapshot) => (
                                                <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="flex flex-col items-start gap-4 border border-[#dedede] rounded-lg bg-[#f9f9f9] p-3 shadow">
                                                    <h2 className="text-[#606060] text-[0.96rem] break-all">
                                                        {
                                                            task.title
                                                        }
                                                    </h2>

                                                    <p className="text-[#797979] text-[0.88rem] break-all">
                                                        {
                                                            task.content
                                                        }
                                                    </p>
                                                    {
                                                        task.status
                                                    }
                                                </div>
                                            )
                                        }
                                    </Draggable>
                                ))
                            }

                            {
                                provided.placeholder
                            }
                        </div>
                    )
                }
            </Droppable>

            <button type="button" className="flex items-center justify-between rounded-lg bg-gradient-to-b from-[#3a3a3a] to-[#202020] shadow p-2">
                <span className="text-[#e3e3e1] text-[0.96rem]">Add new</span>
                <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-[#e3e1e1]" />
            </button>
        </section>
    );
};

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

interface ColumnProps {
    column: ColumnData;
    tasks: Task[];
}

export default Column;
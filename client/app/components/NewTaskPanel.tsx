import { faBolt, faCalendarDay, faChartSimple, faPencil, faPlus, faShare, faStar, faUpRightAndDownLeftFromCenter, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewTaskPanel = () => {
    return (
        <section className="w-full h-full flex items-start justify-end absolute bg-[#00000099]">
            <div className="w-2/5 h-full flex flex-col gap-8 text-[#080808] bg-white p-4">
                <nav className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-center gap-6">
                        <button type="button" className="border-none rounded-full hover:bg-[#e9e9e9] px-[0.48rem] py-[0.24rem]">
                            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                        </button>

                        <button type="button" className="border-none rounded-full hover:bg-[#e9e9e9] px-[0.52rem] py-[0.2rem]">
                            <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-6">
                        <button type="button" className="flex items-center justify-center gap-2 rounded-lg bg-[#e9e9e9] p-2">
                            <span className="text-[0.88rem]">
                                Share
                            </span>
                            <FontAwesomeIcon icon={faShare} className="w-4 h-4" />
                        </button>

                        <button type="button" className="flex items-center justify-center gap-2 rounded-lg bg-[#e9e9e9] p-2">
                            <span className="text-[0.88rem]">
                                Favorite
                            </span>
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                        </button>
                    </div>
                </nav>

                <div>
                    <textarea name="title" id="title" rows={1} placeholder="Title" className="w-full text-[#797979] text-2xl font-semibold outline-none focus:border-b px-2" />
                </div>

                <div className="w-full h-full flex flex-col items-start justify-between">
                    <div className="w-full flex flex-col gap-6 border border-green-600 px-2 text-[0.96rem] text-[#666666]">
                        <div className="w-full flex items-center justify-start gap-8">
                            <FontAwesomeIcon icon={faChartSimple} className="w-4 h-4" />

                            <p>
                                Status
                            </p>

                            <select name="status" id="status" className="text-[#080808] outline-none">
                                <option value="" className="text-[#cdbdbd]"> Not Selected </option>
                                <option value="to-do"> To Do </option>
                                <option value="in-progress">
                                    In Progress
                                </option>
                                <option value="under-review">
                                    Under review
                                </option>
                                <option value="finished">
                                    Finished
                                </option>
                            </select>
                        </div>

                        <div className="w-full flex items-center justify-start gap-8">
                            <FontAwesomeIcon icon={faBolt} className="w-4 h-4" />

                            <p>
                                Priority
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-start gap-8">
                            <FontAwesomeIcon icon={faCalendarDay} className="w-4 h-4" />

                            <p className="text-[0.96rem]">
                                Deadline
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-start gap-8">
                            <FontAwesomeIcon icon={faPencil} className="w-4 h-4" />

                            <p className="text-[0.96rem]">
                                Description
                            </p>
                        </div>

                        <button type="button" className="flex items-center justify-start gap-8">
                            <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-[#080808]" />
                            <span className="text-[#080808]">
                                Add Custom Property
                            </span>
                        </button>
                    </div>

                    <button type="button" className="w-full text-[#e3e3e1] flex items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#3a3a3a] to-[#202020] shadow p-2">
                        <span className="text-base">Add new</span>
                        <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewTaskPanel;
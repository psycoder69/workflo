import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faChartSimple, faCirclePlus, faGear, faHome, faPeopleGroup, faUserTie } from "@fortawesome/free-solid-svg-icons";
import NavOption from "../components/NavOption";

const NavBar = () => {
    return (
        <nav className="w-[284px] h-full flex flex-col items-start justify-between gap-24 px-4 py-6 bg-white border-r border-r-[#dedede]">
            <div className="w-full flex flex-col items-start gap-4">
                <div className="w-full h-20 flex flex-col items-start gap-2 p-0">
                    <div className="h-8 flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center flex-grow-0 rounded-lg">
                            <FontAwesomeIcon icon={faUserTie} className="w-6 h-6" />
                        </div>
                        <span className="text-[1.25rem] leading-6 text-[#080808] font-medium">
                            Joe Gardner
                        </span>
                    </div>

                    <div className="w-full flex justify-end">
                        <button
                            type="button"
                            className="w-20 text-[#797979] text-[0.96rem] leading-5 font-normal rounded bg-[#f4f4f4] p-2"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-col items-start gap-2">
                    <NavOption option="Home" isActive={true} icon={faHome} />
                    <NavOption option="Boards" icon={faChartSimple} />
                    <NavOption option="Settings" icon={faGear} />
                    <NavOption option="Teams" icon={faPeopleGroup} />
                    <NavOption option="Analytics" icon={faChartLine} />
                </div>

                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 p-2 app-button"
                >
                    <span className="text-[0.96rem] text-white font-normal">
                        Create New Task
                    </span>
                    <FontAwesomeIcon
                        icon={faCirclePlus}
                        className="w-4 h-4 text-white"
                    />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
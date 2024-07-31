import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const NavOption = ({ option, isActive = false, icon }: NavOptionProps) => {
    return (
        <div
            className={`w-full flex flex-row items-start justify-start gap-4 border ${isActive == true
                    ? "border-[#dedede] bg-[#f4f4f4]"
                    : "border-transparent bg-transparent"
                } hover:border hover:border-[#dedede] rounded p-2 cursor-pointer`}
        >
            <FontAwesomeIcon
                icon={icon}
                className={`w-5 h-5 ${isActive == true ? "text-[#080808]" : "text-[#797979]"
                    }`}
            />
            <span
                className={`text-[0.96rem] ${isActive == true ? "text-[#080808] font-medium" : "text-[#797979]"
                    }`}
            >
                {option}
            </span>
        </div>
    );
};

interface NavOptionProps {
    option: string;
    isActive?: Boolean;
    icon: IconDefinition;
};

export default NavOption;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const EllipseIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <FontAwesomeIcon
                    className="hover:cursor-pointer"
                    onClick={handleClick}
                    icon={faEllipsisVertical}
                />

                {isOpen && (
                    <div className="absolute top-13 bg-gray-300 bg-opacity-80 text-black right-10 shadow-md text-sm rounded-md overflow-hidden z-50">
                        <ul className="list-none p-2">
                            <li className="hover:bg-gray-200 py-1 px-3">
                                Scan QR Code
                            </li>
                            <li className="hover:bg-gray-200 py-1 px-3">
                                Validate by Mat No
                            </li>
                            <li className="hover:bg-gray-200 py-1 px-3">
                                Validate by Dates
                            </li>
                            <li className="hover:bg-gray-200 py-1 px-3">
                                Settings
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default EllipseIcon;

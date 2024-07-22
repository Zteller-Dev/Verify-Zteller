import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import EllipseIcon from "./ellipse";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row items-center w-full py-7 justify-between px-8 text-xl">
                <FontAwesomeIcon icon={faHouse} />
                <EllipseIcon />
            </div>
        </>
    );
};

export default Navbar;

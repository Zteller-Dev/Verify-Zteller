import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import EllipseIcon from "./ellipse";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex flex-row items-center w-full py-7 justify-between px-8 text-xl">
                <FontAwesomeIcon icon={faHouse} />
                <Link to="https://zteller.com">
                    <EllipseIcon />
                </Link>
            </div>
        </>
    );
};

export default Navbar;

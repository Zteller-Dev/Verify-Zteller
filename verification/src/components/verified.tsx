import Navbar from "./navbar";

const VerificationDone = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <div className="my-5 w-[300px] h-[350px] bg-gray-400"></div>
            <button className="bg-blue-400 px-4 py-2 rounded-sm hover:bg-blue-600">
                Download
            </button>
        </div>
    );
};

export default VerificationDone;

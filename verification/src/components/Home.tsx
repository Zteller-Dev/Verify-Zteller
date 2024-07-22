import Navbar from "./navbar";
import Ztellerlogo from "../assets/Ztellalogo.png";

const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center h-[100vh] w-full">
                <Navbar />

                <div className="mt-[25%] w-full mx-auto text-center">
                    <img src={Ztellerlogo} className="mx-auto w-[100px]" />
                    <form>
                        <input
                            className="italic pl-3 w-[60%] py-2 mt-5 border-black border-2 rounded-sm"
                            placeholder="Input Payment ID to Validate receipt"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-400 hover:bg-blue-600 rounded-sm block mx-auto my-2 px-3 py-1 text-white">
                            Verify
                        </button>
                    </form>

                    <div className="mt-[30px]">
                        <p>OR</p>
                        <button className="bg-gray-300 px-3 hover:bg-gray-500 py-2 rounded-sm">
                            Scan QR Code
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

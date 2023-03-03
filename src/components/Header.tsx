import { Navbar } from "./Navbar";
import bgPatternNavMob from "../assets/bgPatternNavMob.svg";

export function Header() {
    return (
        <div
            style={{
                backgroundImage: `url(${bgPatternNavMob}), linear-gradient(#ff3d54, #ff8f70)`,
            }}
            className="bg-center rounded-bl-[4rem] text-white"
        >
            <Navbar />

            <div className="flex flex-col items-center py-36 space-y-6 px-6">
                <h1 className="text-6xl text-center font-[600]">
                    A modern publishing platform
                </h1>
                <h2 className="text-xl">
                    Grow your audience and build your online brand
                </h2>
                <div className="flex space-x-5 font-[Ubuntu] font-[500]">
                    <button className="bg-white px-5 py-3 rounded-full text-[#ff525d] hover:bg-[#ff7a85] hover:text-white">
                        Start for Free
                    </button>
                    <button className="px-5 py-3 rounded-full border-[1px] border-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

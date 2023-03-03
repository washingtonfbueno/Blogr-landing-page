import { useState } from "react";
import closeTab from "../assets/icon-close.svg";
import openTab from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
import arrowLight from "../assets/icon-arrow-light.svg";
import arrowDark from "../assets/icon-arrow-dark.svg";

const links: { [option: string]: string[] } = {
    Product: ["Overview", "Marketplace", "Features", "Integrations"],
    Company: ["About", "Team", "Blog", "Career"],
    Connect: ["Contact", "Newsletter", "Linkedin"],
};

export function Navbar() {
    const [closed, setClosed] = useState(true);
    const [options, setOptions] = useState<{ [option: string]: boolean }>({
        Product: false,
        Company: false,
        Connect: false,
    });

    const handleOptions = (option: string, opened: boolean) => {
        const newOptionsState: { [option: string]: boolean } = {
            Product: false,
            Company: false,
            Connect: false,
        };
        newOptionsState[option] = !opened;
        setOptions(newOptionsState);
    };

    return (
        <div className="flex flex-col py-10 relative font-[Ubuntu] font-[500]">
            <div className="flex justify-between items-center px-12 lg:px-48">
                <div className="flex space-x-8 items-center">
                    <img src={logo} alt="logo" />

                    <ul className="hidden lg:flex space-x-8">
                        {Object.entries(options).map(
                            ([option, opened], index) => (
                                <li className="relative" key={index}>
                                    <p
                                        className="hover:underline"
                                        onClick={() =>
                                            handleOptions(option, opened)
                                        }
                                    >
                                        {option}
                                        <img
                                            src={arrowLight}
                                            className={`ml-2 inline ${
                                                opened && "rotate-180"
                                            }`}
                                            alt="arrow light"
                                        />
                                    </p>
                                    {opened && (
                                        <ul className="absolute top-12 -left-6 bg-white pl-6 w-36 py-6 space-y-4 rounded-md">
                                            {links[option].map(
                                                (link, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href=""
                                                            className="text-[#4b5862] hover:text-[#25252d] hover:font-[500]"
                                                        >
                                                            {link}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="hidden lg:flex space-x-5 items-center">
                    <a className="hover:underline">Login</a>
                    <button className="bg-white px-5 py-3 rounded-full text-[#ff525d] hover:bg-[#ff7a85] hover:text-white">
                        Sign Up
                    </button>
                </div>

                <img
                    src={closed ? openTab : closeTab}
                    alt="mobile tab"
                    className="lg:hidden"
                    onClick={() => setClosed((prev) => !prev)}
                />
            </div>

            {!closed && (
                <div className="self-center absolute top-28 w-full px-5 lg:hidden">
                    <div className="bg-white flex flex-col items-center py-12 space-y-5 rounded-md text-[#25252d]">
                        <ul className="space-y-6 flex flex-col items-center justify-center w-full">
                            {Object.entries(options).map(
                                ([option, opened], index) => (
                                    <li
                                        className="flex flex-col items-center w-full px-8"
                                        key={index}
                                    >
                                        <p
                                            className={
                                                opened ? "text-[#4b5862]" : ""
                                            }
                                            onClick={() =>
                                                handleOptions(option, opened)
                                            }
                                        >
                                            {option}

                                            <img
                                                src={arrowDark}
                                                className={`ml-2 inline ${
                                                    opened && "rotate-180"
                                                }`}
                                                alt="arrow dark"
                                            />
                                        </p>
                                        {opened && (
                                            <ul className="bg-[#EDEFEF] mt-6 space-y-4 py-6 w-full flex flex-col items-center rounded-md">
                                                {links[option].map(
                                                    (link, index) => (
                                                        <li key={index}>
                                                            <a
                                                                href=""
                                                                className="text-[#4b5862]"
                                                            >
                                                                {link}
                                                            </a>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                        <a>Login</a>
                        <button className="bg-gradient-to-b from-[#ff8f70] to-[#ff3d54] px-10 py-3 rounded-full text-white">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

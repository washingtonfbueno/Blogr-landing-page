import logo from "../assets/logo.svg";

interface Links {
    [title: string]: string[];
}

const links: Links = {
    Product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    Company: ["About", "Team", "Blog", "Careers"],
    Connect: ["Contact", "Newsletter", "Linkedin"],
};

export function Footer() {
    return (
        <div className="bg-[#25252d] px-12 lg:px-48 py-12 rounded-tr-[4rem]">
            <div className="w-[100%] max-w-[1000px] flex items-center md:items-start justify-between flex-col md:flex-row">
                <img className="mb-16 md:mb-0" src={logo} alt="logo" />

                {Object.entries(links).map(([title, l]) => (
                    <div className="text-white flex flex-col items-center md:items-start">
                        <h3 className="font-[700] mb-6">{title}</h3>
                        <ul className="space-y-2 flex flex-col items-center md:items-start mb-12 md:mb-0">
                            {l.map((link) => (
                                <li>
                                    <a className="hover:underline" href="">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

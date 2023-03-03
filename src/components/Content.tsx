import ilustrationEditorMobile from "../assets/illustration-editor-mobile.svg";
import ilustrationEditorDesktop from "../assets/illustration-editor-desktop.svg";
import ilustrationLaptopMobile from "../assets/illustration-laptop-mobile.svg";
import ilustrationLaptopDesktop from "../assets/illustration-laptop-desktop.svg";
import ilustrationPhones from "../assets/illustration-phones.svg";
import bgPatternCircles from "../assets/bg-pattern-circles.svg";

export const Text: React.FC<{ title: string; children: string }> = ({
    title,
    children,
}) => {
    return (
        <div className="text-center space-y-4 lg:text-left">
            <h3 className="text-[#1f3f5b] text-2xl font-[600]">{title}</h3>
            <p className="text-[#4b5862]">{children}</p>
        </div>
    );
};

export function Content() {
    return (
        <div className="">
            <h2 className="text-center text-[#1f3f5b] text-4xl font-[600] mt-24">
                Designed for the future
            </h2>

            {/*  FIRST SECTION */}
            <div
                className="flex flex-col-reverse items-center lg:items-start justify-between
             lg:flex-row py-16 px-12 lg:px-48"
            >
                <div className="w-[100%] max-w-[700px] space-y-12">
                    <Text title="Introducing an extensible editor">
                        Blogr features an exceedingly intuitive interface which
                        lets you focus on one thing: creating content. The
                        editor supports management of multiple blogs and allows
                        easy manipulation of embeds such as images, videos, and
                        Markdown. Extensibility with plugins and themes provide
                        easy ways to add functionality or change the looks of a
                        blog.
                    </Text>

                    <Text title="Introducing an extensible editor">
                        Blogr features an exceedingly intuitive interface which
                        lets you focus on one thing: creating content. The
                        editor supports management of multiple blogs and allows
                        easy manipulation of embeds such as images, videos, and
                        Markdown. Extensibility with plugins and themes provide
                        easy ways to add functionality or change the looks of a
                        blog.
                    </Text>
                </div>

                <img
                    src={ilustrationEditorDesktop}
                    alt="ilustrationEditorMobile"
                    className="hidden lg:block lg:w-[700px] translate-x-96 -ml-96"
                />

                <img
                    src={ilustrationEditorMobile}
                    alt="ilustrationEditorMobile"
                    className="block w-[100%] max-w-[600px] mb-12 lg:hidden"
                />
            </div>

            {/*  SECOND SECTION */}

            <div className="bg-gradient-to-t from-[#2c2d3f] to-[#3f4164] mt-36 lg:mt-0 lg:h-72 rounded-tr-[4rem] rounded-bl-[4rem]">
                <div
                    style={{
                        backgroundImage: `url(${bgPatternCircles})`,
                        backgroundSize: "60rem",
                        backgroundPosition: "-12rem -32rem",
                    }}
                    className="bg-no-repeat w-[100%] h-[100%] flex items-start"
                >
                    <div className="px-12 lg:px-48 flex flex-col lg:flex-row lg:justify-between items-center w-[100%] h-[100%] py-16">
                        <img
                            src={ilustrationPhones}
                            alt="ilustrationEditorMobile"
                            className="w-[400px] -translate-y-64 -mb-64 lg:translate-y-4 lg:mb-0"
                        />

                        <div className="w-[100%] max-w-[700px] text-center space-y-4 lg:text-left">
                            <h3 className="text-white text-2xl font-[600]">
                                State of the Art Infrastructure
                            </h3>
                            <p className="text-white font-[400]">
                                With reliability and speed in mind, worldwide
                                data centers provide the backbone for ultra-fast
                                connectivity. This ensures your site will load
                                instantly, no matter where your readers are,
                                keeping your site competitive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  THIRD SECTION */}

            <div
                className="flex flex-col items-center lg:items-start justify-between
             lg:flex-row py-12 lg:py-32 px-12 lg:px-48"
            >
                <img
                    src={ilustrationLaptopDesktop}
                    alt="ilustrationEditorMobile"
                    className="hidden lg:block lg:w-[800px] -translate-x-96 -mr-96"
                />
                <img
                    src={ilustrationLaptopMobile}
                    alt="ilustrationEditorMobile"
                    className="block w-[100%] max-w-[600px] mb-12 lg:hidden"
                />
                <div className="w-[100%] max-w-[700px] space-y-12">
                    <Text title="Free, open, simple">
                        Blogr is a free and open source application backed by a
                        large community of helpful developers. It supports
                        features such as code syntax highlighting, RSS feeds,
                        social media integration, third-party commenting tools,
                        and works seamlessly with Google Analytics. The
                        architecture is clean and is relatively easy to learn.
                    </Text>

                    <Text title="Powerful tooling">
                        Batteries included. We built a simple and
                        straightforward CLI tool that makes customization and
                        deployment a breeze, but capable of producing even the
                        most complicated sites.
                    </Text>
                </div>
            </div>
        </div>
    );
}

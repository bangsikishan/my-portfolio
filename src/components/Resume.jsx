const Resume = () => {
    return (
        <div id="resume" className="py-24 bg-[#343a40]">
            <h1 className="w-fit mx-auto text-2xl font-semibold text-white border-b-2 border-[#20c997] md:text-4xl">Resume</h1>
            <div className="md:px-20 my-8 md:my-16 grid lg:grid-cols-2">
                <div className="my-5 px-10 py-6 space-y-8">
                    <h1 className="my-3 text-2xl font-semibold text-white">My Education</h1>
                    <div className="py-6 px-6 rounded-md bg-[#111418]">
                        <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">2019 - present</span>
                        <h1 className="mt-4 mb-2 text-xl font-semibold text-white">Bsc Hons Computing</h1>
                        <p className="mb-4 text-[#20c997]">The British College</p>
                        <p className="text-gray-400">
                            Currently pursuing Bachelors degree in Computer Science.
                        </p>
                    </div>
                    <div className="py-6 px-6 rounded-md bg-[#111418]">
                        <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">2016 - 2018</span>
                        <h1 className="mt-4 mb-2 text-xl font-semibold text-white">+2 Science</h1>
                        <p className="mb-4 text-[#20c997]">Surkhet Horizon Academy</p>
                        <p className="text-gray-400">
                            Completed +2 in Science field in high school in hometown.
                        </p>
                    </div>
                    <div className="py-6 px-6 rounded-md bg-[#111418]">
                        <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">2016</span>
                        <h1 className="mt-4 mb-2 text-xl font-semibold text-white">SEE</h1>
                        <p className="mb-4 text-[#20c997]">Siddhartha National Co-operative Academy</p>
                        <p className="text-gray-400">
                            Completed SEE in school in hometown.
                        </p>
                    </div>
                </div>

                <div className="my-5 px-10 py-6 space-y-8">
                    <h1 className="my-3 text-2xl font-semibold text-white">My Experience</h1>
                    <div className="py-6 px-6 rounded-md bg-[#111418]">
                        <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">2022 - present</span>
                        <h1 className="mt-4 mb-2 text-xl font-semibold text-white">Full stack Developer</h1>
                        <p className="mb-4 text-[#20c997]">Personal Projects</p>
                        <p className="text-gray-400">
                            Learning full-stack web development using MERN stack by myself.
                        </p>
                    </div>
                    <div className="py-6 px-6 rounded-md bg-[#111418]">
                        <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">2023 - present</span>
                        <h1 className="mt-4 mb-2 text-xl font-semibold text-white">Laravel Developer</h1>
                        <p className="mb-4 text-[#20c997]">The British College</p>
                        <p className="text-gray-400">
                            Currently developing Laravel skills independently.
                        </p>
                    </div>
                    <div className="py-6 px-6 rounded-md bg-[#111418]">
                        <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">2019 - 2020</span>
                        <h1 className="mt-4 mb-2 text-xl font-semibold text-white">Flask Web Developer</h1>
                        <p className="mb-4 text-[#20c997]">Personal Projects</p>
                        <p className="text-gray-400">
                            Began journey in IT using Python and Flask as a web dev framework.
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-8 md:my-16 md:px-28">
                <h1 className="my-6 text-2xl font-semibold text-center md:text-left text-white">My Skills</h1>
                <div className="px-10 grid lg:grid-cols-2 lg:gap-20 md:px-0">
                    <div className="mt-6  space-y-6 text-white">
                        <div className="space-y-3">
                            <p className="flex justify-between">
                                HTML/CSS
                                <span>90%</span>
                            </p>
                            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                                <div className="absolute top-0 left-0 h-full w-[90%] rounded-l-md bg-[#20c997]"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="flex justify-between">
                                Javascript
                                <span>75%</span>
                            </p>
                            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                                <div className="absolute top-0 left-0 h-full w-[75%] rounded-l-md bg-[#20c997]"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="flex justify-between">
                                Laravel
                                <span>70%</span>
                            </p>
                            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                                <div className="absolute top-0 left-0 h-full w-[70%] rounded-l-md bg-[#20c997]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 space-y-6 text-white">
                        <div className="space-y-3">
                            <p className="flex justify-between">
                                ReactJS
                                <span>75%</span>
                            </p>
                            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                                <div className="absolute top-0 left-0 h-full w-[75%] rounded-l-md bg-[#20c997]"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="flex justify-between">
                                NodeJS
                                <span>70%</span>
                            </p>
                            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                                <div className="absolute top-0 left-0 h-full w-[70%] rounded-l-md bg-[#20c997]"></div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p  className="flex justify-between">
                                TailwindCSS
                                <span>90%</span>
                            </p>
                            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                                <div className="absolute top-0 left-0 h-full w-[90%] rounded-l-md bg-[#20c997]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Resume;
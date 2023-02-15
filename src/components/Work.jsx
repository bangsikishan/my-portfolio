import { useState } from "react";

const Work = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(!showPopup);
    }

    return (
        <div id="work" className="py-24 bg-[#212529]">
            <h1 className="w-fit mx-auto text-2xl font-semibold text-white border-b-2 border-[#20c997] md:text-4xl">My Work</h1>
            <div className="px-6 md:px-20 my-8 md:my-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            Portfolio Website
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">React JS</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src="https://images.pexels.com/photos/34407/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            YouTube Clone
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">React JS</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            Weather App
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">React JS</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            Todo App
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">Laravel</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            Workout Tracker
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">MERN</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            MERN ChatGPT
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">MERN</p>
                    </div>
                </div>
            </div>

            {/* <div className="w-full h-full fixed top-0 left-0 z-10 overflow-hidden bg-[#212529]">
                <div className="w-4/6 mx-auto rounded-lg bg-[#343a40]">
                    aaa
                </div>
            </div> */}
        </div>
    );
}
 
export default Work;
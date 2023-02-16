import { ImDownload2 } from 'react-icons/im';

import ResumeItem from './ResumeItem';

import education from '../assets/education-resume.json';
import experience from '../assets/experience-resume.json';


const Resume = () => {
    return (
        <div id="resume" className="py-24 bg-[#343a40]">
            <h1 className="w-fit mx-auto text-2xl font-semibold text-white border-b-2 border-[#20c997] md:text-4xl">Resume</h1>
            <div className="md:px-20 my-8 md:my-16 grid lg:grid-cols-2">
                <div className="my-5 px-10 py-6 space-y-8">
                    <h1 className="my-3 text-2xl font-semibold text-white">My Education</h1>
                    {education.map((e, id) => 
                        <ResumeItem key={id} 
                            timeline={e.timeline} 
                            education={e.education} 
                            institution={e.institution} 
                            description={e.description} 
                        />
                    )}
                </div>

                <div className="my-5 px-10 py-6 space-y-8">
                    <h1 className="my-3 text-2xl font-semibold text-white">My Experience</h1>
                    {experience.map((e, id) => 
                        <ResumeItem key={id} 
                            timeline={e.timeline} 
                            education={e.education} 
                            institution={e.institution} 
                            description={e.description} 
                        />
                    )}
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
                            <p className="flex justify-between">
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
            <a className="flex items-center mx-auto py-3 px-8 w-fit text-gray-500 border-2 border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition duration-500 ease-in-out" href="#" download>
                Download CV
                <ImDownload2 className="ml-2" />
            </a>
        </div>
    );
}
 
export default Resume;
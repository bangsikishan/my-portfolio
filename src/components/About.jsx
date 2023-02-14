const About = () => {
    return (
        <div id="about-me" className="py-24 px-12 md:px-28 bg-[#212529]">
            <h1 className="w-fit mx-auto text-2xl font-semibold text-white border-b-2 border-[#20c997] md:text-4xl">Know Me More</h1>
            <div className="my-8 md:my-16 text-center md:text-left">
                <h1 className="text-xl font-semibold text-white md:text-2xl">I'm <span className="text-[#20c997]">Kishan Bangsi Magar,</span> a Web Developer</h1>
                <p className="py-5 leading-7 text-gray-400 md:w-3/4">
                    I am a student with a passion for web development. I am driven by the endless possibilities and opportunities 
                    that the digital world provides, and I am constantly seeking to expand my knowledge and skills in this field. 
                    My goal is to use my passion and skills to build beautiful, user-friendly, and functional websites that enhance 
                    the user experience. In my free time, I enjoy exploring new technologies and finding creative solutions to 
                    challenging problems. I am eager to learn and grow as a web developer, and I am always looking for new and 
                    exciting projects to work on. <br /><br />
                    
                    If you're looking for a talented and motivated web developer, you've come to the right place!
                </p>
            </div>
            <div className="grid md:grid-cols-3">
                <div className="py-10 md:py-6">
                    <h1 className="text-gray-500 text-5xl font-semibold text-center">1+</h1>
                    <p className="text-gray-200 text-center mt-4">Years Experience</p>
                </div>
                <div className="py-10 md:py-6 md:border-r md:border-l border-gray-500">
                    <h1 className="text-gray-500 text-5xl font-semibold text-center">10+</h1>
                    <p className="text-gray-200 text-center mt-4">Projects Done</p>
                </div>
                <div className="py-10 md:py-6">
                    <h1 className="text-gray-500 text-5xl font-semibold text-center">3+</h1>
                    <p className="text-gray-200 text-center mt-4">Programming Learned</p>
                </div>
            </div>
        </div>
    );
}
 
export default About;
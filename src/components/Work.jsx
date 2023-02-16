import work from '../assets/work.json';

const Work = () => {
    const handleClick = (link) => {
        window.open(link);
    }

    return (
        <div id="work" className="py-24 bg-[#212529]">
            <h1 className="w-fit mx-auto text-2xl font-semibold text-white border-b-2 border-[#20c997] md:text-4xl">My Work</h1>
            <div className="px-6 md:px-20 my-8 md:my-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {work.map((w, id) => (
                <div key={id} onClick={() => handleClick(w.link)} className="relative flex items-center justify-center h-auto w-full cursor-pointer rounded-lg overflow-hidden group border border-gray-700">
                    <img className="group-hover:opacity-40 group-hover:blur-[1px] group-hover:scale-105 transition ease-in-out duration-500" src={w.image} alt="bg" />
                    <div className="hidden group-hover:block absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]">
                        <h3 className="text-xl font-bold text-white tracking-wider text-center">
                            {w.title}
                        </h3>
                        <p className="pb-4 pt-2 text-white text-center">{w.technology}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
 
export default Work;
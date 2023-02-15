const ResumeItem = ({ timeline, education, institution, description }) => {
    return (
        <div className="py-6 px-6 rounded-md bg-[#111418]">
            <span className="px-1 py-1 rounded-md text-sm text-white bg-[#20c997]">{timeline}</span>
            <h1 className="mt-4 mb-2 text-xl font-semibold text-white">{education}</h1>
            <p className="mb-4 text-[#20c997]">{institution}</p>
            <p className="text-gray-400">
                {description}
            </p>
        </div>
    );
}
 
export default ResumeItem;
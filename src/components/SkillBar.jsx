const SkillBar = ({ skill, percentage }) => {
    return (
        <div className="space-y-3">
            <p className="flex justify-between">
                {skill}
                <span>{percentage}</span>
            </p>
            <div className="relative w-full h-2 rounded-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-md before:content-[''] before:bg-[#111418]">
                <div className={`absolute top-0 left-0 h-full w-[${percentage}] rounded-l-md bg-[#20c997]`}></div>
            </div>
        </div>
    );
}
 
export default SkillBar;
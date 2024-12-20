import React from "react";

interface MentorSkillsProps {
	skills: string[];
}

const MentorSkills: React.FC<MentorSkillsProps> = ({ skills }) => {
	return (
		<div className="bg-slate-200 p-5 rounded-lg shadow-md">
			<h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
				Topik Keahlian
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
				{skills.map((skill, index) => (
					<p
						key={index}
						className="text-sm md:text-base lg:text-lg text-gray-700 mb-2 bg-sky-200/80 rounded-full w-full text-center shadow-lg py-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
					>
						{skill}
					</p>
				))}
			</div>
		</div>
	);
};

export default MentorSkills;

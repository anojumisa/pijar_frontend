import React, { useState } from "react";
import { GraduationCap } from "lucide-react";

interface Education {
	school_name: string;
	year: string;
	major: string;
	description: string | string[];
}

interface MentorEducationProps {
	education: Education[];
}

const MentorEducation: React.FC<MentorEducationProps> = ({ education }) => {
	const [showEducationContent, setShowEducationContent] = useState<{
		[key: number]: boolean;
	}>({});

	const toggleEducationContent = (index: number) => {
		setShowEducationContent((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	return (
		<div className="bg-slate-200 p-5 rounded-lg shadow-md">
			<h2 className="text-base md:text-lg lg:text-2xl font-semibold font-lilita mb-4">
				Riwayat Pendidikan
			</h2>
			{education.map((edu, index) => (
				<div key={index} className="mb-4">
					<div className="flex justify-between">
						<h3 className="font-bold flex items-center gap-1 text-xs md:text-sm lg:text-base">
							<GraduationCap className="w-4 h-4" /> {edu.school_name}
						</h3>
						<p className="text-xs md:text-sm lg:text-lg text-gray-600 italic">
							{edu.year}
						</p>
					</div>
					<p className="italic text-gray-700 text-xs md:text-sm lg:text-base">
						{edu.major}
					</p>
					{showEducationContent[index] ? (
						<p className="text-gray-900 mt-2 font-firaSans text-xs md:text-sm lg:text-lg ">
							{typeof edu.description === "string"
								? edu.description
								: edu.description.join(", ")}
						</p>
					) : null}
					<button
						className="font-openSans mt-[0.3rem] md:mt-[1rem] lg:mt-[1.5rem]"
						onClick={() => toggleEducationContent(index)}
						style={{
							background: "transparent",
							border: "none",
							color: "#007bff",
							cursor: "pointer",
						}}
					>
						{showEducationContent[index] ? "Sembunyikan " : "Lihat Detail"}
					</button>
				</div>
			))}
		</div>
	);
};

export default MentorEducation;

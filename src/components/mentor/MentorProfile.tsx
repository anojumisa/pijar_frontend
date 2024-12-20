import React from "react";
import { Briefcase } from "lucide-react";
import WavingHand from "@/app/animation/wavinghand/page";

interface MentorProfileProps {
	mentor: {
		name: string;
		image_profile: string;
		image_baground: string;
		job: string;
		company_now: string;
	};
}

const MentorProfile: React.FC<MentorProfileProps> = ({ mentor }) => {
	return (
		<div
			className="p-[0.5rem] md:p-[2rem] lg:p-[6rem] h-[8rem] md:h-[12rem] lg:h-[16rem]"
			style={{
				backgroundImage: `url(${mentor.image_baground})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				color: "white",
				borderRadius: "0.5rem",
				position: "relative",
			}}
		>
			<div
				className="absolute w-[6rem] md:w-[9rem] lg:w-[12rem] h-[6rem] md:h-[9rem] lg:h-[12rem] bottom-[-2.5rem] md:bottom-[-3.5rem] lg:bottom-[-5rem] shadow-lg "
				style={{
					borderRadius: "50%",
					border: "0.25rem solid white",
					backgroundImage: `url(${mentor.image_profile})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></div>

			<div className="absolute p-[1.25rem] md:[1.5rem] lg:p-[2rem] ml-[7rem] md:ml-[12rem] lg:ml-[16rem] absolute bottom-[-1.75rem] md:bottom-[-2rem] lg:bottom-[-3.5rem] w-4/5 max-w-[70%] h- max-h-[10rem] bg-slate-200 p-2 rounded-2xl font-bold shadow-md">
				<div className="flex gap-2">
					<div className="grid">
						<h1 className="text-blue-600 text-base md:text-lg lg:text-3xl font-caveat ">
							{mentor.name} <WavingHand />
						</h1>
						<p className="text-black text-xs md:text-sm lg:text-base flex items-center gap-1">
							<Briefcase className="w-4 h-4" /> {mentor.job} || di{" "}
							{mentor.company_now}
						</p>
					</div>

					<button
						className="absolute p-[0.3rem] md:p-[0.5rem] lg:p-[0.9rem] text-[0.45rem] md:text-[0.5rem] lg:text-[0.9rem] shadow-md rounded-full"
						style={{
							right: "1rem",
							background: "#e53e3e",
							color: "white",
							border: "none",
							cursor: "pointer",
						}}
					>
						FOLLOW ME
					</button>
				</div>
			</div>
		</div>
	);
};

export default MentorProfile;

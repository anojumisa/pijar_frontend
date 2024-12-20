"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Loading from "@/app/animation/loading/page";
import MentorProfile from "@/components/mentor/MentorProfile";
import MentorBio from "@/components/mentor/MentorBio";
import MentorExperience from "@/components/mentor/MentorExperience";
import MentorEducation from "@/components/mentor/MentorEducation";
import MentorSkills from "@/components/mentor/MentorSkills";
import MentorSchedule from "@/components/mentor/MentorSchedule";

interface Experience {
	company_name: string;
	occupation: string;
	start_date: string;
	end_date: string;
}

interface Expertise {
	category: string;
	expertise: string;
}

interface Mentor {
	user_id: number;
	fullname: string;
	image_url: string;
	mentor_bio: string;
	mentor_experiences: Experience[];
	mentor_expertise: Expertise[];
	occupation: string;
}

export default function MentorsDetail() {
	const searchParams = useSearchParams();
	const id = searchParams.get("id");
	const [mentor, setMentor] = useState<Mentor | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchDetailMentor() {
			if (!id) return;
			try {
				const mentorRes = await axios.get(`/api/mentors/${id}`);
				setMentor(mentorRes.data);
			} catch (error) {
				console.error("Error Fetch Mentor:", error);
				setError("Error loading mentor");
			} finally {
				setLoading(false);
			}
		}

		fetchDetailMentor();
	}, [id]);

	if (loading) return <Loading />;
	if (error) return <main>{error}</main>;
	if (!mentor) return <main>No Mentor data available.</main>;

	return (
		<div className="relative p-[1.5rem] md:p-[3rem] lg:p-[5rem] bg-blue-900">
			<MentorProfile
				mentor={{
					name: mentor.fullname,
					image_profile: mentor.image_url,
					image_baground: "", // Add background image if available
					job: mentor.occupation,
					company_now: "", // Add current company if available
				}}
			/>
			<MentorBio bio={mentor.mentor_bio} name={mentor.fullname} />
			<MentorExperience
				experience={mentor.mentor_experiences.map((exp) => ({
					company: exp.company_name,
					role: exp.occupation,
					date_year: `${exp.start_date} - ${exp.end_date}`,
					description: "", // Add description if available
					achievements: [], // Add achievements if available
				}))}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
				<MentorEducation education={[]} />{" "}
				{/* Add education data if available */}
				<MentorSkills
					skills={mentor.mentor_expertise.map((exp) => exp.expertise)}
				/>
			</div>
			<MentorSchedule mentorId={mentor.user_id} />
		</div>
	);
}

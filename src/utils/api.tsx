import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
	throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

// Function to fetch mentor schedule
export const fetchMentorSchedule = async (mentorId: number) => {
	try {
		const response = await axios.get(
			`${API_URL}/sessions/{user_id}`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		return response.data.schedule; 
	} catch (error) {
		console.error("Error fetching mentor schedule:", error);
		throw error;
	}
};

// Function to fetch mentor detail
export const fetchMentorDetails = async (id: number) => {
    try {
        const response = await axios.get(
            `${API_URL}/mentor_sessions/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.mentor;
    } catch (error) {
        console.error("Error fetching mentor detail:", error);
        throw error;
    }
};

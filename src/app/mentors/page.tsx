"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "@/app/animation/loading/page";

interface Mentor {
  user_id: number;
  fullname: string;
  image_url: string;
}

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleMentorClick = (id: number) => {
    router.push(`/mentors/details?id=${id}`);
  };

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get("/api/mentors");
        setMentors(response.data.mentors);
      } catch (error) {
        console.error("Error Fetch Mentors:", error);
        setError("Error loading mentors");
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (loading) return <Loading />;
  if (error) return <main>{error}</main>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Mentors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.user_id}
            onClick={() => handleMentorClick(mentor.user_id)}
            className="border p-4 rounded-lg cursor-pointer text-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={mentor.image_url}
              alt={mentor.fullname}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="font-semibold">{mentor.fullname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
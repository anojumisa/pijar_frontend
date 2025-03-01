import React from "react";
import { Mentor } from "@/utils/interface/type";
import Link from "next/link";

interface MentorListProps {
  mentors: Mentor[];
}

const MentorList: React.FC<MentorListProps> = ({ mentors }) => (
  <div className="mt-10">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {mentors.map((mentor) => (
        <Link key={mentor.id} href={`/mentor/${mentor.id}`}>
          <div className="p-4 bg-white shadow rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex flex-col items-center">
              <img
                src={mentor.image_url || "https://via.placeholder.com/150"}
                alt={mentor.fullname}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="mt-2 font-bold text-stone-800 line-clamp-2">
                {mentor.fullname}
              </p>
              <p className="text-sm font-bold text-stone-800 line-clamp-2">{mentor.occupation}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default MentorList;

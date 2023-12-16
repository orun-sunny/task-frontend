"use client";

import { cards } from "@/constants";
import CourseCard from "./Card";
import { ICard } from "@/types/common";

const Courses = () => {
  return (
    <div className="h-screen mx-auto flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        {cards?.map((card: ICard) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
export default Courses;

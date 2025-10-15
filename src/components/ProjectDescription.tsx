import { useState } from "react";

type ProjectDescriptionProps = {
  text: string | undefined;
};

const ProjectDescription = ({ text }: ProjectDescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6 sm:mt-8 bg-white/40 border border-white/30 backdrop-blur-md rounded-2xl shadow-md p-4 sm:p-6 md:p-8 max-w-full mx-auto">
      <p
        className={`text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed sm:leading-7 md:leading-8 text-justify transition-all duration-500 ${
          expanded
            ? "max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent"
            : "line-clamp-6"
        }`}
      >
        {text}
      </p>

      <div className="flex justify-center mt-3 sm:mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm sm:text-base text-sky-700 hover:text-green-700 transition"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectDescription;

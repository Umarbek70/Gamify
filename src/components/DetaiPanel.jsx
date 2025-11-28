import { FaTimes } from "react-icons/fa";

const DetailPanel = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-[#1b1225] border-l border-purple-800 p-6 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-purple-200 text-xl font-semibold">
          {project.title}
        </h2>

        <button
          onClick={onClose}
          className="text-purple-300 hover:text-white"
        >
          <FaTimes size={20} />
        </button>
      </div>

      <p className="text-purple-400 text-sm">{project.description}</p>

      <div className="mt-6">
        <h3 className="text-purple-300 font-semibold">Stats</h3>

        <div className="mt-3 text-purple-400 text-sm space-y-1">
          <p>Tasks: {project.tasks}</p>
          <p>XP Reward: {project.xp}</p>
          <p>Category: {project.category}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPanel;

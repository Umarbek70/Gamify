const ProjectCard = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="bg-[#1d1528] border border-purple-800 rounded-xl p-4 cursor-pointer hover:bg-purple-900/30 hover:border-purple-500 transition"
    >
      <h3 className="text-purple-200 font-semibold text-lg">
        {project.title}
      </h3>

      <p className="text-purple-400 text-sm mt-1">
        {project.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-purple-300 text-xs">
          Tasks: {project.tasks}
        </span>

        <span className="text-purple-400 text-xs">
          XP: {project.xp}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;

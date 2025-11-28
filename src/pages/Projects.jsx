import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import DetailPanel from "../components/DetaiPanel";
import { fetchProjects } from "../features/projects/projectAPI";
import { selectProject } from "../features/projects/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { list, selected, loading } = useSelector((state) => state.projects);

  const [openPanel, setOpenPanel] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleSelect = (project) => {
    dispatch(selectProject(project));
    setOpenPanel(true);
  };

  return (
    <div className="w-full h-full p-6 text-purple-200">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      {loading && <p className="text-purple-400">Loading...</p>}
      {!loading && list.length === 0 && (
        <p className="text-purple-400">Hozircha project yo‘q.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((proj) => (
          <ProjectCard key={proj.id} project={proj} onSelect={handleSelect} />
        ))}
      </div>

      {openPanel && selected && (
        <DetailPanel project={selected} onClose={() => setOpenPanel(false)} />
      )}
    </div>
  );
};

export default Projects;

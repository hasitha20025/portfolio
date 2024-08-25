interface ProjectCardProps {
  projectName: string;
  date: string;
  links: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  date,
  links,
  description,
}) => {
  return (
    <div className="bg-gray-900 text-textPrimary p-6 rounded-lg shadow-lg ">
      <div className="flex justify-between items-center mb-2">
        <a href={links} className="" target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-bold text-textPrimary hover:text-textSecondary">
            {projectName}
          </h2>
        </a>
        <span className="text-textSecondary text-sm">{date}</span>
      </div>
      <p className="text-textSecondary text-sm">{description}</p>
    </div>
  );
};

export default ProjectCard;

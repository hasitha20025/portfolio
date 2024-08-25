interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  dates,
  description,
}) => {
  return (
    <div className="bg-gray-900 p-4  text-white shadow-md mb-4 rounded-lg hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-400">{company}</p>
      <p className="text-sm text-gray-400">{dates}</p>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

export default ExperienceCard;

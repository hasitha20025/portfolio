import ProjectCard from "./projectCard";
import StatsCard from "./statsCard";

export default function Projects() {
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary">
        <span className="text-lightBlue">W</span>hy did you{" "}
        <span className="text-lightBlue">H</span>ire me for your{" "}
        <span className="text-lightBlue">N</span>ext Project
        <span className="text-lightBlue">?</span>
      </p>

      <StatsCard />
      <div className="flex flex-col lg:flex-row mt-5">
        <div className="container p-4 my-5 mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 ">
            <ProjectCard
              projectName="Travel_SriLanka"
              date="January 2022"
              links="https://github.com/hasitha20025/Travel_SriLanka"
              description="Best traveling place in the Sri Lanka Blog web site."
            />
            <ProjectCard
              projectName="XENZER"
              date="February 2023"
              links="https://github.com/hasitha20025/XENZER"
              description=" Hotel management web application."
            />
            <ProjectCard
              projectName="APMS-System"
              date="December 2023"
              links="https://github.com/hasitha20025/APMS-System"
              description=" Student Progress Management System."
            />
            <ProjectCard
              projectName="UniConnect"
              date="January 2024"
              links="https://github.com/hasitha20025/UniConnect"
              description="UniConnect, Our innovative University Event Management and Product Promotion web application revolutionizes event organization and product showcasing within our university community."
            />
          </div>
        </div>
      </div>
    </>
  );
}

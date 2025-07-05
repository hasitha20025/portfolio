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
              projectName="E-Garage"
              date="2025"
              links="https://www.egarage.lk/garage/home"
              description="Modern garage management web application"
              showPreview={true}
            />

            <ProjectCard
              projectName="Wall Damage Analysis and Cost estimation project"
              date="July 2025"
              links="https://wall-damage-analysis-and-cost-estim.vercel.app/"
              description="Professional wall damage detection and cost estimation powered by advanced AI technology"
              githubRepo="https://github.com/hasitha20025/Wall-Damage-Analysis-and-Cost-estimation-project"
              showPreview={true}
            />
            <ProjectCard
              projectName="AI chat web app"
              date="July 2025"
              links="https://ai-chat-web-app.vercel.app/"
              description=" Your intelligent AI assistant powered by Google Gemini. Ask questions, get help, or just chat!"
              githubRepo="https://github.com/hasitha20025/AI-chat-web-app.git"
              showPreview={true}
            />

          </div>
        </div>
      </div>
    </>
  );
}

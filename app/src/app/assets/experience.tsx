import ExperienceCard from "./experienceCard";

export default function Experience() {
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary mt-5">
        <span className="text-lightBlue">E</span>xperience
      </p>
      <ExperienceCard
        title="Front-End Developer"
        company="Infact Solutions (PVT) Ltd"
        dates="April/22/2024 - Oct/22/2024"
        description="I work as a Front-End Developer at Infact Solutions (PVT) Ltd, crafting efficient and dynamic web solutions."
      />
    </>
  );
}

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
        dates="April 2024 - Oct 2024"
        description="Developed responsive and user-friendly web applications using modern frontend technologies including React, TypeScript, and Tailwind CSS. Collaborated with cross-functional teams to deliver high-quality solutions, implemented pixel-perfect UI designs, and optimized application performance for enhanced user experience. Worked on multiple client projects, ensuring code quality and maintaining best practices in web development."
      />
    </>
  );
}

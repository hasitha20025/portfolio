import ExperienceCard from "./experienceCard";

export default function Education() {
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary mt-5">
        <span className="text-lightBlue">E</span>ducation
      </p>

      <ExperienceCard
        title="Uva Wellassa University of Sri Lanka"
        company="Information and communications technology"
        dates="2022-2025"
        description="I am an graduate student at Uva Wellassa University of Sri Lanka."
      />
      <ExperienceCard
        title="University of Moratuwa"
        company="Certificate in python for beginners"
        dates="April/12/2023"
        description="I have completed that course."
      />
      <ExperienceCard
        title="Loku Business"
        company="How to make profits in stock market investment"
        dates="May/30/2024"
        description="I have completed that course."
      />
    </>
  );
}

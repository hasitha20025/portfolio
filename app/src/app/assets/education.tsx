import ExperienceCard from "./experienceCard";

export default function Education() {
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary mt-5">
        <span className="text-lightBlue">E</span>ducation
      </p>

      <ExperienceCard
        title="Uva Wellassa University of Sri Lanka"
        company="Bachelor of Information and Communication Technology degree"
        dates="2022-2025"
        description="Pursuing a comprehensive Bachelor's degree in Information and Communication Technology, focusing on software development, web technologies, database management, and system analysis. Gained hands-on experience in programming languages including Java, Python, and JavaScript, while developing strong problem-solving and analytical skills essential for modern ICT solutions."
      />
      <ExperienceCard
        title="University of Moratuwa"
        company="Certificate in python for beginners"
        dates="April 2023"
        description="Successfully completed a comprehensive Python programming course covering fundamental concepts including data structures, algorithms, object-oriented programming, and practical application development. Gained proficiency in Python syntax, libraries, and best practices for writing clean, efficient code."
      />
      <ExperienceCard
        title="Loku Business"
        company="How to make profits in stock market investment"
        dates="May 2024"
        description="Completed an intensive course on stock market investment strategies, learning fundamental and technical analysis, risk management, portfolio diversification, and market psychology. Acquired knowledge of investment principles, financial planning, and decision-making skills for sustainable wealth building through strategic market investments."
      />
    </>
  ); 
}

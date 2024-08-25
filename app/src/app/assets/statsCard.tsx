export default function StatsCard() {
  return (
    <div className="bg-lightBlue text-textPrimary rounded-md p-6 flex flex-col sm:flex-row gap-10 items-center justify-center mx-auto w-full max-w-screen-sm sm:max-w-none">
      <div className="text-center mb-4 sm:mb-0">
        <p className="text-4xl font-bold text-textPrimary">2</p>
        <p className="text-xl mt-2 text-textPrimary">Happy Clients</p>
      </div>
      <div className="text-center mb-4 sm:mb-0">
        <p className="text-4xl font-bold text-textPrimary">4</p>
        <p className="text-xl mt-2 text-textPrimary">Projects Completed</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-textPrimary">1</p>
        <p className="text-xl mt-2 text-textPrimary">Years of Experience</p>
      </div>
    </div>
  );
}

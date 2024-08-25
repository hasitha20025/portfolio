export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50 flex flex-row md:flex-row items-center justify-between gap-4 md:gap-10 text-textPrimary py-5 px-6 md:px-10 shadow-lg bg-primary">
      <p className="cursor-pointer text-2xl">
        <a href="#">
          <span className="font-bold text-lightBlue">H</span>
          <span className="font-normal text-textPrimary">asitha</span>
          <span className="font-bold ml-1 text-lightBlue">D</span>
          <span className="font-normal text-textPrimary">hananjaya</span>
        </a>
      </p>
      <div className="cursor-pointer px-4 py-2 bg-lightBlue text-primary font-bold rounded-lg hover:bg-hoverPrimary transition duration-300">
        <a target="_blank" href="https://www.linkedin.com/in/hasitha-dhananjaya-337baa226/">Hire Me!</a>
      </div>
    </div>
  );
}

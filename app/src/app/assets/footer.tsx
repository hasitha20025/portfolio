export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-primary shadow-lg">
      <hr className="border-textSecondary" />
      <p className="text-center mt-3 text-textSecondary pb-5">
        © All Rights Reserved {currentYear} by Hasitha Dhananjaya
      </p>
    </div>
  );
}

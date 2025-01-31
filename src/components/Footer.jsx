const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`mt-36 text-center text-sm ${
        darkMode ? "text-gray-400" : "text-gray-500"
      }`}
    >
      <div className="flex flex-wrap justify-center space-x-4 text-xs">
        <a href="#">Meta</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Jobs</a>
        <a href="#">Help</a>
        <a href="#">API</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Locations</a>
        <a href="#">Instagram Lite</a>
        <a href="#">Threads</a>
        <a href="#">Contact Uploading & Non-Users</a>
        <a href="#">Meta Verified</a>
      </div>
      <div className="mt-4">&copy; 2025 Instagram from Meta</div>
    </footer>
  );
};

export default Footer;

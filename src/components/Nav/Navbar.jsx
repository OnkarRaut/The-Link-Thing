import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar flex justify-between items-center">
        {/* until I make a logo  */}
        <span>The Link Thing!</span>
        <div className="flex items-center">
          <a href="#" className="m-2 nav-link">
            Log In
          </a>
          <a
            href="#"
            className="rounded-md bg-gray-300 tracking-wide px-3 m-2 p-1 hover:bg-gray-200 cursor-pointer"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

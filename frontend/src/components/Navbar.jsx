import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center p-5 bg-white shadow-sm">
      <div className="flex gap-6">
        <Link to="/services" className="px-4 py-2 bg-gray-800 text-white rounded-full">
          Our services
        </Link>

        <Link to="/about" className="px-4 py-2 bg-gray-800 text-white rounded-full">
          About us
        </Link>

        <Link to="/work" className="px-4 py-2 bg-gray-800 text-white rounded-full">
          Work
        </Link>

        <Link to="/careers" className="px-4 py-2 bg-gray-800 text-white rounded-full">
          Careers
        </Link>

        <Link to="/contact" className="px-4 py-2 bg-gray-800 text-white rounded-full">
          Contact
        </Link>
      </div>
    </div>
  );
}

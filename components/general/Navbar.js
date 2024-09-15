import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black w-full max-w-[1200px] mx-auto fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-lg px-4 sm:px-6">
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-xl font-bold">
            SafetyOnRoads
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="hidden sm:block">
            <div className="flex">
              <Link
                href="/upload"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Upload Video
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex">
              <Link
                href="/collection"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Videos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

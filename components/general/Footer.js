import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black w-full max-w-[1200px] mx-auto rounded-lg shadow-lg px-4 sm:px-6 py-8 my-2">
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-xl font-bold">
            SafetyOnRoads
          </Link>
        </div>
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link
              href="/upload"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Upload a video
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 text-center pt-8">
        &copy; <span id="year">{new Date().getFullYear()}</span> SafetyOnRoads.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

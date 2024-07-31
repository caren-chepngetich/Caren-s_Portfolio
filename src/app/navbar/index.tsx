import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="cursor-pointer text-white hover:text-gray-400 px-4 py-2">Home</span>
                </Link>
                <Link href="/about">
                    <span className="cursor-pointer text-white hover:text-gray-400 px-4 py-2">About</span>
                </Link>
                <Link href="/skills">
                    <span className="cursor-pointer text-white hover:text-gray-400 px-4 py-2">Skills</span>
                </Link>
                <Link href="/expertise">
                    <span className="cursor-pointer text-white hover:text-gray-400 px-4 py-2">Expertise</span>
                </Link>
                <Link href="/projects">
                    <span className="cursor-pointer text-white hover:text-gray-400 px-4 py-2">Projects</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;


export default function NavBar() {
    return (
        <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-8">
            <a>
                <img src="logo.png" alt="Logo" />
            </a>
            <div className="space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/about" className="hover:underline">About</a>
                <a href="/contact" className="hover:underline">Contact</a>
            </div>
        </nav>
    );
}
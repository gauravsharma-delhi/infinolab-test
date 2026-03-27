import { useState } from "react";

export default function Header({ contact }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* LOGO */}
                <div className="text-xl font-bold text-blue-600">
                    My Website
                </div>

                {/* DESKTOP MENU */}
                <nav className="hidden md:flex items-center gap-6">
                    <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                        Home
                    </a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                        Contact
                    </a>
                </nav>

                {/* CONTACT INFO (DESKTOP) */}
                <div className="hidden md:block text-sm text-gray-600">
                    <div>📧 {contact?.email || "N/A"}</div>
                    <div>📱 {contact?.mobile || "N/A"}</div>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden bg-gray-100 px-4 py-3 space-y-3">
                    <a href="/" className="block text-gray-700">
                        Home
                    </a>
                    <a href="/contact" className="block text-gray-700">
                        Contact
                    </a>

                    <div className="border-t pt-2 text-sm text-gray-600">
                        <div>📧 {contact?.email || "N/A"}</div>
                        <div>📱 {contact?.mobile || "N/A"}</div>
                    </div>
                </div>
            )}
        </header>
    );
}
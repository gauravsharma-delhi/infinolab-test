import { useState } from "react";

export default function Header({ title }) {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow px-4 md:px-6 py-3 flex items-center justify-between">

            {/* LEFT: PAGE TITLE */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {title}
            </h2>

            {/* RIGHT: PROFILE */}
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                    <span className="font-medium text-gray-700">Admin</span>
                    <span>▼</span>
                </button>

                {/* DROPDOWN */}
                {open && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Profile
                        </a>
                        <a
                            href="/logout"
                            className="block px-4 py-2 text-red-500 hover:bg-gray-100"
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
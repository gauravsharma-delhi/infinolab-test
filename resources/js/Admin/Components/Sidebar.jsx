import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const { url } = usePage(); // get current route

    const menu = [
        {
            name: "Dashboard",
            href: "/admin/dashboard",
            icon: "📊",
        },
        {
            name: "Contact Details",
            href: "/admin/contact-settings",
            icon: "📞",
        },
        {
            name: "Enquiries",
            href: "/admin/enquiries",
            icon: "📩",
        },
    ];

    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white hidden md:block">

            {/* LOGO */}
            <div className="text-2xl font-bold px-6 py-4 border-b border-gray-700">
                Admin Panel
            </div>

            {/* MENU */}
            <nav className="mt-4">
                {menu.map((item, index) => {
                    const isActive = url.startsWith(item.href);

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            className={`flex items-center gap-3 px-6 py-3 text-sm transition 
                                ${isActive 
                                    ? "bg-blue-600 text-white" 
                                    : "text-gray-300 hover:bg-gray-800"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
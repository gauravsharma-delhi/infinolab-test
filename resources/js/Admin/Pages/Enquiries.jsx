import AdminLayout from "../Layouts/AdminLayout";

export default function Enquiries({ enquiries }) {
    return (
        <AdminLayout title="Enquiries">

            <div className="p-4 md:p-6">

                <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6">

                    {/* TITLE */}
                    <h2 className="text-xl font-semibold mb-4">
                        All Enquiries
                    </h2>

                    {/* TABLE */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">

                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Name</th>
                                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Email</th>
                                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Mobile</th>
                                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Description</th>
                                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {enquiries.length > 0 ? (
                                    enquiries.map((e) => (
                                        <tr key={e.id} className="border-t hover:bg-gray-50 transition">
                                            <td className="px-4 py-3">{e.name}</td>
                                            <td className="px-4 py-3">{e.email}</td>
                                            <td className="px-4 py-3">{e.mobile}</td>
                                            <td className="px-4 py-3">{e.description}</td>
                                            <td className="px-4 py-3 text-sm text-gray-500">
                                                {new Date(e.created_at).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6 text-gray-500">
                                            No enquiries found
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}
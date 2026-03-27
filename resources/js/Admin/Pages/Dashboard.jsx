import AdminLayout from "../Layouts/AdminLayout";

export default function Dashboard({ total, today }) {
    return (
        <AdminLayout title="Dashboard">

            <div className="p-4 md:p-6">

                {/* PAGE TITLE */}
                <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

                {/* CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* TOTAL ENQUIRIES */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500">Total Enquiries</p>
                                <h2 className="text-3xl font-bold text-blue-600">
                                    {total}
                                </h2>
                            </div>
                            <div className="text-4xl">📊</div>
                        </div>
                    </div>

                    {/* TODAY ENQUIRIES */}
                    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500">Today's Enquiries</p>
                                <h2 className="text-3xl font-bold text-green-600">
                                    {today}
                                </h2>
                            </div>
                            <div className="text-4xl">📅</div>
                        </div>
                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}
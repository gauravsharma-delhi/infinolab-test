import { useForm } from "@inertiajs/react";
import AdminLayout from "../Layouts/AdminLayout";

export default function ContactSettings({ data }) {

    const { data: formData, setData, post, processing, errors } = useForm({
        email: data?.email || '',
        mobile: data?.mobile || ''
    });

    const submit = (e) => {
        e.preventDefault();

        post('/admin/contact-settings', {
            onSuccess: () => {
                alert("Contact details updated successfully!");
            }
        });
    };

    return (
        <AdminLayout title="Contact Settings">

            <div className="p-4 md:p-6">

                <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-8">

                    <h2 className="text-xl font-semibold mb-6">
                        Update Contact Details
                    </h2>

                    <form onSubmit={submit} className="space-y-5">

                        {/* EMAIL */}
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>

                        {/* MOBILE */}
                        <div>
                            <label className="block mb-1 font-medium">Mobile</label>
                            <input
                                type="text"
                                value={formData.mobile}
                                onChange={(e) => setData('mobile', e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter mobile number"
                            />
                            {errors.mobile && (
                                <p className="text-red-500 text-sm">{errors.mobile}</p>
                            )}
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {processing ? "Saving..." : "Save Changes"}
                        </button>

                    </form>

                </div>

            </div>

        </AdminLayout>
    );
}
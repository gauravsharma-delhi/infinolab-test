import { useForm } from "@inertiajs/react";
import FrontLayout from "../Layouts/FrontLayout";

export default function Contact(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        mobile: '',
        description: ''
    });

    const submit = (e) => {
        e.preventDefault();

        post('/contact-submit', {
            onSuccess: () => {
                reset();
                alert("Enquiry submitted successfully!");
            }
        });
    };

    return (
        <FrontLayout contact={props.contact}>
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">

                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                        Contact Us
                    </h2>

                    <form onSubmit={submit} className="space-y-5">

                        {/* NAME */}
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* MOBILE */}
                        <div>
                            <label className="block mb-1 font-medium">Mobile</label>
                            <input
                                type="text"
                                value={data.mobile}
                                onChange={e => setData('mobile', e.target.value)}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Enter your mobile number"
                            />
                            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                        </div>

                        {/* DESCRIPTION */}
                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                rows="4"
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Write your message..."
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                        >
                            {processing ? "Submitting..." : "Submit Enquiry"}
                        </button>

                    </form>
                </div>
            </div>
        </FrontLayout>
    );
}
import FrontLayout from "../Layouts/FrontLayout";

export default function Home(props) {
    return (
        <FrontLayout contact={props.contact}>
            
            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        We provide high-quality services to grow your business
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
                    
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Fast Service</h3>
                        <p className="text-gray-600">
                            We deliver quick and efficient solutions for your needs.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">Secure System</h3>
                        <p className="text-gray-600">
                            Your data is always safe with our secure infrastructure.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">
                            Our team is available anytime to help you.
                        </p>
                    </div>

                </div>
            </section>

            {/* CONTACT INFO SECTION */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Reach out to us anytime using the details below.
                    </p>

                    <div className="bg-white shadow rounded-2xl p-6">
                        <p className="text-lg">
                            📧 Email:{" "}
                            <span className="font-semibold">
                                {props.contact?.email || "Not Available"}
                            </span>
                        </p>

                        <p className="text-lg mt-2">
                            📱 Mobile:{" "}
                            <span className="font-semibold">
                                {props.contact?.mobile || "Not Available"}
                            </span>
                        </p>
                    </div>
                </div>
            </section>

        </FrontLayout>
    );
}
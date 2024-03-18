import { Button } from "@/components/ui/button"
import { FaBeer } from "react-icons/fa";

export default function Home() {
    return (
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            {/* Main Text Content */}
            <section className="text-center my-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies magna in magna varius, ac posuere est volutpat.</p>
            </section>

            {/* Features Section */}
            <section className="bg-white py-12 px-6 my-8">
                <h2 className="text-2xl font-bold mb-4">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel semper est.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel semper est.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Feature 3</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel semper est.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="bg-white py-12 px-6 my-8">
                <h2 className="text-2xl font-bold mb-4">Pricing Plans</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Pricing Plan Cards */}
                    <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Basic Plan</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
                    </div>
                    <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Pro Plan</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <Button variant="outline">Button</Button>

                    </div>
                    <div className="bg-sky-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Enterprise Plan</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>
                            <FaBeer className="mr-2 h-4 w-4" /> Another Button
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white py-12 px-6 my-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form className="flex flex-col space-y-4">
                    <input type="text" placeholder="Name" className="px-4 py-2 border border-gray-300 rounded" />
                    <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded" />
                    <textarea rows={4} placeholder="Message" className="px-4 py-2 border border-gray-300 rounded"></textarea>
                    <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Submit</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="text-center bg-sky-900 text-white p-4 mt-auto w-full">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

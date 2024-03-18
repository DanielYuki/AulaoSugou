export default function About() {
    return (
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            <section className="text-center my-8">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies magna in magna varius, ac posuere est volutpat.</p>
            </section>

            <section className="bg-white py-12 px-6 my-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor tincidunt ligula, eget condimentum sapien mattis eu.</p>
            </section>

            <section className="bg-white py-12 px-6 my-8">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Michael Johnson</h3>
                        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>

            <footer className="text-center bg-sky-900 text-white p-4 mt-auto w-full">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}

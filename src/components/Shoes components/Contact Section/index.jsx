const index = () => {
  return (
    // <!-- Contact Section -->
    <div className="container mx-auto mt-12 p-2">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* <!-- Contact Form --> */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <form action="#" method="post">
                    <div className="mb-4">
                        <label for="name" className="block text-sm font-semibold text-gray-600">Name</label>
                        <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-sm font-semibold text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label for="message" className="block text-sm font-semibold text-gray-600">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded-md"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-full">Send Message</button>
                </form>
            </div>
            {/* <!-- Contact Information --> */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p><strong>Email:</strong> info@shoehaven.com</p>
                <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p><strong>Address:</strong> 789 Shoe Lane, Soleville</p>
            </div>
        </div>
    </div>
  )
}
export default index
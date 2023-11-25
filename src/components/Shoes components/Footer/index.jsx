const index = () => {
  return (
    // <!-- Footer -->
    <footer className="bg-gray-900 text-white py-8 mt-8 p-2 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- About Us --> */}
            <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-gray-500">FashionHub is your one-stop destination for the latest fashion trends and high-quality shoes.</p>
            </div>
            {/* <!-- Quick Links --> */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-500 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white">Men's</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white">Women's</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white">Contact</a></li>
                </ul>
            </div>
            {/* <!-- Social Media Links --> */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <ul className="space-y-2"> {/*d-flex space-x-4*/}
                    <li><a href="#" className="text-gray-500 hover:text-white"><i className="fab fa-facebook"></i>Facebook</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white"><i className="fab fa-twitter"></i>Twitter</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white"><i className="fab fa-instagram"></i>Instagram</a></li>
                    <li><a href="#" className="text-gray-500 hover:text-white"><i className="fab fa-youtube"></i>YouTube</a></li>
                </ul>
            </div>
            {/* <!-- Contact Information --> */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-500"><strong>Email:</strong> info@fashionhub.com</p>
                <p className="text-gray-500"><strong>Phone:</strong> +1 (123) 456-7890</p>
                <p className="text-gray-500"><strong>Address:</strong> 789 Fashion Street, Trendville</p>
            </div>
        </div>

        {/* <!-- Bottom Footer --> */}
        <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-center text-gray-500">&copy; 2023 FashionHub. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default index
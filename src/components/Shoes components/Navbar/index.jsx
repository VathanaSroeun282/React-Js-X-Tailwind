var shoes_logo = "https://static.vecteezy.com/system/resources/previews/008/956/590/original/creative-abstract-black-silhouette-running-shoe-design-logo-design-template-free-vector.jpg"

const index = () => {
  return (
    // Navbar
    <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-lg font-semibold flex items-center"><img src={shoes_logo} alt="Shoes Logo" className="w-10 mx-2 rounded-full"/><span>ShoeHaven</span></a>
            <div className="space-x-4">
                <a href="#" className="hover:text-gray-300">Home</a>
                <a href="#" className="hover:text-gray-300">Men's Shoes</a>
                <a href="#" className="hover:text-gray-300">Women's Shoes</a>
                <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default index
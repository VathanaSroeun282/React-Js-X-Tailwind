var Casual_Sneaker = "https://media.istockphoto.com/id/1089844082/photo/close-up-of-sporty-woman-tying-shoelace-while-kneeling-outdoor-in-background-bridge-fitness.jpg?s=1024x1024&w=is&k=20&c=DMpoNVhqIxUkyYkA6LuAe_dD0TIUqXGQPZaBa_Bhc7M=";
var Running_Shoes  = "https://media.istockphoto.com/id/623270836/photo/modern-sport-shoes.jpg?s=1024x1024&w=is&k=20&c=rw66sgvaTZG2f7b2fN-nM6CpGKecK3tqLKdkpkYqBn4=";
var High_Heel      = "https://media.istockphoto.com/id/949599044/photo/red-female-shoes-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=fhMMthPZcW1W2XNJiF_3_3jEn8deJkJ9Qa4KSRR1GM8=";
var School_Shoes   = "https://media.istockphoto.com/id/529065668/photo/step-into-the-future.jpg?s=1024x1024&w=is&k=20&c=jiqcTuiLZM7O_0zqa1Fy_KUGdfbBpnV4W_5GBUmmWX4=";

const index = () => {
  return (
    // Featured Products
    <div className="container mx-auto mt-12 p-2 bg-gray-500">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* // Product 1 */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={Casual_Sneaker} alt="Shoe" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">Casual Sneaker</h3>
                <p className="text-gray-600 mb-4">$59.99</p>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block">View Details</a>
            </div>
            {/* // Product 2 */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={Running_Shoes} alt="Shoe" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">Running Shoe</h3>
                <p className="text-gray-600 mb-4">$79.99</p>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block">View Details</a>
            </div>
            {/* // Product 3 */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={High_Heel} alt="Shoe" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">High Heels</h3>
                <p className="text-gray-600 mb-4">$89.99</p>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block">View Details</a>
            </div>
            {/* // Product 4 */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={School_Shoes} alt="Shoe" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">School Shoes</h3>
                <p className="text-gray-600 mb-4">$99.99</p>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block">View Details</a>
            </div>
        </div>
    </div>
  )
}

export default index
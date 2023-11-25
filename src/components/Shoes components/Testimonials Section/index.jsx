const index = () => {
  return (
    // <!-- Testimonials Section -->
    <div className="bg-gray-100 py-16 p-2">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <div className="bg-white p-6 rounded-md shadow-md">
                    <p className="mb-4">"The shoes I bought from ShoeHaven are not only stylish but also incredibly comfortable. Definitely coming back for more!"</p>
                    <p className="font-semibold">- Customer 1</p>
                </div>
                {/* <!-- Testimonial 2 --> */}
                <div className="bg-white p-6 rounded-md shadow-md">
                    <p className="mb-4">"Fantastic collection and excellent customer service. I found the perfect pair for every occasion."</p>
                    <p className="font-semibold">- Customer 2</p>
                </div>
                {/* <!-- Testimonial 3 --> */}
                <div className="bg-white p-6 rounded-md shadow-md">
                    <p className="mb-4">"ShoeHaven has become my go-to place for trendy and affordable shoes. Highly recommended!"</p>
                    <p className="font-semibold">- Customer 3</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index
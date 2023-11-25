var manShoes   = "https://media.istockphoto.com/id/1447589735/photo/close-up-shot-of-a-man-wearing-sneakers-with-beige-classic-pants.jpg?s=1024x1024&w=is&k=20&c=nCSBWWmhMmO0e5zZMEwZYgi0qUf3ul52WGlEkGomOiM=";
var womanShoes = "https://media.istockphoto.com/id/1176597377/photo/modern-businesswoman-working-woman-close-up-legs-walking-up-the-stairs-in-modern-city-in-rush.jpg?s=1024x1024&w=is&k=20&c=rxAevrU8cZsnfRnd3CWw6UV8I2uDZ0y9CkRm-cx1wr8=";
var Sneakers   = "https://media.istockphoto.com/id/1412967133/photo/womans-legs-in-blue-sneakers-outdoor-close-up-modern-sport-fashion-concept.jpg?s=1024x1024&w=is&k=20&c=1GHPTb-tlf3ZxJOEykIUmUON1THlSgGeCiB2r7s4vzg=";
var Boots      = "https://media.istockphoto.com/id/1297403815/photo/isolated-of-brown-shoe-lifestyle-on-white-background.jpg?s=1024x1024&w=is&k=20&c=4i3uDNnIc8FyJNeGs3DHoaBzGfNqsxFikOphWNqCe3A=";
const index = () => {
  return (
    <div className="container mx-auto mt-12 p-2">
        <h2 className="text-3xl font-semibold mb-8 text-center">Explore Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* // Category 1: Men's Shoes  */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={manShoes} alt="Men's Shoes" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">Men's Shoes</h3>
                <a href="#" className="text-blue-500">View Collection</a>
            </div>
            {/* // Category 2: Women's Shoes  */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={womanShoes} alt="Women's Shoes" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">Women's Shoes</h3>
                <a href="#" className="text-blue-500">View Collection</a>
            </div>
            {/* // Category 3: Sneakers  */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={Sneakers} alt="Sneakers" className="mb-4 rounded-md" />
                <h3 className="text-xl font-semibold mb-2 border-b-2">Sneakers</h3>
                <a href="#" className="text-blue-500">View Collection</a>
            </div>
            {/* // Category 4: Boots  */}
            <div className="bg-white p-8 rounded-md shadow-md">
                <img src={Boots} alt="Boots" className="mb-4 rounded-md " />
                <h3 className="text-xl font-semibold mb-2 border-b-2">Boots</h3>
                <a href="#" className="text-blue-500">View Collection</a>
            </div>
        </div>
    </div>
  )
}

export default index
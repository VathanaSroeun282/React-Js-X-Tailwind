// import Channelbar from './components/ChannelBar';
// import ContentContainer from './components/ContentContainer';
// import SideBar from './components/SideBar';
import Navbar from "./components/Shoes components/Navbar"
import HeroSection from "./components/Shoes components/Hero Section"
import Categories from "./components/Shoes components/Categories Section"
import FeaturePro from "./components/Shoes components/Feature Product"
import Testimonials from "./components/Shoes components/Testimonials Section"
import Contact from "./components/Shoes components/Contact Section"
import Footer from "./components/Shoes components/Footer"
function App() {
  return (
    <div className="font-sans bg-slate-400">
      <Navbar />
      <HeroSection />
      <Categories />
      <FeaturePro />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

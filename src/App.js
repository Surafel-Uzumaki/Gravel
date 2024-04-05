import "./App.css";
import Navbar from "./components/Navbar";
import Workdone from "./components/Whatwedo";
import AboutUs from "./components/Aboutus";
import SlidingImagesComponent from "./components/slidingimages";
import CaseStudy from "./components/CaseStudy";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonials";

// Only one declaration of the App function should be present
function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Navbar />
      </header>
    <Workdone/>
    <AboutUs/>
    <SlidingImagesComponent/>
    <CaseStudy/>
    <div className="flex gap-4 sm:flex-col lg:flex-row md:flex-col flex-col ">
    <ContactForm/>
    <Testimonial/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;

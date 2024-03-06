import "./App.css";
import Navbar from "./components/Navbar";
import Workdone from "./components/Whatwedo";
import AboutUs from "./components/Aboutus";
import CaseStudy from "./components/CaseStudy";
import ContactForm from "./components/Contactform";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonials";

// Only one declaration of the App function should be present
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    <Workdone/>
    <AboutUs/>
    <CaseStudy/>
    <div className="flex gap-2">
    <ContactForm/>
    <Testimonial/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;

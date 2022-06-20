import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Header from "./components/header/header";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="app">
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Works />
        <Contact />


      </div>

    </div>
  );
}

export default App;

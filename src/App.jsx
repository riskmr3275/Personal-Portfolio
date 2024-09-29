import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

const App = () => {
  return (
    <>
      <Navbar />
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <HeroSection />
        <AboutMe />
        <Technologies />
        <Projects />
      </div>
    </>
  );
};

export default App;
 
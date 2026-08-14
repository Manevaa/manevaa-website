import { ToastProvider } from './hooks/useToast.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ComingSoon from './components/ComingSoon.jsx';
import OurStory from './components/OurStory.jsx';
import Hygiene from './components/Hygiene.jsx';
import FoodTimes from './components/FoodTimes.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import HomeChefs from './components/HomeChefs.jsx';
import FoodCategories from './components/FoodCategories.jsx';
import WhyManevaa from './components/WhyManevaa.jsx';
import EmotionalSection from './components/EmotionalSection.jsx';
import LocalConcept from './components/LocalConcept.jsx';
import CustomerJourney from './components/CustomerJourney.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import EmotionalLine from './components/EmotionalLine.jsx';

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <ComingSoon />

        <EmotionalLine text="Some food doesn't just fill your stomach. It fills your heart." />

        <OurStory />
        <Hygiene />

        <EmotionalLine text="A mother's kitchen has a way of turning food into memories." />

        <FoodTimes />
        <HowItWorks />
        <HomeChefs />

        <EmotionalLine text="From her hands to your heart." />

        <FoodCategories />
        <WhyManevaa />
        <EmotionalSection />
        <LocalConcept />
        <CustomerJourney />

        <EmotionalLine text="Home is where the food tastes like love." />

        <CTA />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  );
}

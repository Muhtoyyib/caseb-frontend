import HeroSection from "../sections/home/Hero";
import FeaturesSection from "../sections/home/Features";
import SpecialtiesSection from "../sections/home/Specialties";
import MedicalSection from "../sections/home/Medical";
import TestimonialsSection from "../sections/home/Testimonials";
import ContactForm from "../forms/ContactForm";

const HomeComponent = () => {
  return (
    <main>
      <HeroSection />
      <TestimonialsSection />
      <ContactForm />
      {/*<FeaturesSection />
      <SpecialtiesSection />
      <MedicalSection />
    
       */}
    </main>
  );
};

export default HomeComponent;

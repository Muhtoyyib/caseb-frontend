import ContactForm from "../forms/ContactForm";
import FeaturesSection from "../sections/home/Features";
import HeroSection from "../sections/home/Hero";
import SpecialtiesSection from "../sections/home/Specialties";
import TestimonialsSection from "../sections/home/Testimonials";

const HomeComponent = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <ContactForm />
      {/* <MedicalSection /> */}
    </main>
  );
};

export default HomeComponent;

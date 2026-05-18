"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, CheckCircle, Scissors, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "Services", id: "#services" },
        { name: "Pricing", id: "#pricing" },
        { name: "Team", id: "#team" },
        { name: "Book", id: "#contact" },
      ]}
      brandName="Blades & Fades"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "radial-gradient" }}
      title="Precision in Every Line Luxury in Every Detail"
      description="Welcome to Blades and Fades—where flawless execution meets 10/10 service. We blend classic barbering techniques with modern style in an atmosphere designed entirely for your comfort."
      buttons={[{ text: "Book Your Chair", href: "#contact" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/barbershop-washbasin-with-professional-chairs_23-2148298338.jpg", imageAlt: "Luxurious barber shop environment" },
        { imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-cutting-man-s-hair-barber-shop_23-2149186474.jpg", imageAlt: "Master barber in action" },
        { imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-woman-dog_23-2148777178.jpg", imageAlt: "Detail of premium grooming tools" },
        { imageSrc: "http://img.b2bpic.net/free-photo/mid-section-barber-wiping-clients-face-with-hot-towel_107420-94798.jpg", imageAlt: "Relaxed high-end salon atmosphere" },
        { imageSrc: "http://img.b2bpic.net/free-photo/bearded-male-sitting-armchair-barber-shop-while-hairdresser-modeling-beard-with-scissors-comb-barbershop_613910-18515.jpg", imageAlt: "Wide shot of elegant barbershop" },
        { imageSrc: "http://img.b2bpic.net/free-photo/hair-salon-chair-with-towel-armchair_23-2148242777.jpg", imageAlt: "Clean, orderly barber grooming station" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Standards"
      metrics={[
        { icon: Scissors, label: "Years Combined Experience", value: "25+" },
        { icon: Star, label: "Five-Star Reviews", value: "500+" },
        { icon: Award, label: "Master Barbers", value: "12" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Precision Haircuts",          description: "Tailored cuts crafted for your lifestyle and hair texture.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/brushing-teeth-process-small-dog-sits-table-dog-brushed-by-professional_1157-48822.jpg",            imageAlt: "Haircut precision"},
          items: [
            { icon: CheckCircle, text: "Consultation included" },
            { icon: CheckCircle, text: "Styling product tutorial" },
          ],
          reverse: false,
        },
      ]}
      title="Unrushed, Personalized Grooming"
      description="We believe your time in the chair should be a refined escape. Our process focuses on precision, technique, and your total comfort."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "1", name: "Beard Oil Blend", price: "$35", imageSrc: "http://img.b2bpic.net/free-photo/shampoo-conditioner-bottles-barbershop-against-wooden-background_627829-6244.jpg" },
        { id: "2", name: "Clay Pomade", price: "$28", imageSrc: "http://img.b2bpic.net/free-photo/from-hands-shaving-neck_23-2147778916.jpg" },
        { id: "3", name: "Texture Spray", price: "$32", imageSrc: "http://img.b2bpic.net/free-photo/front-view-plastic-bottles-hair-dye_23-2148741899.jpg" },
        { id: "4", name: "Classic Aftershave", price: "$45", imageSrc: "http://img.b2bpic.net/free-photo/barber-using-shaving-cream-contour-male-customer-s-beard_23-2148985737.jpg" },
        { id: "5", name: "Shaving Cream", price: "$25", imageSrc: "http://img.b2bpic.net/free-photo/front-view-skin-product-arrangement-with-grey-stones_23-2148761414.jpg" },
        { id: "6", name: "Beard Brush", price: "$40", imageSrc: "http://img.b2bpic.net/free-photo/boomers-using-cbd-oil-cream-treating-body-pain_23-2151263457.jpg" },
      ]}
      title="Premium Grooming Essentials"
      description="Keep your style maintained at home with our curated line of premium apothecary and styling products."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "1", badge: "Signature", price: "$45", subtitle: "Precision Cut & Style", features: ["Consultation", "Precision Cut", "Hot Towel", "Neck Shave"], buttons: [{ text: "Book", href: "#contact" }] },
        { id: "2", badge: "Elite", price: "$65", subtitle: "Full Grooming Package", features: ["Signature Cut", "Beard Trim", "Face Treatment", "Brow Grooming"], buttons: [{ text: "Book", href: "#contact" }] },
        { id: "3", badge: "Master", price: "$85", subtitle: "The Executive Treatment", features: ["Elite Package", "Hot Oil Treatment", "Scalp Massage", "Head Shave"], buttons: [{ text: "Book", href: "#contact" }] },
      ]}
      title="Grooming Investment"
      description="Transparent pricing for exceptional service."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        { id: "1", name: "James R.", role: "Master Barber", imageSrc: "http://img.b2bpic.net/free-photo/man-playing-with-his-toy-poodle_23-2147840145.jpg" },
        { id: "2", name: "Marcus L.", role: "Lead Barber", imageSrc: "http://img.b2bpic.net/free-photo/experienced-florist-holding-dog-smiles_23-2148435668.jpg" },
        { id: "3", name: "Sarah K.", role: "Barber Stylist", imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-beautiful-female-barber-uniform-showing-timeout-gesture-isolated-green-wall_141793-106149.jpg" },
      ]}
      title="Meet Your Barbers"
      description="Our team of professionals are here to elevate your grooming standards."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Robert B.", role: "Executive", testimonial: "The most professional grooming I've had in Lake Charles.", imageSrc: "http://img.b2bpic.net/free-photo/happy-young-man-sitting-isolated-grey_171337-10568.jpg" },
        { id: "2", name: "Mark D.", role: "Professional", testimonial: "Exceptional precision and a truly relaxing atmosphere.", imageSrc: "http://img.b2bpic.net/free-photo/two-brutal-men-suits-pose-mirror-stand-side-by-side-hug-tenderly-love-gay-couple_343596-7338.jpg" },
        { id: "3", name: "David W.", role: "Consultant", testimonial: "Blades & Fades is my new go-to. Incredible service.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-black-man-with-crossed-arms-wearing-wool-suit_613910-1866.jpg" },
        { id: "4", name: "Kevin T.", role: "Entrepreneur", testimonial: "The service is unrushed and the staff is genuinely welcoming.", imageSrc: "http://img.b2bpic.net/free-photo/barber-giving-high-five-client_23-2147737095.jpg" },
        { id: "5", name: "Stephen M.", role: "Designer", testimonial: "Elite environment, perfect cut. Highly recommended.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-sitting-chair_23-2149220526.jpg" },
      ]}
      title="Client Experiences"
      description="What our Lake Charles clients are saying about our service."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Visit Us"
      title="Book Your Chair"
      description="Experience premium grooming in Lake Charles."
      buttons={[{ text: "Schedule Appointment", href: "https://booking.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="BLADES & FADES"
      leftLink={{ text: "Privacy Policy", href: "#" }}
      rightLink={{ text: "© 2024 Blades & Fades", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

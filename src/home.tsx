import React, { type SVGProps, useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import LazyBottle3D from "./LazyBottle3D";
import { useScrollAnimation } from "./useScrollAnimation";
import { useCountUp } from "./useCountUp";
import BulkOrderModal from "./BulkOrderModal";

// --- Icon Components ---
const DropletIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
);

const LeafIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 20A7 7 0 0 1 4 13q0-4.5 4.5-5.6A7.5 7.5 0 0 1 20 8a8 8 0 0 1-8 8q-1.5 0-2.8-.5" />
    <path d="M10 2s1 .5 2 2" />
  </svg>
);

const StarIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const WhatsappIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const ArrowUpIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </svg>
);

// --- Logo Component ---
const CleanLogo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="text-3xl font-bold tracking-tight">
      <span className="bg-red-600 text-white px-4 py-2 rounded-md shadow-lg">
        CLEAN
      </span>
    </div>
    <div className="hidden sm:block text-sm font-semibold text-slate-700 leading-tight">
      Magadh Food
      <br />& Beverage
    </div>
  </div>
);

// --- Main App Component ---
const Home: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Scroll animations for each section
  const featuresAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const productsAnim = useScrollAnimation();
  const aboutAnim = useScrollAnimation();
  const galleryAnim = useScrollAnimation();
  const plantAnim = useScrollAnimation();
  const comingSoonAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isBulkOrderOpen, setIsBulkOrderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            alert("Message sent successfully! We will contact you soon.");
            form.current?.reset();
            setIsSubmitting(false);
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert(
              "Failed to send message. Please try again or contact us directly."
            );
            setIsSubmitting(false);
          }
        );
    }
  };

  const buttonBaseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const buttonVariants = {
    destructive: "bg-red-600 text-white hover:bg-red-600/90",
    outline:
      "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
  };
  const buttonSizes = {
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    defaultSize: "h-10 px-4 py-2",
  };

  const cardClasses =
    "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm";
  const cardHeaderClasses = "flex flex-col space-y-1.5 p-6";
  const cardTitleClasses = "text-2xl font-semibold leading-none tracking-tight";
  const cardDescriptionClasses = "text-sm text-slate-500";
  const cardContentClasses = "p-6 pt-0";
  const cardFooterClasses = "flex items-center p-6 pt-0";

  const labelClasses =
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  const inputClasses =
    "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const textareaClasses =
    "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  const selectClasses =
    "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6">
          <CleanLogo />
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors">Products</a>
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors">About Us</a>
            <a href="#gallery" className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBulkOrderOpen(true)}
              className={`hidden sm:inline-flex ${buttonBaseClasses} ${buttonVariants.outline} ${buttonSizes.sm} border-red-200 text-red-700 hover:bg-red-50`}
            >
              Bulk Order
            </button>
            <a href="#products" className={`hidden sm:inline-flex ${buttonBaseClasses} ${buttonVariants.destructive} ${buttonSizes.sm}`}>Shop Now</a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white shadow-lg animate-in">
            <nav className="flex flex-col px-4 py-3 space-y-1">
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors">Products</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors">About Us</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors">Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2.5 px-3 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors">Contact</a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBulkOrderOpen(true);
                }}
                className={`mt-2 w-full ${buttonBaseClasses} ${buttonVariants.outline} ${buttonSizes.sm} border-red-200 text-red-700 hover:bg-red-50`}
              >
                Bulk Order
              </button>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className={`mt-2 ${buttonBaseClasses} ${buttonVariants.destructive} ${buttonSizes.sm}`}>Shop Now</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with 3D Bottle */}
        <section className="relative container mx-auto px-4 md:px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left z-10">
            <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
              PACKAGED DRINKING WATER
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Pure Hydration.
              <br />
              Simply <span className="text-red-600">CLEAN.</span>
            </h1>
            <p className="max-w-md mx-auto md:mx-0 text-lg text-slate-600">
              Experience the crisp, refreshing taste of perfectly balanced
              water. Filtered for purity, bottled for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className={`${buttonBaseClasses} ${buttonVariants.destructive} ${buttonSizes.lg}`}
              >
                Find a Retailer
              </a>
              <a
                href="#about"
                className={`${buttonBaseClasses} ${buttonVariants.outline} ${buttonSizes.lg}`}
              >
                Learn More
              </a>
            </div>
          </div>
          {/* 3D Bottle Visual Replacement */}
          <div className="flex items-center justify-center h-[500px] w-full">
            <LazyBottle3D className="w-full h-full" scale={40} />
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresAnim.ref} className={`w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200 transition-all duration-700 ${featuresAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                The CLEAN Difference
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                It's not just water. It's a commitment to purity and quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={cardClasses}>
                <div className={cardHeaderClasses}>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <DropletIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className={cardTitleClasses}>Purely Filtered</h3>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    Our multi-stage filtration process removes impurities while
                    retaining essential minerals for a perfectly balanced taste.
                  </p>
                </div>
              </div>
              <div className={cardClasses}>
                <div className={cardHeaderClasses}>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <LeafIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className={cardTitleClasses}>Eco-Friendly</h3>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    We care about our planet. Our bottles are made from 100%
                    recycled and recyclable materials.
                  </p>
                </div>
              </div>
              <div className={cardClasses}>
                <div className={cardHeaderClasses}>
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <StarIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className={cardTitleClasses}>FSSAI Certified</h3>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    Quality assured with FSSAI License No: 1042599000148. Your
                    health and safety is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsAnim.ref} className={`w-full py-16 bg-red-600 text-white transition-all duration-700 ${statsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StatItem target={5000} suffix="+" label="Daily Bottles" />
              <StatItem target={120} suffix="+" label="Retail Partners" />
              <StatItem target={100} suffix="%" label="Pure Quality" />
              <StatItem target={24} suffix="/7" label="Support" />
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="products" ref={productsAnim.ref} className={`w-full py-20 md:py-24 transition-all duration-700 ${productsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Our Products
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Choose the perfect size for every occasion
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 250ML Bottle */}
              <div className={cardClasses}>
                <div className="p-6 flex items-center justify-center min-h-[350px] bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                  {/* 3D Bottle Replacement - Small Scale */}
                  <LazyBottle3D className="w-full h-64" scale={40} />
                </div>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>250 ML</h3>
                  <p className={cardDescriptionClasses}>
                    Perfect for on-the-go hydration
                  </p>
                </div>
                <div className={cardContentClasses}>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Ideal for kids and short trips</li>
                    <li>• Easy to carry in bags</li>
                    <li>• Single-serving convenience</li>
                    <li>• Perfect for meetings and events</li>
                  </ul>
                </div>
              </div>

              {/* 1 Litre Bottle */}
              <div className={cardClasses}>
                <div className="p-6 flex items-center justify-center min-h-[350px] bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                  {/* 3D Bottle Replacement - Medium Scale */}
                  <LazyBottle3D className="w-full h-80" scale={45} />
                </div>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>1 Litre</h3>
                  <p className={cardDescriptionClasses}>Most popular choice</p>
                </div>
                <div className={cardContentClasses}>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Perfect for daily hydration</li>
                    <li>• Ideal for gym and workouts</li>
                    <li>• Great for office use</li>
                    <li>• Suitable for outdoor activities</li>
                  </ul>
                </div>
              </div>

              {/* 2 Litre Bottle */}
              <div className={cardClasses}>
                <div className="p-6 flex items-center justify-center min-h-[350px] bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                  {/* 3D Bottle Replacement - Lalrge Scale */}
                  <LazyBottle3D
                    className="w-full h-96"
                    scale={47}
                    verticalOffset={0.15}
                  />
                </div>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>2 Litre</h3>
                  <p className={cardDescriptionClasses}>
                    Family size for sharing
                  </p>
                </div>
                <div className={cardContentClasses}>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Ideal for family gatherings</li>
                    <li>• Perfect for home storage</li>
                    <li>• Great for parties and picnics</li>
                    <li>• Cost-effective bulk option</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ... Rest of the sections (About, Gallery, etc.) remain unchanged ... */}
        {/* About Us Section */}
        <section
          id="about"
          ref={aboutAnim.ref}
          className={`w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200 transition-all duration-700 ${aboutAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                About Us
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Meet the team behind CLEAN Water
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className={cardClasses}>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>Our Vision</h3>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600 leading-relaxed">
                    At CLEAN, we believe everyone deserves access to pure, safe
                    drinking water. Our mission is to provide the highest
                    quality packaged drinking water while maintaining
                    environmental responsibility and serving our community with
                    integrity.
                  </p>
                </div>
              </div>
              <div className={cardClasses}>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>Leadership</h3>
                </div>
                <div className={cardContentClasses}>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900">Sanjay</p>
                      <p className="text-sm text-slate-600">
                        Founder & Managing Director
                      </p>
                      <p className="text-sm text-slate-500 mt-2">
                        Leading CLEAN with a vision to bring pure, affordable
                        drinking water to every household in Bihar and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" ref={galleryAnim.ref} className={`w-full py-20 md:py-24 transition-all duration-700 ${galleryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Gallery
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                A glimpse into our world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-slate-200 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImage(`/image${i}.webp`)}
                >
                  <img
                    src={`/image${i}.webp`}
                    alt={`Gallery ${i}`}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="400"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plant Visit Section */}
        <section ref={plantAnim.ref} className={`w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200 transition-all duration-700 ${plantAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Visit Our Plant
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                See where the magic happens - virtual tour of our facility
              </p>
            </div>
            <div className={`${cardClasses} max-w-4xl mx-auto overflow-hidden`}>
              <div className="aspect-video bg-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1763616993945!6m8!1m7!1sCAoSHENJQUJJaEJZcl8yTzE4b1dLRmlDR3RXdkxVUmQ.!2m2!1d24.71779511849405!2d84.96749427728626!3f194.66587064676617!4f16.09721393034826!5f0.4000000000000002"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Plant Virtual Tour"
                ></iframe>
              </div>
              <div className={cardContentClasses}>
                <p className="text-center text-slate-600">
                  Take a virtual walk through our state-of-the-art facility
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Products Section */}
        <section ref={comingSoonAnim.ref} className={`w-full py-20 md:py-24 transition-all duration-700 ${comingSoonAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Coming Soon
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Exciting new products on the horizon
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`${cardClasses} bg-slate-50`}>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>Flavored Water</h3>
                  <p className={cardDescriptionClasses}>
                    Refreshing fruit-infused options
                  </p>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    Natural fruit flavors with zero added sugar. Stay tuned!
                  </p>
                </div>
              </div>
              <div className={`${cardClasses} bg-slate-50`}>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>Alkaline Water</h3>
                  <p className={cardDescriptionClasses}>
                    pH balanced for wellness
                  </p>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    Enhanced hydration with added minerals. Coming soon!
                  </p>
                </div>
              </div>
              <div className={`${cardClasses} bg-slate-50`}>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>5L Dispenser</h3>
                  <p className={cardDescriptionClasses}>
                    Perfect for home and office
                  </p>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    Large format for your convenience. Launching soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactAnim.ref}
          className={`w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200 transition-all duration-700 ${contactAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Get in Touch
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Have questions or want to partner with us? We'd love to hear
                from you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className={cardClasses}>
                <div className={cardHeaderClasses}>
                  <h3 className={cardTitleClasses}>Contact Us</h3>
                  <p className={cardDescriptionClasses}>
                    Fill out the form and we'll get back to you shortly.
                  </p>
                </div>
                <div className={cardContentClasses}>
                  <form
                    id="contact-form"
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className={labelClasses}>
                          First name
                        </label>
                        <input
                          id="first-name"
                          name="first_name"
                          placeholder="John"
                          className={inputClasses}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className={labelClasses}>
                          Last name
                        </label>
                        <input
                          id="last-name"
                          name="last_name"
                          placeholder="Doe"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="address" className={labelClasses}>
                        Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        placeholder="Your address"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reason" className={labelClasses}>
                        Reason for Contact
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        className={selectClasses}
                      >
                        <option value="">Select an option</option>
                        <option value="distributor">
                          Become a Distributor
                        </option>
                        <option value="retailer">Become a Retailer</option>
                        <option value="cnf">C&F Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className={labelClasses}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Please write something so we can contact you ASAP..."
                        className={`${textareaClasses} min-h-[100px]`}
                        required
                      />
                    </div>
                  </form>
                </div>
                <div className={cardFooterClasses}>
                  <button
                    type="submit"
                    form="contact-form"
                    disabled={isSubmitting}
                    className={`${buttonBaseClasses} ${buttonVariants.destructive} w-full ${buttonSizes.defaultSize}`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className={cardClasses}>
                  <div className={cardHeaderClasses}>
                    <h3 className={cardTitleClasses}>Contact Information</h3>
                  </div>
                  <div className={cardContentClasses}>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-slate-900">Address</p>
                        <p className="text-slate-600">
                          Vill- Mastpura, near Royal Oak Showroom
                          <br />
                          Gaya - 823004, Bihar
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          Contact Person
                        </p>
                        <p className="text-slate-600">
                          Sanjay (Mobile) : +91 90242 05132
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">
                          FSSAI License
                        </p>
                        <p className="text-slate-600">1042599000148</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className={cardClasses}>
                  <div className={cardHeaderClasses}>
                    <h3 className={cardTitleClasses}>Find Us</h3>
                  </div>
                  <div className="overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.803740580684!2d84.96652380535815!3d24.715363146739445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32d9cc8719203%3A0xecab3a59771e8f75!2sMagadh%20Food%20and%20Beverage-Clean%20Water%20Plant-Best%20Water%20Manufacture%20Unit%20in%20Gaya!5e0!3m2!1sen!2sin!4v1763637527767!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              <span className="bg-white text-red-600 px-3 py-1.5 rounded-md">
                CLEAN
              </span>
            </div>
            <p className="text-slate-400 max-w-md">
              Pure, crisp, and refreshing. Our commitment is to bring you the
              best water possible.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/919024205132"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="WhatsApp Business"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  Become a Distributor
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700">
          <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <p>
                © {new Date().getFullYear()} Clean Water Co. All rights reserved. FSSAI: 1042599000148
              </p>
              <span className="hidden sm:inline">•</span>
              <p className="flex items-center gap-1">
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/abhimanyu-k-00b40611a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Abhimanyu Kumar
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gallery Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={lightboxImage}
            alt="Gallery full view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919024205132"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <WhatsappIcon className="w-6 h-6 md:w-8 md:h-8" />
          <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Chat with us
          </span>
        </a>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className={`bg-white text-slate-800 p-3 rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-all duration-300 ${showScrollTop ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      </div>

      <BulkOrderModal
        isOpen={isBulkOrderOpen}
        onClose={() => setIsBulkOrderOpen(false)}
        serviceId={import.meta.env.VITE_EMAILJS_SERVICE_ID}
        templateId={import.meta.env.VITE_EMAILJS_TEMPLATE_ID}
        publicKey={import.meta.env.VITE_EMAILJS_PUBLIC_KEY}
      />
    </div>
  );
};

// Stat Component
const StatItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref} className="space-y-2">
      <div className="text-4xl md:text-5xl font-bold">
        {count}{suffix}
      </div>
      <div className="text-red-100 font-medium">{label}</div>
    </div>
  );
};

export default Home;

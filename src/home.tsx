import React, { type SVGProps, type SyntheticEvent } from "react";

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
            <a
              href="#products"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              About Us
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <button
            className={`${buttonBaseClasses} ${buttonVariants.destructive} ${buttonSizes.sm}`}
          >
            Shop Now
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with 3D Bottle */}
        <section className="relative container mx-auto px-4 md:px-6 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
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
              <button
                className={`${buttonBaseClasses} ${buttonVariants.destructive} ${buttonSizes.lg}`}
              >
                Find a Retailer
              </button>
              <button
                className={`${buttonBaseClasses} ${buttonVariants.outline} ${buttonSizes.lg}`}
              >
                Learn More
              </button>
            </div>
          </div>
          {/* 3D Bottle Visual */}
          <div className="flex items-center justify-center h-[400px] perspective-1000">
            <div className="relative w-32 h-96 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-float">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-12 h-8 bg-red-600 rounded-t-lg"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold text-2xl [writing-mode:vertical-rl] [text-orientation:mixed]">
                CLEAN
              </div>
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs text-slate-400">
                250ML
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200">
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

        {/* Product Section */}
        <section id="products" className="w-full py-20 md:py-24">
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
                <div className="p-6 flex items-center justify-center min-h-[300px] bg-gradient-to-b from-slate-50 to-white">
                  <div className="relative w-20 h-64 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-8 h-6 bg-red-600 rounded-t-lg"></div>
                    <div className="absolute inset-3 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold text-lg [writing-mode:vertical-rl] [text-orientation:mixed]">
                      CLEAN
                    </div>
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-semibold">
                      250ML
                    </div>
                  </div>
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
                <div className="p-6 flex items-center justify-center min-h-[300px] bg-gradient-to-b from-slate-50 to-white">
                  <div
                    className="relative w-24 h-80 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-10 h-7 bg-red-600 rounded-t-lg"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold text-2xl [writing-mode:vertical-rl] [text-orientation:mixed]">
                      CLEAN
                    </div>
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm text-slate-400 font-semibold">
                      1L
                    </div>
                  </div>
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
                <div className="p-6 flex items-center justify-center min-h-[300px] bg-gradient-to-b from-slate-50 to-white">
                  <div
                    className="relative w-32 h-96 bg-gradient-to-b from-blue-100 via-blue-50 to-blue-100 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-12 h-8 bg-red-600 rounded-t-lg"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold text-3xl [writing-mode:vertical-rl] [text-orientation:mixed]">
                      CLEAN
                    </div>
                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-sm text-slate-400 font-semibold">
                      2L
                    </div>
                  </div>
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

        {/* About Us Section */}
        <section
          id="about"
          className="w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200"
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
        <section id="gallery" className="w-full py-20 md:py-24">
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
                  className="aspect-square bg-slate-200 rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://placehold.co/600x600/e2e8f0/64748b?text=Gallery+${i}`}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plant Visit Section */}
        <section className="w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200">
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
        <section className="w-full py-20 md:py-24">
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
          className="w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200"
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
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className={labelClasses}>
                          First name
                        </label>
                        <input
                          id="first-name"
                          placeholder="John"
                          className={inputClasses}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className={labelClasses}>
                          Last name
                        </label>
                        <input
                          id="last-name"
                          placeholder="Doe"
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className={labelClasses}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className={labelClasses}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="address" className={labelClasses}>
                        Address
                      </label>
                      <input
                        id="address"
                        placeholder="Your address"
                        className={inputClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="reason" className={labelClasses}>
                        Reason for Contact
                      </label>
                      <select id="reason" className={selectClasses}>
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
                        placeholder="Please write something so we can contact you ASAP..."
                        className={`${textareaClasses} min-h-[100px]`}
                      />
                    </div>
                  </form>
                </div>
                <div className={cardFooterClasses}>
                  <button
                    className={`${buttonBaseClasses} ${buttonVariants.destructive} w-full ${buttonSizes.defaultSize}`}
                  >
                    Send Message
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
                href="https://wa.me/919876543210"
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
            <p>
              &copy; 2025 Clean Water Co. All rights reserved. FSSAI:
              1042599000148
            </p>
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;

import React, { type SVGProps, type SyntheticEvent } from "react";

// --- Icon Components (from lucide-react) ---
// We inline the SVGs for the icons.

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
// We re-create the logo from the PDF using HTML and Tailwind.
const CleanLogo: React.FC = () => (
  <div className="text-3xl font-bold tracking-tight">
    <span className="bg-red-600 text-white px-4 py-2 rounded-md shadow-lg">
      CLEAN
    </span>
  </div>
);

// --- Main App Component ---
const Home: React.FC = () => {
  // Define Tailwind classes for components locally
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
    defaultSize: "h-10 px-4 py-2", // Renamed from 'default'
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

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto h-16 flex items-center justify-between px-4 md:px-6">
          <CleanLogo />
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              Our Story
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-700 hover:text-red-600 transition-colors"
            >
              Sustainability
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
        {/* Hero Section */}
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
          {/* Hero Visual - Recreating the vertical logo as a design element */}
          <div className="hidden md:flex items-center justify-center h-[400px]">
            <h1 className="text-9xl font-bold text-red-600 opacity-90 [writing-mode:vertical-rl] [text-orientation:mixed] transform rotate-180 select-none">
              CLEAN
            </h1>
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
                  <h3 className={cardTitleClasses}>Award-Winning Taste</h3>
                </div>
                <div className={cardContentClasses}>
                  <p className="text-slate-600">
                    Voted best-tasting water by experts and consumers alike.
                    Experience the difference for yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={cardClasses}>
                  <div className="p-6">
                    <img
                      src="https://placehold.co/600x800/f87171/white?text=CLEAN\n250ML"
                      alt="CLEAN 250ML Water Bottle"
                      className="rounded-lg w-full object-cover"
                      onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/600x800/f87171/white?text=CLEAN+Water+Bottle";
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  Hydration on the Go
                </h2>
                <p className="text-lg text-slate-600">
                  Our classic 250ML bottle is the perfect companion for your
                  active lifestyle. Easy to carry, easy to drink, and always
                  refreshing.
                </p>
                <div className={`${cardClasses} bg-slate-50`}>
                  <div className={cardHeaderClasses}>
                    <h3 className={cardTitleClasses}>CLEAN 250ML Bottle</h3>
                    <p className={cardDescriptionClasses}>
                      Also available in 500ML and 1L sizes.
                    </p>
                  </div>
                  <div className={cardFooterClasses}>
                    <button
                      className={`${buttonBaseClasses} ${buttonVariants.destructive} w-full sm:w-auto ${buttonSizes.defaultSize}`}
                    >
                      Shop All Products
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-20 md:py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Get in Touch
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Have questions about our products or sustainability efforts?
                We'd love to hear from you.
              </p>
            </div>
            <div className={`${cardClasses} max-w-2xl mx-auto`}>
              <div className={cardHeaderClasses}>
                <h3 className={cardTitleClasses}>Contact Us</h3>
                <p className={cardDescriptionClasses}>
                  Please fill out the form below and our team will get back to
                  you shortly.
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
                    <label htmlFor="message" className={labelClasses}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message..."
                      className={`${textareaClasses} min-h-[120px]`}
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
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-400 hover:text-white">
                  Contact Us
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
            <p>&copy; 2025 Clean Water Co. All rights reserved.</p>
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
    </div>
  );
};

export default Home;

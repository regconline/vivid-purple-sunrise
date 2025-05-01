
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Stethoscope, BriefcaseMedical, Hospital, Syringe } from "lucide-react";

const Home = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-regcon-blue to-regcon-purple opacity-10 dark:opacity-20"></div>
          <div className="container relative z-10">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Modern Digital Growth for Private Medical Practices
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground">
                Empowering healthcare providers to focus on patients while we handle your digital growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Book a Discovery Call
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Get a Free Audit
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">About RegCon Online</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  RegCon Online is a leading healthcare digital marketing provider specializing in helping doctors, specialists, private clinics, and healthcare brands achieve sustainable growth through tailored digital solutions.
                </p>
                <p className="text-lg mb-6">
                  Our key differentiator is the combination of high-performing websites, data-driven ads, and automation tools specifically designed for medical practices, enabling healthcare providers to focus on patient care.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Schedule a Consultation
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in">
                    <h3 className="text-4xl font-bold gradient-text">100+</h3>
                    <p className="text-muted-foreground">Medical Practices</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in" style={{animationDelay: "150ms"}}>
                    <h3 className="text-4xl font-bold gradient-text">300%</h3>
                    <p className="text-muted-foreground">Patient Growth</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in" style={{animationDelay: "300ms"}}>
                    <h3 className="text-4xl font-bold gradient-text">95%</h3>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in" style={{animationDelay: "450ms"}}>
                    <h3 className="text-4xl font-bold gradient-text">8+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section bg-muted/50">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Services</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer specialized digital marketing solutions designed specifically for healthcare providers.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Website Design & SEO",
                    description: "Conversion-focused, SEO-optimized websites positioning your practice as premium.",
                    icon: <Hospital className="h-10 w-10 mb-4 text-regcon-blue" />,
                    delay: 0,
                  },
                  {
                    title: "Google Ads & Meta Ads",
                    description: "Laser-targeted campaigns driving real patients to your practice.",
                    icon: <BriefcaseMedical className="h-10 w-10 mb-4 text-regcon-blue" />,
                    delay: 100,
                  },
                  {
                    title: "Lead Generation & Automation",
                    description: "Capture, nurture, and convert leads automatically.",
                    icon: <Stethoscope className="h-10 w-10 mb-4 text-regcon-blue" />,
                    delay: 200,
                  },
                  {
                    title: "Online Reputation Management",
                    description: "Grow reviews and build trust across platforms.",
                    icon: <Hospital className="h-10 w-10 mb-4 text-regcon-blue" />,
                    delay: 300,
                  },
                  {
                    title: "Email & SMS Marketing",
                    description: "Automated, personalized patient communication.",
                    icon: <Syringe className="h-10 w-10 mb-4 text-regcon-blue" />,
                    delay: 400,
                  },
                  {
                    title: "Full Growth Packages",
                    description: "All services combined into one growth engine for your medical practice.",
                    icon: <BriefcaseMedical className="h-10 w-10 mb-4 text-regcon-blue" />,
                    delay: 500,
                  },
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-lg p-6 shadow-sm card-hover animate-fade-in" 
                    style={{animationDelay: `${service.delay}ms`}}
                  >
                    <div className="flex justify-center">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link 
                      to="/services" 
                      className="text-regcon-blue hover:underline font-medium flex items-center justify-center"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <div className="text-center mt-12">
              <Link to="/services" className="btn btn-primary">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Solutions</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover our innovative healthcare marketing solutions designed to solve specific challenges for medical practices.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 bg-muted flex justify-center items-center">
                    <Hospital className="h-16 w-16 text-regcon-blue" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Medical Practice Website Platform</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive website platform with built-in SEO and patient acquisition features specifically designed for healthcare providers.
                    </p>
                    <Link to="/products" className="btn btn-primary">Get a Free Audit</Link>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 bg-muted flex justify-center items-center">
                    <Stethoscope className="h-16 w-16 text-regcon-blue" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Patient Acquisition System</h3>
                    <p className="text-muted-foreground mb-4">
                      An integrated solution for managing and optimizing your patient acquisition with AI-powered recommendations.
                    </p>
                    <Link to="/products" className="btn btn-primary">Book a Demo</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="text-center mt-12">
              <Link to="/products" className="btn btn-outline">
                View All Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section bg-muted/50">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">What Our Clients Say</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    text: "RegCon Online delivered an exceptional website and digital marketing strategy that transformed our patient acquisition. Our practice has grown by 200% in just 6 months.",
                    author: "Dr. Sarah Johnson",
                    role: "Dermatology Specialist, MedDerm Clinic",
                  },
                  {
                    text: "We've been working with RegCon for over 3 years now. Their team consistently delivers quality solutions that have helped our clinic grow and stay competitive in a crowded market.",
                    author: "Dr. Michael Brown",
                    role: "Orthopedic Surgeon, OrthoHealth Center",
                  },
                  {
                    text: "The lead generation system provided by RegCon was comprehensive and highly effective. Our patient bookings increased 150% within the first three months.",
                    author: "Dr. Lisa Chen",
                    role: "Family Medicine, HealthFirst Practice",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg shadow-sm relative">
                    <div className="text-6xl text-regcon-purple opacity-20 absolute top-2 left-2">"</div>
                    <div className="text-muted-foreground mb-4 relative z-10">
                      {testimonial.text}
                    </div>
                    <div className="mt-4">
                      <div className="font-bold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Contact Us</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ready to transform your healthcare practice? Get in touch with us today.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-regcon-blue"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-regcon-blue"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-regcon-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-border bg-card focus:outline-none focus:ring-2 focus:ring-regcon-blue"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit & Get a Free Website Audit
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Medical Park<br />
                      Pretoria, South Africa
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:info@regconline.co.za"
                      className="text-regcon-blue hover:underline"
                    >
                      info@regconline.co.za
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a
                      href="tel:+27123456789"
                      className="text-regcon-blue hover:underline"
                    >
                      +27 12 345 6789
                    </a>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;

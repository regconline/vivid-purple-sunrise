
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ThemeProvider } from "@/components/ThemeProvider";

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
                Building AI Driven Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl text-muted-foreground">
                Empowering businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Our Services
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
                  RegCon Online is a leading technology provider specializing in AI-driven solutions that help businesses transform their operations and achieve sustainable growth.
                </p>
                <p className="text-lg mb-6">
                  With over a decade of experience, our team of experts combines deep industry knowledge with cutting-edge technical expertise to deliver solutions that address your unique business challenges.
                </p>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in">
                    <h3 className="text-4xl font-bold gradient-text">10+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in" style={{animationDelay: "150ms"}}>
                    <h3 className="text-4xl font-bold gradient-text">50+</h3>
                    <p className="text-muted-foreground">Clients Served</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in" style={{animationDelay: "300ms"}}>
                    <h3 className="text-4xl font-bold gradient-text">200+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center p-6 bg-card rounded-lg shadow-sm card-hover animate-fade-in" style={{animationDelay: "450ms"}}>
                    <h3 className="text-4xl font-bold gradient-text">95%</h3>
                    <p className="text-muted-foreground">Client Satisfaction</p>
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
                  We offer a comprehensive range of technology services to help your business thrive in the digital age.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI Solutions",
                    description: "Custom AI solutions that automate processes, provide insights, and enhance decision-making.",
                    delay: 0,
                  },
                  {
                    title: "Software Development",
                    description: "Tailored software solutions designed to meet your unique business requirements and challenges.",
                    delay: 100,
                  },
                  {
                    title: "Data Analytics",
                    description: "Transform your data into actionable insights with our advanced analytics services.",
                    delay: 200,
                  },
                  {
                    title: "Cloud Services",
                    description: "Secure, scalable cloud infrastructure and migration services for your business.",
                    delay: 300,
                  },
                  {
                    title: "IT Consulting",
                    description: "Expert guidance on technology strategy, digital transformation, and IT optimization.",
                    delay: 400,
                  },
                  {
                    title: "Training Programs",
                    description: "Comprehensive training programs to empower your team with the latest skills and knowledge.",
                    delay: 500,
                  },
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-lg p-6 shadow-sm card-hover animate-fade-in" 
                    style={{animationDelay: `${service.delay}ms`}}
                  >
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link 
                      to="/services" 
                      className="text-regcon-blue hover:underline font-medium flex items-center"
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
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Products</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover our innovative products designed to solve specific business challenges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">AI Analytics Platform</h3>
                    <p className="text-muted-foreground mb-4">
                      A comprehensive analytics platform with built-in AI capabilities to transform your data into actionable insights.
                    </p>
                    <Link to="/products" className="btn btn-primary">Learn More</Link>
                  </div>
                </div>

                <div className="bg-card rounded-lg overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                  <div className="h-48 bg-muted"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Smart Operations Manager</h3>
                    <p className="text-muted-foreground mb-4">
                      An integrated solution for managing and optimizing your business operations with AI-powered recommendations.
                    </p>
                    <Link to="/products" className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="text-center mt-12">
              <Link to="/products" className="btn btn-outline">
                View All Products
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
                    text: "RegCon Online delivered an exceptional AI solution that transformed our business operations. Their expertise and professionalism exceeded our expectations.",
                    author: "Sarah Johnson",
                    role: "CTO, TechCorp",
                  },
                  {
                    text: "We've been working with RegCon for over 5 years now. Their team consistently delivers quality solutions that have helped us grow and stay competitive.",
                    author: "Michael Brown",
                    role: "Operations Director, InnovateGroup",
                  },
                  {
                    text: "The training program provided by RegCon was comprehensive and highly practical. Our team immediately applied their new skills to improve our processes.",
                    author: "Lisa Chen",
                    role: "HR Manager, GlobalSolutions",
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
                  Ready to transform your business? Get in touch with us today.
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
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Business Park<br />
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

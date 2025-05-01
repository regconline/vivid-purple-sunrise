
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        {/* Page Header */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-regcon-blue to-regcon-purple opacity-10 dark:opacity-20"></div>
          <div className="container relative z-10 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                About Us
              </h1>
              <p className="text-xl mb-0 max-w-3xl mx-auto text-muted-foreground">
                Learn more about RegCon Online and our mission to empower businesses with innovative technology solutions.
              </p>
            </AnimatedSection>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Our Story */}
        <section className="section">
          <div className="container">
            <AnimatedSection delay={200} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 gradient-text inline-block">Our Story</h2>
                <p className="text-lg mb-4">
                  RegCon Online was founded in 2010 with a clear vision: to help businesses leverage the power of technology to solve complex challenges and drive growth.
                </p>
                <p className="text-lg mb-4">
                  What began as a small team of passionate technologists has grown into a comprehensive technology provider with expertise across AI, software development, data analytics, and more.
                </p>
                <p className="text-lg mb-4">
                  Throughout our journey, we've remained committed to our core values of innovation, excellence, and client success. These values guide everything we do, from how we develop solutions to how we build relationships with our clients.
                </p>
              </div>
              <div className="bg-muted rounded-lg h-80"></div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Mission and Vision */}
        <section className="section bg-muted/50">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Mission and Vision</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground">
                  To empower organizations with innovative, high-quality technology solutions that solve real business problems and drive sustainable growth.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground">
                  To be the leading provider of AI-driven solutions in Africa, recognized for our technical excellence, innovation, and commitment to client success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Values */}
        <section className="section">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Core Values</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Innovation",
                    description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
                  },
                  {
                    title: "Excellence",
                    description: "We are committed to delivering the highest quality in everything we do.",
                  },
                  {
                    title: "Integrity",
                    description: "We conduct our business with honesty, transparency, and ethical principles.",
                  },
                  {
                    title: "Client Focus",
                    description: "We prioritize our clients' success and build lasting relationships based on trust.",
                  },
                ].map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-card rounded-lg p-6 shadow-sm card-hover"
                  >
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Team */}
        <section className="section bg-muted/50">
          <div className="container">
            <AnimatedSection delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Our Leadership Team</h2>
                <div className="w-20 h-1 gradient-bg mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  Meet the experienced professionals who lead our company.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "John Smith",
                    role: "Chief Executive Officer",
                    bio: "John has over 20 years of experience in the technology industry and leads RegCon's strategic vision."
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Chief Technology Officer",
                    bio: "Sarah oversees RegCon's technical strategy and ensures we stay at the forefront of emerging technologies."
                  },
                  {
                    name: "Michael Brown",
                    role: "Head of AI Solutions",
                    bio: "Michael leads our AI development team and has deep expertise in machine learning and data science."
                  },
                  {
                    name: "Lisa Chen",
                    role: "Chief Operating Officer",
                    bio: "Lisa ensures our operations run smoothly and efficiently while maintaining our high quality standards."
                  },
                  {
                    name: "David Nkosi",
                    role: "Head of Client Success",
                    bio: "David works closely with our clients to ensure our solutions deliver maximum value and meet their objectives."
                  },
                  {
                    name: "Emma Patel",
                    role: "Head of Training",
                    bio: "Emma develops and oversees our comprehensive training programs for both clients and internal teams."
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
                    <div className="h-64 bg-muted"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-regcon-blue mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;

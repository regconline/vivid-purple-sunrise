
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl gradient-text mb-4 flex items-center">
              <Stethoscope className="mr-2 h-5 w-5" />
              RegCon Online
            </h3>
            <p className="text-muted-foreground mb-4">
              Modern Digital Growth for Private Medical Practices that empower healthcare providers to focus on patient care.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Website Design & SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Google & Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-regcon-blue transition-colors duration-300"
                >
                  Get a Free Audit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>123 Medical Park</p>
              <p>Pretoria, South Africa</p>
              <p className="pt-2">
                <a 
                  href="mailto:info@regconline.co.za"
                  className="hover:text-regcon-blue transition-colors duration-300"
                >
                  info@regconline.co.za
                </a>
              </p>
              <p>
                <a 
                  href="tel:+27123456789"
                  className="hover:text-regcon-blue transition-colors duration-300"
                >
                  +27 12 345 6789
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} RegCon Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

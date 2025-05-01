
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        
        <div className="flex-grow flex items-center justify-center py-20">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
            <p className="text-2xl md:text-3xl text-foreground mb-6">Oops! Page not found</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default NotFound;

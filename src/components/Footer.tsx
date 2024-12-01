import { Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="mb-2">Email: info@dusom.org</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">About Us</a></li>
              <li><a href="#" className="hover:text-secondary">Programs</a></li>
              <li><a href="#" className="hover:text-secondary">Admissions</a></li>
              <li><a href="#" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary"><Facebook /></a>
              <a href="#" className="hover:text-secondary"><Twitter /></a>
              <a href="#" className="hover:text-secondary"><Instagram /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p>123 Education Street</p>
            <p>City, State 12345</p>
            <p>United States</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} DUSOM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};